# DebugIO
![](https://img.shields.io/github/issues/kislball/debugio)
![](https://img.shields.io/github/forks/kislball/debugio)
![](https://img.shields.io/github/stars/kislball/debugio)  
[![NPM](https://nodei.co/npm/debugio.png)](https://nodei.co/npm/debugio/)
> Enjoy simplicity and flexibility

DebugIO is super simple. It is built on principle of recivers, who do all the stuff about sending logs somewhere.  
DebugIO is super lightweight. It is just 256 lines of code.
## Getting started
### Simple logging
Let's start with a simple console logging:
```js
const DebugIO = require("debugio");
const logger = new DebugIO({
  namespace: "example" // namespace of the logger, it has to be unique
});
logger.use(DebugIO.recivers.Console); // let's use default console logger
logger.log("hello world!"); // yay! it logs [example][log] hello world! 
logger.error("some error"); // oh... there is an error
logger.warn("wash your hands"); // and stay home as well
```
### Recivers
Recivers are special functions, which handle logs. They accept following parameters:
* logType: 'warn' | 'log' | 'error' - type of log
* message: any - concatenated message
* messages: any[] - splitted message
* pretty: string - prettified message with `main` placeholder(check [placeholders](#placeholders))  

Here is an example of default `Console` reciver(ts syntax omitted):
```js
const Console = (logType, message, messages, pretty) => {
  console[logType](pretty);
};
```
We can bind them to `DebugIO` instance using `DebugIO.use()`(like in [the beginning](#simple-logging)) or passing them as `recivers` array in options
### Inheritance
Second awesome part is instance inheritance. For example:
```js
const test = new DebugIO({
  namespace: "test"
});

const test2 = new DebugIO({
  namespace: "test2",
  parent: test
});
test2.use(DebugIO.recivers.Console);

test2.log("inheritance test"); // [test][test2][log] inheritance test
```
As you see, we can add "sub-namespace" to existing namespace.
Also, if a logger has a parent, we may not pass namespace, it will be omitted
### Benchmarking
DebugIO has built-in method for benchmarking anything.
```js
const test = new DebugIO({
  namespace: "test"
});
test.use(DebugIO.recivers.Console);
test.time("my super bench"); // create a label, which starts counting time since function execution
setTimeout(() => {
  test.timeEnd("my super bench"); // stop the label and output result with time placeholder
}, 1000);
```
## Flexing the DebugIO
All possible options can be set up as static properties in `DebugIO` class.
### Placeholders
In case you don't like standart way of prettifying strings, you can provide custom placeholders in `DebugIO.placeholders` field.  
All place holders support the power of Handlebars
* `DebugIO.placeholders.namespace` - default value is `[{{namespace}}]. ` Used in prettifying namespaces. Available variables: `namespace`
* `DebugIO.placeholders.logType` - default value is `[{{rawLogType}}]. ` Used in prettifying log names. Available variables: `rawLogType`. Created for customizing log types
* `DebugIO.placeholders.main` - default value is `{{ prefix }}{{ namespaces }}{{ logType }} {{ pretty }}`. Builds everything into one piece.  
  Variables:
  * prefix - prefix you provided in DebugIO.prefix
  * namespaces - namespaces chain built from `namespace` placeholder
  * logType - logType from `logType` placeholder
  * pretty - messages put into function joined by `DebugIO.separator`
* `DebugIO.placeholders.time` - default value is  `{{label}}: {{time}}ms`.
Used in `time` and `timeEnd` functions(see [benchmarking](#benchmarking)). Variables: `time` and `label`.

### Providing custom template enigne
You can use your own template engine by providing `DebugIO.render` function. It'll accept those params: `str` - string to render; `ctx` - data to render. Default function:
```ts
import Handlebars from 'handlebars'
import TemplateEngine = require('./types/TemplateEngine');

const template: TemplateEngine = function (str: string, context: object): string {
  return Handlebars.compile(str)(context);
}

export = template;
```
### Other options
* `DebugIO.separator` - string, which messages are joined
* `DebugIO.prefix` - `prefix` variable in `main` placeholder

## API
Read about API here: https://kislball.github.io/debugio/

## License
MIT