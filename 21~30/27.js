// * 두 변수 x, y의 값을 서로 교환하는 코드를 작성해보세요.

function change(x, y) {
  let temp = x;
  x = y;
  y = temp;
  console.log(`x: ${x}, y: ${y}`);
}

change(10, 5);
