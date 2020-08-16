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
* [_createdNamespaces](_index_.debugio.md#static-private-_creatednamespaces)
* [prefix](_index_.debugio.md#static-prefix)
* [render](_index_.debugio.md#static-render)
* [separator](_index_.debugio.md#static-separator)

### Methods

* [_invoke](_index_.debugio.md#private-_invoke)
* [_pretty](_index_.debugio.md#private-_pretty)
* [error](_index_.debugio.md#error)
* [log](_index_.debugio.md#log)
* [use](_index_.debugio.md#use)
* [warn](_index_.debugio.md#warn)

### Object literals

* [placeholders](_index_.debugio.md#static-placeholders)
* [recivers](_index_.debugio.md#static-recivers)

## Constructors

###  constructor

\+ **new DebugIO**(`options`: [IOptions](../interfaces/_types_ioptions_.ioptions.md)): *[DebugIO](_index_.debugio.md)*

*Defined in [index.ts:67](https://github.com/kislball/debugio/blob/264cb0b/src/index.ts#L67)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | [IOptions](../interfaces/_types_ioptions_.ioptions.md) | options  |

**Returns:** *[DebugIO](_index_.debugio.md)*

## Properties

###  children

• **children**: *[DebugIO](_index_.debugio.md)[]* = []

*Defined in [index.ts:25](https://github.com/kislball/debugio/blob/264cb0b/src/index.ts#L25)*

children of the instance

___

###  namespace

• **namespace**: *string*

*Defined in [index.ts:20](https://github.com/kislball/debugio/blob/264cb0b/src/index.ts#L20)*

namespace

___

### `Readonly` options

• **options**: *[IOptions](../interfaces/_types_ioptions_.ioptions.md)*

*Defined in [index.ts:16](https://github.com/kislball/debugio/blob/264cb0b/src/index.ts#L16)*

options

___

###  parents

• **parents**: *[DebugIO](_index_.debugio.md)[]* = []

*Defined in [index.ts:30](https://github.com/kislball/debugio/blob/264cb0b/src/index.ts#L30)*

parents of the instance

___

###  recivers

• **recivers**: *[LogReciver](../modules/_types_logreciver_.md#export-assignment-logreciver)[]* = []

*Defined in [index.ts:35](https://github.com/kislball/debugio/blob/264cb0b/src/index.ts#L35)*

recivers of the instance

___

### `Static` `Private` _createdNamespaces

▪ **_createdNamespaces**: *string[]* = []

*Defined in [index.ts:67](https://github.com/kislball/debugio/blob/264cb0b/src/index.ts#L67)*

___

### `Static` prefix

▪ **prefix**: *string* = ""

*Defined in [index.ts:40](https://github.com/kislball/debugio/blob/264cb0b/src/index.ts#L40)*

prefix variable in main placeholder

___

### `Static` render

▪ **render**: *[TemplateEngine](../modules/_types_templateengine_.md#export-assignment-templateengine)* = template

*Defined in [index.ts:58](https://github.com/kislball/debugio/blob/264cb0b/src/index.ts#L58)*

render functions

___

### `Static` separator

▪ **separator**: *string* = ", "

*Defined in [index.ts:53](https://github.com/kislball/debugio/blob/264cb0b/src/index.ts#L53)*

separator which messages are joined with

## Methods

### `Private` _invoke

▸ **_invoke**(`logType`: [LogType](../modules/_types_logtype_.md#export-assignment-logtype), ...`messages`: any[]): *void*

*Defined in [index.ts:105](https://github.com/kislball/debugio/blob/264cb0b/src/index.ts#L105)*

**Parameters:**

Name | Type |
------ | ------ |
`logType` | [LogType](../modules/_types_logtype_.md#export-assignment-logtype) |
`...messages` | any[] |

**Returns:** *void*

___

### `Private` _pretty

▸ **_pretty**(`logType`: [LogType](../modules/_types_logtype_.md#export-assignment-logtype), ...`messages`: any[]): *string*

*Defined in [index.ts:147](https://github.com/kislball/debugio/blob/264cb0b/src/index.ts#L147)*

**Parameters:**

Name | Type |
------ | ------ |
`logType` | [LogType](../modules/_types_logtype_.md#export-assignment-logtype) |
`...messages` | any[] |

**Returns:** *string*

___

###  error

▸ **error**(...`messages`: any[]): *void*

*Defined in [index.ts:125](https://github.com/kislball/debugio/blob/264cb0b/src/index.ts#L125)*

post an error

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...messages` | any[] | errors  |

**Returns:** *void*

___

###  log

▸ **log**(...`messages`: any[]): *void*

*Defined in [index.ts:116](https://github.com/kislball/debugio/blob/264cb0b/src/index.ts#L116)*

post a log

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...messages` | any[] | data to log  |

**Returns:** *void*

___

###  use

▸ **use**(`reciver`: [LogReciver](../modules/_types_logreciver_.md#export-assignment-logreciver)): *void*

*Defined in [index.ts:143](https://github.com/kislball/debugio/blob/264cb0b/src/index.ts#L143)*

use a reciver for the instance

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`reciver` | [LogReciver](../modules/_types_logreciver_.md#export-assignment-logreciver) | reciver to use  |

**Returns:** *void*

___

###  warn

▸ **warn**(...`messages`: any[]): *void*

*Defined in [index.ts:134](https://github.com/kislball/debugio/blob/264cb0b/src/index.ts#L134)*

post a warning

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...messages` | any[] | warn  |

**Returns:** *void*

## Object literals

### `Static` placeholders

### ▪ **placeholders**: *object*

*Defined in [index.ts:45](https://github.com/kislball/debugio/blob/264cb0b/src/index.ts#L45)*

placeholders of the instance

###  logType

• **logType**: *string* = "[{{ rawLogType }}]"

*Defined in [index.ts:47](https://github.com/kislball/debugio/blob/264cb0b/src/index.ts#L47)*

###  main

• **main**: *string* = "{{ prefix }}{{ namespaces }}{{ logType }} {{ pretty }}"

*Defined in [index.ts:46](https://github.com/kislball/debugio/blob/264cb0b/src/index.ts#L46)*

###  namespace

• **namespace**: *string* = "[{{ namespace }}]"

*Defined in [index.ts:48](https://github.com/kislball/debugio/blob/264cb0b/src/index.ts#L48)*

___

### `Static` recivers

### ▪ **recivers**: *object*

*Defined in [index.ts:63](https://github.com/kislball/debugio/blob/264cb0b/src/index.ts#L63)*

standart recievers

###  Console

• **Console**: *(Anonymous function)*

*Defined in [index.ts:64](https://github.com/kislball/debugio/blob/264cb0b/src/index.ts#L64)*
