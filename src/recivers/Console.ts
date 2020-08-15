import LogType from '../types/LogType'

export = (logType: LogType, message: any, messages: any[], pretty: string) => {
  console[logType](pretty);
};