// * x가 y와 같은지, 그리고 z가 0이 아닌지 확인하는 복합 조건식을 작성해보세요.

function checker(x, y, z) {
  if (x === y && z !== 0) {
    console.log(`x is equal to y and z is not 0`);
  } else {
    console.log(`x is not equal to y or z is 0`);
  }
}