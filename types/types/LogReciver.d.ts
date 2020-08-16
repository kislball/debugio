import LogType from './LogType';
declare type LogReciver = (logType: LogType, message: any, messages: any[], pretty: string) => void;
export = LogReciver;
