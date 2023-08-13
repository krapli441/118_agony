// * switch 문을 사용하여 변수가 어떤 값인지 분기하는 코드를 작성해보세요.

function checker(input) {
  switch (typeof input) {
    case "number":
      console.log("input is number");
      break;
    case "string":
      console.log("input is string");
      break;
    default:
      console.log("input is of an unknown type");
  }
}

checker("문자열");
