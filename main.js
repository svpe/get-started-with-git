function doSomething() {
  console.log("I'm doing something");
  doSomethingElse();
}

function doSomethingElse() {
  console.log("ok");
  console.log("i did something");

}
doSomething();