// * 콜백 함수를 사용하는 코드를 작성해보세요.

function callbackAdd(a, b, callback) {
  let result = a + b;
  callback(result);
}

console.log(callbackAdd(3, 4, (result) => console.log(result))); // 7
