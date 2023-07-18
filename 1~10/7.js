// * JavaScript에서 null과 undefined의 차이점을 설명하세요.

// * null은 변수에 값이 '없음'을 나타낸다.
// * 변수가 존재하지만, 아무런 값이나 객체 참조가 할당되지 않았음을 나타낸다.
// * 명시적으로 변수에 값이 없다고 설정하거나 변수를 초기화할 때 'null'을 사용할 수 있다.
// ? 비유하자면, 물건을 보관한 창고 자체는 존재하지만 창고 안에는 아무것도 없는 상태가 null이다.

const nullConstant = null;
console.log(nullConstant);

// * undefined는 변수가 선언되었지만, 값이 할당되지 않았음을 나타낸다.
// * 변수를 선언했지만 값을 주지 않은 경우 자동으로 undefined로 초기화된다.
// * 함수에 값을 반환하지 않으면 해당 함수의 결과는 undefined가 된다.
// * 보통의 경우 변수에 undefined를 명시하지는 않는다.
// * 자바스크립트 엔진이 자동으로 처리한다.
// ? 비유하자면, 창고 자체가 아예 만들어지지 않은 상태가 undefined다.

let undefinedVariable;
console.log(undefinedVariable);
