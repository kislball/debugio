[debugio](../README.md) › [Globals](../globals.md) › ["index"](../modules/_index_.md) › [DebugIO](_index_.debugio.md)

# Class: DebugIO

## Hierarchy

* **DebugIO**

## Index

### Constructors

* [constructor](_index_.debugio.md#constructor)

### Properties

* [children](_index_.debugio.md#children)
* [namespace](_index_.debugio.md#namespace)
* [options](_index_.debugio.md#readonly-options)
* [parents](_index_.debugio.md#parents)
* [recivers](_index_.debugio.md#recivers)
* [timestamps](_index_.debugio.md#private-timestamps)
* [_createdNamespaces](_index_.debugio.md#static-private-_creatednamespaces)
* [prefix](_index_.debugio.md#static-prefix)
* [render](_index_.debugio.md#static-render)
* [separator](_index_.debugio.md#static-separator)

### Methods

* [_invoke](_index_.debugio.md#private-_invoke)
* [_pretty](_index_.debugio.md#private-_pretty)
* [error](_index_.debugio.md#error)
* [log](_index_.debugio.md#log)
* [time](_index_.debugio.md#time)
* [timeEnd](_index_.debugio.md#timeend)
* [use](_index_.debugio.md#use)
* [warn](_index_.debugio.md#warn)

### Object literals

* [placeholders](_index_.debugio.md#static-placeholders)
* [recivers](_index_.debugio.md#static-recivers)

## Constructors

###  constructor

\+ **new DebugIO**(`options`: [IOptions](../interfaces/_types_ioptions_.ioptions.md)): *[DebugIO](_index_.debugio.md)*

*Defined in [index.ts:69](https://github.com/kislball/debugio/blob/9a1c73e/src/index.ts#L69)*

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`options` | [IOptions](../interfaces/_types_ioptions_.ioptions.md) | {} | options  |

**Returns:** *[DebugIO](_index_.debugio.md)*

## Properties

###  children

• **children**: *[DebugIO](_index_.debugio.md)[]* = []

*Defined in [index.ts:25](https://github.com/kislball/debugio/blob/9a1c73e/src/index.ts#L25)*

children of the instance

___

###  namespace

• **namespace**: *string*

*Defined in [index.ts:20](https://github.com/kislball/debugio/blob/9a1c73e/src/index.ts#L20)*

namespace

___

### `Readonly` options

• **options**: *[IOptions](../interfaces/_types_ioptions_.ioptions.md)*

*Defined in [index.ts:16](https://github.com/kislball/debugio/blob/9a1c73e/src/index.ts#L16)*

options

___

###  parents

• **parents**: *[DebugIO](_index_.debugio.md)[]* = []

*Defined in [index.ts:30](https://github.com/kislball/debugio/blob/9a1c73e/src/index.ts#L30)*

parents of the instance

___

###  recivers

• **recivers**: *[LogReciver](../modules/_types_logreciver_.md#export-assignment-logreciver)[]* = []

*Defined in [index.ts:35](https://github.com/kislball/debugio/blob/9a1c73e/src/index.ts#L35)*

recivers of the instance

___

### `Private` timestamps

• **timestamps**: *Map‹string, Date›* = new Map()

*Defined in [index.ts:69](https://github.com/kislball/debugio/blob/9a1c73e/src/index.ts#L69)*

___

### `Static` `Private` _createdNamespaces

▪ **_createdNamespaces**: *string[]* = []

*Defined in [index.ts:68](https://github.com/kislball/debugio/blob/9a1c73e/src/index.ts#L68)*

___

### `Static` prefix

▪ **prefix**: *string* = ""

*Defined in [index.ts:40](https://github.com/kislball/debugio/blob/9a1c73e/src/index.ts#L40)*

prefix variable in main placeholder

___

### `Static` render

▪ **render**: *[TemplateEngine](../modules/_types_templateengine_.md#export-assignment-templateengine)* = template

*Defined in [index.ts:59](https://github.com/kislball/debugio/blob/9a1c73e/src/index.ts#L59)*

render functions

___

### `Static` separator

▪ **separator**: *string* = ", "

*Defined in [index.ts:54](https://github.com/kislball/debugio/blob/9a1c73e/src/index.ts#L54)*

separator which messages are joined with

## Methods

### `Private` _invoke

▸ **_invoke**(`logType`: [LogType](../modules/_types_logtype_.md#export-assignment-logtype), ...`messages`: any[]): *void*

*Defined in [index.ts:107](https://github.com/kislball/debugio/blob/9a1c73e/src/index.ts#L107)*

**Parameters:**

Name | Type |
------ | ------ |
`logType` | [LogType](../modules/_types_logtype_.md#export-assignment-logtype) |
`...messages` | any[] |

**Returns:** *void*

___

### `Private` _pretty

▸ **_pretty**(`logType`: [LogType](../modules/_types_logtype_.md#export-assignment-logtype), ...`messages`: any[]): *string*

*Defined in [index.ts:173](https://github.com/kislball/debugio/blob/9a1c73e/src/index.ts#L173)*

**Parameters:**

Name | Type |
------ | ------ |
`logType` | [LogType](../modules/_types_logtype_.md#export-assignment-logtype) |
`...messages` | any[] |

**Returns:** *string*

___

###  error

▸ **error**(...`messages`: any[]): *void*

*Defined in [index.ts:127](https://github.com/kislball/debugio/blob/9a1c73e/src/index.ts#L127)*

post an error

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...messages` | any[] | errors  |

**Returns:** *void*

___

###  log

▸ **log**(...`messages`: any[]): *void*

*Defined in [index.ts:118](https://github.com/kislball/debugio/blob/9a1c73e/src/index.ts#L118)*

post a log

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...messages` | any[] | data to log  |

**Returns:** *void*

___

###  time

▸ **time**(`label`: string): *void*

*Defined in [index.ts:145](https://github.com/kislball/debugio/blob/9a1c73e/src/index.ts#L145)*

start timestamp

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`label` | string | the name of the time coutner  |

**Returns:** *void*

___

###  timeEnd

▸ **timeEnd**(`label`: string, `logType`: [LogType](../modules/_types_logtype_.md#export-assignment-logtype)): *void*

*Defined in [index.ts:155](https://github.com/kislball/debugio/blob/9a1c73e/src/index.ts#L155)*

stop timestamp

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`label` | string | - | the name of the time coutner |
`logType` | [LogType](../modules/_types_logtype_.md#export-assignment-logtype) | "log" | type of the log  |

**Returns:** *void*

___

###  use

▸ **use**(`reciver`: [LogReciver](../modules/_types_logreciver_.md#export-assignment-logreciver)): *void*

*Defined in [index.ts:169](https://github.com/kislball/debugio/blob/9a1c73e/src/index.ts#L169)*

use a reciver for the instance

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`reciver` | [LogReciver](../modules/_types_logreciver_.md#export-assignment-logreciver) | reciver to use  |

**Returns:** *void*

___

###  warn

▸ **warn**(...`messages`: any[]): *void*

*Defined in [index.ts:136](https://github.com/kislball/debugio/blob/9a1c73e/src/index.ts#L136)*

post a warning

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...messages` | any[] | warn  |

**Returns:** *void*

## Object literals

### `Static` placeholders

### ▪ **placeholders**: *object*

*Defined in [index.ts:45](https://github.com/kislball/debugio/blob/9a1c73e/src/index.ts#L45)*

placeholders of the instance

###  logType

• **logType**: *string* = "[{{ rawLogType }}]"

*Defined in [index.ts:47](https://github.com/kislball/debugio/blob/9a1c73e/src/index.ts#L47)*

###  main

• **main**: *string* = "{{ prefix }}{{ namespaces }}{{ logType }} {{ pretty }}"

*Defined in [index.ts:46](https://github.com/kislball/debugio/blob/9a1c73e/src/index.ts#L46)*

###  namespace

• **namespace**: *string* = "[{{ namespace }}]"

*Defined in [index.ts:48](https://github.com/kislball/debugio/blob/9a1c73e/src/index.ts#L48)*

###  time

• **time**: *string* = "{{label}}: {{time}}ms"

*Defined in [index.ts:49](https://github.com/kislball/debugio/blob/9a1c73e/src/index.ts#L49)*

___

### `Static` recivers

### ▪ **recivers**: *object*

*Defined in [index.ts:64](https://github.com/kislball/debugio/blob/9a1c73e/src/index.ts#L64)*

standart recievers

###  Console

• **Console**: *(Anonymous function)*

*Defined in [index.ts:65](https://github.com/kislball/debugio/blob/9a1c73e/src/index.ts#L65)*
