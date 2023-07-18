// * 자바스크립트에서 대소문자를 구분하는 예를 들어 보세요.

// * 자바스크립트는 대소문자를 엄격하게 구분한다.
// * 이는 변수, 함수, 객체 등의 이름을 정할 때 영향을 끼친다.

// * 아래 코드는 세 개의 다른 변수를 생성한다.

let myVar = 10;
let MyVar = 20;
let MYVAR = 30;

console.log(myVar); // 10
console.log(MyVar); // 20
console.log(MYVAR); // 30

// * 함수나 메서드의 이름, 객체의 속성명도 대소문자를 구분한다.

const myObj = {
  name: "박준형",
  Name: "준형박",
};

console.log(myObj.name); // '박준형'
console.log(myObj.Name); // '준형박'
