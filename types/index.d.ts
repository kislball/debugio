import { IOptions } from './types/IOptions';
import LogReciver from './types/LogReciver';
import { IPlaceholders } from './types/IPlaceholders';
import TemplateEngine from './types/TemplateEngine';
import LogType from './types/LogType';
declare class DebugIO {
    /**
     * options
     * @type {IOptions}
     */
    readonly options: IOptions;
    /**
     * namespace
     */
    namespace: string;
    /**
     * children of the instance
     * @type {DebugIO[]}
     */
    children: DebugIO[];
    /**
     * parents of the instance
     * @type {DebugIO[]}
     */
    parents: DebugIO[];
    /**
     * recivers of the instance
     * @type {LogReciver[]}
     */
    recivers: LogReciver[];
    /**
     * prefix variable in main placeholder
     */
    static prefix: string;
    /**
     * placeholders of the instance
     * @type {IPlaceholders}
     */
    static placeholders: IPlaceholders;
    /**
     * separator which messages are joined with
     */
    static separator: string;
    /**
     * render functions
     * @type {TemplateEngine}
     */
    static render: TemplateEngine;
    /**
     * standart recievers
     */
    static recivers: {
        Console: (logType: LogType, message: any, messages: any[], pretty: string) => void;
    };
    private static _createdNamespaces;
    private timestamps;
    /**
     *
     * @param options {IOptions} options
     */
    constructor(options: IOptions);
    private _invoke;
    /**
     * post a log
     *
     * @param messages data to log
     */
    log(...messages: any[]): void;
    /**
     * post an error
     *
     * @param messages errors
     */
    error(...messages: any[]): void;
    /**
     * post a warning
     *
     * @param messages warn
     */
    warn(...messages: any[]): void;
    /**
     * start timestamp
     *
     * @param label the name of the time coutner
     */
    time(label: string): void;
    /**
     * stop timestamp
     *
     * @param label the name of the time coutner
     * @param logType type of the log
     */
    timeEnd(label: string, logType?: LogType): void;
    /**
     * use a reciver for the instance
     *
     * @param reciver reciver to use
     */
    use(reciver: LogReciver): void;
    private _pretty;
}
export = DebugIO;
