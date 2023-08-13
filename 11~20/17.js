// * null과 undefined의 차이점은 무엇인가요?

let a = null;
let b = undefined;

console.log(a); // null
console.log(b); // undefined

// null은 '값이 없음'을 의미한다. 변수에 값이 없다는 것을 명시적으로 나타내고 싶을 때 사용한다.
// 예를 들면,  물건을 보관한 접시 자체는 존재하지만 접시 안에는 아무것도 없는 상태가 null이다.

// 반대로 undefined는 '값이 할당되지 않음'을 의미한다.
// 변수를 선언했지만 값을 주지 않은 경우 자동으로 undefined가 할당된다.
// 함수에 값을 반환하지 않은 경우에도 undefined가 반환된다.
// 비유하자면, 접시 자체가 아예 만들어지지 않은 상태가 undefined다.