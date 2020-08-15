import LogType from './LogType'

type LogReciver = (logType: LogType, message: any, messages: any[], pretty: string) => void;
export = LogReciver;