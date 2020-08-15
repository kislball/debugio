import DebugIO from '../src/index'
// inheritance test. output should be: [test][test2][log] inheritance test
const test = new DebugIO({
  namespace: "test"
});

const test2 = new DebugIO({
  namespace: "test2",
  parent: test
});
test2.use(DebugIO.recivers.Console);

test2.log("inheritance test");

// deep inheritance test. output should be: [test][test2][test3][log] deep inheritance test
const test3 = new DebugIO({
  namespace: "test3",
  parent: test2
});;
test3.use(DebugIO.recivers.Console);

test3.log("deep inheritance test");

// same namespace test. should produce an error
new DebugIO({
  namespace: "test3"
});;