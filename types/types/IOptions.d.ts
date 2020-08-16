import DebugIO from '../index';
import LogReciver = require("./LogReciver");
export interface IOptions {
    /**
     * set parent instance
     */
    parent?: DebugIO;
    /**
     * namespace
     */
    namespace: string;
    /**
     * recivers to pass
     */
    recivers?: LogReciver[];
    /**
     * invoke parent recivers
     */
    invokeParentRecivers?: boolean;
}
