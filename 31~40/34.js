// * continue문을 사용하여 짝수만 출력하는 코드를 작성해보세요.
// 자바스크립트의 반복문 (for , while , do-while)에서 사용되며
// 현재 반복을 건너뛰고 다음 반복을 바로 시작하게 만든다.

function continuer() {
  for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
      continue; // i가 홀수이면 아래 코드 실행을 건너뛰고 다음 반복으로 이동
    }
    console.log(i); // 짝수만 출력
  }
}

continuer();
