// * 함수의 기본값을 설정하는 코드를 작성해보세요.

function defaultValueFunction(x, y = 1) {
  return x + y;
}

console.log(defaultValueFunction(5)); // 6
