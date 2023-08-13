// * 자바스크립트에서 ==와 ===의 차이점을 설명해보세요.

// ! == : 값만 비교
// ! === : 값과 타입까지 비교

function isEqual(a, b) {
  return a == b;
}

console.log(isEqual(1, "1")); // 참

function isEqualTwo(a, b) {
  return a === b;
}

console.log(isEqualTwo(1, "1")); // 거짓
