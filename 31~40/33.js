// * try / catch 문을 사용하여 예외를 처리하는 코드를 작성해보세요.

function tryCatcher() {
  try {
    throw new Error("에러 발생");
  } catch (e) {
    console.log(e);
  }
}

tryCatcher();
