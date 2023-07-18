// * if 문을 사용하여 어떤 변수가 짝수인지, 홀수인지 판별하는 코드를 작성하세요.

// ? 그럼 for문과 마찬가지로, 조건문도 함수 없이 실행할 수 있나?

function caculator(number) {
  const answer = number % 2;
  if (answer === 0) {
    console.log("짝수입니다.");
  } else {
    console.log("홀수입니다.");
  }
}

caculator(10);
caculator(5);
