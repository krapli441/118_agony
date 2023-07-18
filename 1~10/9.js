// * const, let, var의 차이점을 설명하세요.

const constant = "constant";
// const는 상수(constant)를 선언하는데 사용된다.
// 선언한 변수에 할당된 값을 변경할 순 없다.

// constant = "cannot change" //! syntax error

// const는 블록 스코프(block scope)를 가진다.
// 즉, 블록 안에서 선언된 변수는 해당 블록 안에서만 접근할 수 있다.

// ------------------------------------------------------

let variable = "variable";
// let은 블록 스코프를 가지는 변수를 선언하는데 사용된다.
// 변수의 값을 재할당 할 수 있다.
variable = "can change";

// ------------------------------------------------------

var oldVariable = "variable";
// var는 ES5 이전에 사용되던 변수 선언 키워드였다.
// 하지만 ES6부터 'const'와 'let'이 등장하면서 대체되었다.
// var는 let과 다르게 함수 스코프(function-scope)를 가진다.
// 즉 함수 내에서 선언된 변수는 함수 내에서만 유효하다.
// 또한, var로 선언한 변수는 호이스팅(hoisting)에 영향을 받는다.
// 호이스팅이란, 변수 선언을 해당 스코프의 최상단으로 끌어올리는 특성을 말한다.
oldVariable = "can change";
