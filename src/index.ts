import { IDebugIOEvents } from './types/IDebugIOEvents'
import { IOptions } from './types/IOptions'
import LogReciver from './types/LogReciver'
import { IPlaceholders } from './types/IPlaceholders';
import { IPrettyContext } from './types/IPrettyContext';
import template from './template'
import TemplateEngine from './types/TemplateEngine';
import LogType from './types/LogType';
import Console from './recivers/Console'

class DebugIO {
  /**
   * options
   * @type {IOptions}
   */
  public readonly options: IOptions;
  /**
   * namespace
   */
  public namespace: string;
  /**
   * children of the instance
   * @type {DebugIO[]}
   */
  public children: DebugIO[] = [];
  /**
   * parents of the instance
   * @type {DebugIO[]}
   */
  public parents: DebugIO[] = [];
  /**
   * recivers of the instance
   * @type {LogReciver[]}
   */
  public recivers: LogReciver[] = [];

  /**
   * prefix variable in main placeholder
   */
  public static prefix: string = "";
  /**
   * placeholders of the instance
   * @type {IPlaceholders}
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
   * @type {TemplateEngine}
   */
  public static render: TemplateEngine = template;

  /**
   * standart recievers
   */
  public static recivers = {
    Console
  };

  private static _createdNamespaces: string[] = [];
  private timestamps: Map<string, Date> = new Map();

  /**
   * 
   * @param options {IOptions} options
   */
  constructor(options: IOptions) {
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

  private _invoke(logType: LogType, ...messages: any[]) {
    for(const reciver of this.recivers) {
      reciver(logType, messages.join(DebugIO.separator), messages, this._pretty(logType, messages.join(DebugIO.separator)));
    }
  }

  /**
   * post a log
   * 
   * @param messages data to log
   */
  log(...messages: any[]): void {
    this._invoke('log', messages);
  }

  /**
   * post an error
   * 
   * @param messages errors
   */
  error(...messages: any[]): void {
    this._invoke('error', messages);
  }

  /**
   * post a warning
   * 
   * @param messages warn
   */
  warn(...messages: any[]): void {
    this._invoke('warn', messages);
  }

  /**
   * start timestamp
   * 
   * @param label the name of the time coutner
   */
  time(label: string): void {
    this.timestamps.set(label, new Date);
  }

  /**
   * stop timestamp
   * 
   * @param label the name of the time coutner
   * @param logType type of the log
   */
  timeEnd(label: string, logType: LogType = "log"): void {
    const time = this.timestamps.get(label);
    if(time == undefined) throw new TypeError(`cannot find ${label} time counter`);
    this._invoke(logType, `${label}: ${new Date().getTime() - time.getTime()}ms`);
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

    return DebugIO.render(DebugIO.placeholders.main, Object.assign(final, this.options.customContext ?? {}));
  }
}

export = DebugIO;