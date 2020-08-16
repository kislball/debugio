export interface IDebugIOEvents {
    'log': (log: any, raw: any[]) => void;
    'errorLog': (error: any, raw: any[]) => void;
    'warnLog': (warn: any, raw: any[]) => void;
}
