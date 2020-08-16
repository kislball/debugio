[debugio](../README.md) › [Globals](../globals.md) › ["index"](../modules/_index_.md) › [DebugIO](_index_.debugio.md)

# Class: DebugIO

## Hierarchy

* EventEmitter

  ↳ **DebugIO**

## Index

### Constructors

* [constructor](_index_.debugio.md#constructor)

### Properties

* [children](_index_.debugio.md#children)
* [namespace](_index_.debugio.md#namespace)
* [options](_index_.debugio.md#readonly-options)
* [parents](_index_.debugio.md#parents)
* [recivers](_index_.debugio.md#recivers)
* [_createdNamespaces](_index_.debugio.md#static-private-_creatednamespaces)
* [defaultMaxListeners](_index_.debugio.md#static-defaultmaxlisteners)
* [errorMonitor](_index_.debugio.md#static-readonly-errormonitor)
* [prefix](_index_.debugio.md#static-prefix)
* [render](_index_.debugio.md#static-render)
* [separator](_index_.debugio.md#static-separator)

### Methods

* [_pretty](_index_.debugio.md#private-_pretty)
* [addListener](_index_.debugio.md#addlistener)
* [emit](_index_.debugio.md#emit)
* [error](_index_.debugio.md#error)
* [eventNames](_index_.debugio.md#eventnames)
* [getMaxListeners](_index_.debugio.md#getmaxlisteners)
* [listenerCount](_index_.debugio.md#listenercount)
* [listeners](_index_.debugio.md#listeners)
* [log](_index_.debugio.md#log)
* [off](_index_.debugio.md#off)
* [on](_index_.debugio.md#on)
* [once](_index_.debugio.md#once)
* [prependListener](_index_.debugio.md#prependlistener)
* [prependOnceListener](_index_.debugio.md#prependoncelistener)
* [rawListeners](_index_.debugio.md#rawlisteners)
* [removeAllListeners](_index_.debugio.md#removealllisteners)
* [removeListener](_index_.debugio.md#removelistener)
* [setMaxListeners](_index_.debugio.md#setmaxlisteners)
* [use](_index_.debugio.md#use)
* [warn](_index_.debugio.md#warn)
* [listenerCount](_index_.debugio.md#static-listenercount)

### Object literals

* [placeholders](_index_.debugio.md#static-placeholders)
* [recivers](_index_.debugio.md#static-recivers)

## Constructors

###  constructor

\+ **new DebugIO**(`options`: [IOptions](../interfaces/_types_ioptions_.ioptions.md)): *[DebugIO](_index_.debugio.md)*

*Overrides void*

*Defined in [src/index.ts:79](https://github.com/kislball/debugio/blob/e6c0d0f/src/index.ts#L79)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | [IOptions](../interfaces/_types_ioptions_.ioptions.md) | options  |

**Returns:** *[DebugIO](_index_.debugio.md)*

## Properties

###  children

• **children**: *[DebugIO](_index_.debugio.md)[]* = []

*Defined in [src/index.ts:37](https://github.com/kislball/debugio/blob/e6c0d0f/src/index.ts#L37)*

children of the instance

___

###  namespace

• **namespace**: *string*

*Defined in [src/index.ts:32](https://github.com/kislball/debugio/blob/e6c0d0f/src/index.ts#L32)*

namespace

___

### `Readonly` options

• **options**: *[IOptions](../interfaces/_types_ioptions_.ioptions.md)*

*Defined in [src/index.ts:28](https://github.com/kislball/debugio/blob/e6c0d0f/src/index.ts#L28)*

options

___

###  parents

• **parents**: *[DebugIO](_index_.debugio.md)[]* = []

*Defined in [src/index.ts:42](https://github.com/kislball/debugio/blob/e6c0d0f/src/index.ts#L42)*

parents of the instance

___

###  recivers

• **recivers**: *[LogReciver](../modules/_types_logreciver_.md#export-assignment-logreciver)[]* = []

*Defined in [src/index.ts:47](https://github.com/kislball/debugio/blob/e6c0d0f/src/index.ts#L47)*

recivers of the instance

___

### `Static` `Private` _createdNamespaces

▪ **_createdNamespaces**: *string[]* = []

*Defined in [src/index.ts:79](https://github.com/kislball/debugio/blob/e6c0d0f/src/index.ts#L79)*

___

### `Static` defaultMaxListeners

▪ **defaultMaxListeners**: *number*

*Inherited from [DebugIO](_index_.debugio.md).[defaultMaxListeners](_index_.debugio.md#static-defaultmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:45

___

### `Static` `Readonly` errorMonitor

▪ **errorMonitor**: *keyof symbol*

*Inherited from [DebugIO](_index_.debugio.md).[errorMonitor](_index_.debugio.md#static-readonly-errormonitor)*

Defined in node_modules/@types/node/events.d.ts:55

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

___

### `Static` prefix

▪ **prefix**: *string* = ""

*Defined in [src/index.ts:52](https://github.com/kislball/debugio/blob/e6c0d0f/src/index.ts#L52)*

prefix variable in main placeholder

___

### `Static` render

▪ **render**: *[TemplateEngine](../modules/_types_templateengine_.md#export-assignment-templateengine)* = template

*Defined in [src/index.ts:70](https://github.com/kislball/debugio/blob/e6c0d0f/src/index.ts#L70)*

render functions

___

### `Static` separator

▪ **separator**: *string* = ", "

*Defined in [src/index.ts:65](https://github.com/kislball/debugio/blob/e6c0d0f/src/index.ts#L65)*

separator which messages are joined with

## Methods

### `Private` _pretty

▸ **_pretty**(`logType`: [LogType](../modules/_types_logtype_.md#export-assignment-logtype), ...`messages`: any[]): *string*

*Defined in [src/index.ts:163](https://github.com/kislball/debugio/blob/e6c0d0f/src/index.ts#L163)*

**Parameters:**

Name | Type |
------ | ------ |
`logType` | [LogType](../modules/_types_logtype_.md#export-assignment-logtype) |
`...messages` | any[] |

**Returns:** *string*

___

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [DebugIO](_index_.debugio.md).[addListener](_index_.debugio.md#addlistener)*

Defined in node_modules/@types/node/events.d.ts:62

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  emit

▸ **emit**‹**U**›(`event`: U, ...`args`: Parameters‹IDebugIOEvents[U]›): *boolean*

*Overrides void*

*Defined in [src/index.ts:18](https://github.com/kislball/debugio/blob/e6c0d0f/src/index.ts#L18)*

**Type parameters:**

▪ **U**: *keyof IDebugIOEvents*

**Parameters:**

Name | Type |
------ | ------ |
`event` | U |
`...args` | Parameters‹IDebugIOEvents[U]› |

**Returns:** *boolean*

___

###  error

▸ **error**(...`messages`: any[]): *void*

*Defined in [src/index.ts:135](https://github.com/kislball/debugio/blob/e6c0d0f/src/index.ts#L135)*

post an error

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...messages` | any[] | errors  |

**Returns:** *void*

___

###  eventNames

▸ **eventNames**(): *Array‹string | symbol›*

*Inherited from [DebugIO](_index_.debugio.md).[eventNames](_index_.debugio.md#eventnames)*

Defined in node_modules/@types/node/events.d.ts:77

**Returns:** *Array‹string | symbol›*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Inherited from [DebugIO](_index_.debugio.md).[getMaxListeners](_index_.debugio.md#getmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:69

**Returns:** *number*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Inherited from [DebugIO](_index_.debugio.md).[listenerCount](_index_.debugio.md#listenercount)*

Defined in node_modules/@types/node/events.d.ts:73

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Inherited from [DebugIO](_index_.debugio.md).[listeners](_index_.debugio.md#listeners)*

Defined in node_modules/@types/node/events.d.ts:70

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  log

▸ **log**(...`messages`: any[]): *void*

*Defined in [src/index.ts:123](https://github.com/kislball/debugio/blob/e6c0d0f/src/index.ts#L123)*

post a log

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...messages` | any[] | data to log  |

**Returns:** *void*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [DebugIO](_index_.debugio.md).[off](_index_.debugio.md#off)*

Defined in node_modules/@types/node/events.d.ts:66

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  on

▸ **on**‹**U**›(`event`: U, `listener`: IDebugIOEvents[U]): *this*

*Overrides void*

*Defined in [src/index.ts:14](https://github.com/kislball/debugio/blob/e6c0d0f/src/index.ts#L14)*

**Type parameters:**

▪ **U**: *keyof IDebugIOEvents*

**Parameters:**

Name | Type |
------ | ------ |
`event` | U |
`listener` | IDebugIOEvents[U] |

**Returns:** *this*

___

###  once

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [DebugIO](_index_.debugio.md).[once](_index_.debugio.md#once)*

Defined in node_modules/@types/node/events.d.ts:64

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [DebugIO](_index_.debugio.md).[prependListener](_index_.debugio.md#prependlistener)*

Defined in node_modules/@types/node/events.d.ts:75

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [DebugIO](_index_.debugio.md).[prependOnceListener](_index_.debugio.md#prependoncelistener)*

Defined in node_modules/@types/node/events.d.ts:76

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *Function[]*

*Inherited from [DebugIO](_index_.debugio.md).[rawListeners](_index_.debugio.md#rawlisteners)*

Defined in node_modules/@types/node/events.d.ts:71

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Inherited from [DebugIO](_index_.debugio.md).[removeAllListeners](_index_.debugio.md#removealllisteners)*

Defined in node_modules/@types/node/events.d.ts:67

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Inherited from [DebugIO](_index_.debugio.md).[removeListener](_index_.debugio.md#removelistener)*

Defined in node_modules/@types/node/events.d.ts:65

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Inherited from [DebugIO](_index_.debugio.md).[setMaxListeners](_index_.debugio.md#setmaxlisteners)*

Defined in node_modules/@types/node/events.d.ts:68

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  use

▸ **use**(`reciver`: [LogReciver](../modules/_types_logreciver_.md#export-assignment-logreciver)): *void*

*Defined in [src/index.ts:159](https://github.com/kislball/debugio/blob/e6c0d0f/src/index.ts#L159)*

use a reciver for the instance

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`reciver` | [LogReciver](../modules/_types_logreciver_.md#export-assignment-logreciver) | reciver to use  |

**Returns:** *void*

___

###  warn

▸ **warn**(...`messages`: any[]): *void*

*Defined in [src/index.ts:147](https://github.com/kislball/debugio/blob/e6c0d0f/src/index.ts#L147)*

post a warning

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...messages` | any[] | warn  |

**Returns:** *void*

___

### `Static` listenerCount

▸ **listenerCount**(`emitter`: EventEmitter, `event`: string | symbol): *number*

*Inherited from [DebugIO](_index_.debugio.md).[listenerCount](_index_.debugio.md#static-listenercount)*

Defined in node_modules/@types/node/events.d.ts:44

**`deprecated`** since v4.0.0

**Parameters:**

Name | Type |
------ | ------ |
`emitter` | EventEmitter |
`event` | string &#124; symbol |

**Returns:** *number*

## Object literals

### `Static` placeholders

### ▪ **placeholders**: *object*

*Defined in [src/index.ts:57](https://github.com/kislball/debugio/blob/e6c0d0f/src/index.ts#L57)*

placeholders of the instance

###  logType

• **logType**: *string* = "[{{ rawLogType }}]"

*Defined in [src/index.ts:59](https://github.com/kislball/debugio/blob/e6c0d0f/src/index.ts#L59)*

###  main

• **main**: *string* = "{{ prefix }}{{ namespaces }}{{ logType }} {{ pretty }}"

*Defined in [src/index.ts:58](https://github.com/kislball/debugio/blob/e6c0d0f/src/index.ts#L58)*

###  namespace

• **namespace**: *string* = "[{{ namespace }}]"

*Defined in [src/index.ts:60](https://github.com/kislball/debugio/blob/e6c0d0f/src/index.ts#L60)*

___

### `Static` recivers

### ▪ **recivers**: *object*

*Defined in [src/index.ts:75](https://github.com/kislball/debugio/blob/e6c0d0f/src/index.ts#L75)*

standart recievers

###  Console

• **Console**: *(Anonymous function)*

*Defined in [src/index.ts:76](https://github.com/kislball/debugio/blob/e6c0d0f/src/index.ts#L76)*
