import DebugIO from '../index'
import LogReciver = require("./LogReciver");

export interface IOptions {
  parent?: DebugIO,
  namespace: string,
  recivers?: LogReciver[]
}