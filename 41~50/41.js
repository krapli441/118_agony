//* 객체의 모든 속성을 순회하며 출력하는 함수를 작성해보세요.

const obj = {
  name: "박준형",
  age: 29,
  sex: "male",
  height: 174,
};

function printAll(obj) {
  for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}

console.log(printAll(obj));
