// * continue문을 사용하여 짝수만 출력하는 코드를 작성해보세요.

function continuer() {
  for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) continue;
    console.log(i);
  }
}

continuer();
