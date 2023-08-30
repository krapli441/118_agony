// * 클로저에 대해 설명하고 예를 들어보세요.

// * 클로저(closure)는 자바스크립트에서 중요한 개념이다.

// * 클로저란, 함수와 그 함수가 선언된 렉시컬 환경(lexical environment)의 조합이다.
// * 렉시컬 환경 - 함수가 선언된 위치에 따라 결정되는 환경을 나타낸다.

// ? 예를 들어, 내가 스타벅스에서 작업을 하고 있다.
// ? 이 스타벅스는 여러 명의 사람들이 각자의 작업을 하는 장소이다.
// ? 각 사람은 자신만의 작업 환경과 장비를 갖춘 작업 공간을 가지고 있다.
// ! 이 작업 환경은 어떤 의미에서 "환경"으로 볼 수 있다.

// ? 그리고, 각 사람의 작업 환경은 서로 다른 커피숍 내부의 위치에 의해 결정된다.
// ? 만약 내가 창가 쪽에 앉았다면, 창문 밖으로 보이는 풍경이 작업 환경의 일부가 될 것이다.
// ? 또한 내가 무엇을 쓰고 읽는지, 어떤 도구를 사용하는지도 작업 환경을 형성한다.

// ! 스타벅스는 전체 코드베이스이고, 각각의 사람은 함수이다. 함수들은 자신만의 작업 환경을 가지고 있는데, 이 환경은 함수가 선언된 위치에 따라 달라진다.
// ! 이 작업 환경은 변수들과 그들의 값들을 포함하며, 클로저는 이러한 작업 환경을 함께 갖고 다닐 수 있는 개념이다.

function outerFunction() {
  const outerVariable = "I am from the outer function";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // 'I am from the outer function' 출력.
