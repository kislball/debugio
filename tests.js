const DebugIO = require("./dist/index");

// basic logging test
let test = new DebugIO({
  namespace: "main"
});
test.use(DebugIO.recivers.Console);

test.log("hello world"); // output: [main][log] hello world

// inheritance test
let test2 = new DebugIO({
  namespace: "test2",
  parent: test,
});
test2.use(DebugIO.recivers.Console);

test2.log("lol"); // should output [main][test2][log] lol

// parent invoking test
let test3 = new DebugIO({
  namespace: "test3",
  parent: test2,
  invokeParentRecivers: true
});

test3.log("parent invoking stuff"); // should log [main][test2][test3][log] parent invoking stuff twice

// custom context testing
let test4 = new DebugIO({
  namespace: "test4",
  customContext: {
    test: "it works"
  }
});
let def = DebugIO.placeholders.main;
DebugIO.placeholders.main = "[{{test}}] {{pretty}}";
test4.use(DebugIO.recivers.Console);
test4.log("test"); // [it works] test
DebugIO.placeholders.main = def;