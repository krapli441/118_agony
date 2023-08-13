// * '=='와 '==='의 차이점을 설명하고 각각의 사용 예제를 들어보세요.

// * ==는 값만 비교하고 ===는 값과 타입까지 비교한다.

function isEqual(a, b) {
  return a == b;
}

console.log(isEqual(1, "1")); // 참

function isEqualTwo(a, b) {
  return a === b;
}

console.log(isEqualTwo(1, "1")); // 거짓
