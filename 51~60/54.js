// * 콜백 함수를 사용하는 코드를 작성해보세요.

function callbackexample(callback) {
  callback(console.log("콜백함수 호출"));
}

console.log(callbackexample(() => console.log("콜백함수 호출"))); // 콜백함수 호출
