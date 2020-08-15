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
    readonly options: IOptions;
    namespace: string;
    children: DebugIO[];
    parents: DebugIO[];
    recivers: LogReciver[];
    static prefix: string;
    static placeholders: IPlaceholders;
    static separator: string;
    static render: TemplateEngine;
    static recivers: {
        Console: (logType: LogType, message: any, messages: any[], pretty: string) => void;
    };
    private static _createdNamespaces;
    constructor(options: IOptions);
    log(...messages: any[]): void;
    error(...messages: any[]): void;
    warn(...messages: any[]): void;
    use(reciver: LogReciver): void;
    private _pretty;
    addChild(child: DebugIO): void;
}
export = DebugIO;
