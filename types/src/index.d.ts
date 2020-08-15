/// <reference types="node" />
import { EventEmitter } from 'events';
import { IDebugIOEvents } from './types/IDebugIOEvents';
import { IOptions } from './types/IOptions';
import LogReciver from './types/LogReciver';
import { IPlaceholders } from './types/IPlaceholders';
import TemplateEngine from './types/TemplateEngine';
import LogType from './types/LogType';
declare interface DebugIO {
    on<U extends keyof IDebugIOEvents>(event: U, listener: IDebugIOEvents[U]): this;
    emit<U extends keyof IDebugIOEvents>(event: U, ...args: Parameters<IDebugIOEvents[U]>): boolean;
}
declare class DebugIO extends EventEmitter {
    /**
     * options
     */
    readonly options: IOptions;
    /**
     * namespace
     */
    namespace: string;
    /**
     * children of the instance
     */
    children: DebugIO[];
    /**
     * parents of the instance
     */
    parents: DebugIO[];
    /**
     * recivers of the instance
     */
    recivers: LogReciver[];
    /**
     * prefix variable in main placeholder
     */
    static prefix: string;
    /**
     * placeholders of the instance
     */
    static placeholders: IPlaceholders;
    /**
     * separator which messages are joined with
     */
    static separator: string;
    /**
     * render functions
     */
    static render: TemplateEngine;
    /**
     * standart recievers
     */
    static recivers: {
        Console: (logType: LogType, message: any, messages: any[], pretty: string) => void;
    };
    private static _createdNamespaces;
    /**
     *
     * @param options - options
     */
    constructor(options: IOptions);
    /**
     * log data
     *
     * @param messages data to log
     */
    log(...messages: any[]): void;
    /**
     * output error
     *
     * @param messages errors
     */
    error(...messages: any[]): void;
    /**
     * output a warning
     *
     * @param messages warn
     */
    warn(...messages: any[]): void;
    /**
     * use a reciver for the instance
     *
     * @param reciver reciver to use
     */
    use(reciver: LogReciver): void;
    private _pretty;
}
export = DebugIO;
