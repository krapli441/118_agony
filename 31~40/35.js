// * break문을 사용하여 반복문을 중단하는 코드를 작성해보세요.

function breaker() {
  let i = 0;
  while (true) {
    i++;
    if (i === 100) break;
  }
  return i;
}

console.log(breaker());
