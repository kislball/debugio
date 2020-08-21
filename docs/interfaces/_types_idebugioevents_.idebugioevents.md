[debugio](../README.md) › [Globals](../globals.md) › ["types/IDebugIOEvents"](../modules/_types_idebugioevents_.md) › [IDebugIOEvents](_types_idebugioevents_.idebugioevents.md)

# Interface: IDebugIOEvents

## Hierarchy

* **IDebugIOEvents**

## Index

### Properties

* [errorLog](_types_idebugioevents_.idebugioevents.md#errorlog)
* [log](_types_idebugioevents_.idebugioevents.md#log)
* [warnLog](_types_idebugioevents_.idebugioevents.md#warnlog)

## Properties

###  errorLog

• **errorLog**: *function*

*Defined in [types/IDebugIOEvents.ts:3](https://github.com/kislball/debugio/blob/9a1c73e/src/types/IDebugIOEvents.ts#L3)*

#### Type declaration:

▸ (`error`: any, `raw`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`error` | any |
`raw` | any[] |

___

###  log

• **log**: *function*

*Defined in [types/IDebugIOEvents.ts:2](https://github.com/kislball/debugio/blob/9a1c73e/src/types/IDebugIOEvents.ts#L2)*

#### Type declaration:

▸ (`log`: any, `raw`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`log` | any |
`raw` | any[] |

___

###  warnLog

• **warnLog**: *function*

*Defined in [types/IDebugIOEvents.ts:4](https://github.com/kislball/debugio/blob/9a1c73e/src/types/IDebugIOEvents.ts#L4)*

#### Type declaration:

▸ (`warn`: any, `raw`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`warn` | any |
`raw` | any[] |
