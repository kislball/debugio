import { EventEmitter } from 'events'
import { IDebugIOEvents } from './types/IDebugIOEvents'
import { IOptions } from './types/IOptions'
import LogReciver from './types/LogReciver'
import { IPlaceholders } from './types/IPlaceholders';
import { IPrettyContext } from './types/IPrettyContext';
import template from './template'
import TemplateEngine from './types/TemplateEngine';
import LogType from './types/LogType';
import Console from './recivers/Console'

// https://stackoverflow.com/a/61609010
declare interface DebugIO {
  on<U extends keyof  IDebugIOEvents>(
    event: U, listener:  IDebugIOEvents[U]
  ): this;

  emit<U extends keyof IDebugIOEvents>(
    event: U, ...args: Parameters< IDebugIOEvents[U]>
  ): boolean;
}

class DebugIO extends EventEmitter {
  /**
   * options
   */
  public readonly options: IOptions;
  /**
   * namespace
   */
  public namespace: string;
  /**
   * children of the instance
   */
  public children: DebugIO[] = [];
  /**
   * parents of the instance
   */
  public parents: DebugIO[] = [];
  /**
   * recivers of the instance
   */
  public recivers: LogReciver[] = [];

  /**
   * prefix variable in main placeholder
   */
  public static prefix: string = "";
  /**
   * placeholders of the instance
   */
  public static placeholders: IPlaceholders = {
    main: "{{ prefix }}{{ namespaces }}{{ logType }} {{ pretty }}",
    logType: "[{{ rawLogType }}]",
    namespace: "[{{ namespace }}]"
  }; 
  /**
   * separator which messages are joined with
   */
  public static separator: string = ", ";
  /**
   * render functions
   */
  public static render: TemplateEngine = template;

  /**
   * standart recievers
   */
  public static recivers = {
    Console
  };

  private static _createdNamespaces: string[] = [];

  /**
   * 
   * @param options - options
   */
  constructor(options: IOptions) {
    super();
    if(!options.namespace) throw new TypeError("no namespace provided");
    if(DebugIO._createdNamespaces.includes(options.namespace)) throw new RangeError(`namespace ${options.namespace} has been already declared`);
    this.options = options;
    this.namespace = options.namespace;

    DebugIO._createdNamespaces.push(this.namespace);

    if(this.options.parent) {
      for(const parent of this.options.parent.parents) {
        this.parents.push(parent);
      }
      this.parents.push(this.options.parent);

      this.options.parent.children.push(this);
    }

    if(this.options.recivers) {
      for(const reciver of this.options.recivers) {
        this.recivers.push(reciver);
      }
    }

    if(this.options.invokeParentRecivers == true) {
      for(const parent of this.parents) {
        for(const parentReciver of parent.recivers) {
          this.recivers.push(parentReciver);
        }
      }
    }
  }

  /**
   * log data
   * 
   * @param messages data to log
   */
  log(...messages: any[]): void {
    for(const reciver of this.recivers) {
      reciver('log', messages.join(DebugIO.separator), messages, this._pretty('log', messages.join(DebugIO.separator)));
    }
    this.emit('log', messages.join(DebugIO.separator), messages);
  }

  /**
   * output error
   * 
   * @param messages errors
   */
  error(...messages: any[]): void {
    for(const reciver of this.recivers) {
      reciver('error', messages.join(DebugIO.separator), messages, this._pretty('error', messages.join(DebugIO.separator)));
    }
    this.emit('errorLog', messages.join(DebugIO.separator), messages);
  }

  /**
   * output a warning
   * 
   * @param messages warn
   */
  warn(...messages: any[]): void {
    for(const reciver of this.recivers) {
      reciver('warn', messages.join(DebugIO.separator), messages, this._pretty('warn', messages.join(DebugIO.separator)));
    }
    this.emit('warnLog', messages.join(DebugIO.separator), messages);
  }

  /**
   * use a reciver for the instance
   * 
   * @param reciver reciver to use
   */
  use(reciver: LogReciver): void {
    this.recivers.push(reciver);
  }

  private _pretty(logType: LogType, ...messages: any[]): string {
    const message = messages.join(DebugIO.separator);
    const final: IPrettyContext = {
      prefix: DebugIO.prefix,
      namespaces: "",
      pretty: message,
      logType: DebugIO.render(DebugIO.placeholders.logType, {rawLogType: logType})   
    };

    const namespaceNames = this.parents.map(e => e.namespace);
    namespaceNames.push(this.namespace);

    const namespaces: string = namespaceNames.map(e => DebugIO.render(DebugIO.placeholders.namespace, {namespace: e})).join("");
    final.namespaces = namespaces;

    return DebugIO.render(DebugIO.placeholders.main, final);
  }
}

export = DebugIO;