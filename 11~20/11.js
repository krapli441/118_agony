// * 자바스크립트에서 사용할 수 있는 특수 문자(escape character)를
// * 세 가지 예시와 함께 제시하세요.

// -----------------------------------------------------------------------------

// * 자바스크립트에서는 여러 가지 특수 문자들을 사용할 수 있다.
// * 이러한 특수 문자는 문자열, 정규표현식 등 다양한 상황에서 활용될 수 있다.

// * 1. 따옴표와 역따옴표
// * 따옴표는 문자열을 정의하는데 사용되며, 작은 따옴표('')와 큰 따옴표("")를 둘 다 사용할 수 있다.
const singleQuote = "hello, world";
const doubleQuote = "hello, world";

// * 역따옴표는 ES6부터 도입된 '템플릿 문자열'이다.
// * 문자열 안에 변수를 삽입할 수 있다.
let hello = "hello";
let world = "world";

const backticks = `${hello} ${world}`;
console.log(backticks);

// * 2. 백슬래시 (\)

// * 백슬래시는 다른 특수 문자들과 결합하여 특정한 의미를 가지도록 한다.
// * 예를 들어, 줄바꿈 문자와 탭 문자는 백슬래시와 결합하여 사용한다.

const newLine = "hello, \nworld";
const tab = "hello, \tworld";

// * 3. 이스케이프 문자

// * 백슬래시와 함께 사용되는 문자열로, 특정한 의미를 갖는 문자를
// * 문자열 안에 직접 표현하는데 사용된다.
// * 일반적인 이스케이프 문자로는 \n (줄바꿈), \t (탭), \r (캐리지 리턴), ', ", \ 등이 있다.

const escapedString = "Hello, 'world!'"; // Hello, 'world!'와 같은 문자열

// * 4. 특수 문자로서의 + 연산자

// * 문자열과 다른 다른 데이터 타입을 더할 때, + 연산자를 사용하여 문자열 연결을 할 수 있다.

const name = "Alice";
const age = 30;
const message = "My name is " + name + " and I am " + age + " years old.";
