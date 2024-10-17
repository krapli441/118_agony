// * 클래스를 상속받는 서브 클래스를 선언하는 코드를 작성해보세요.
// 서브 클래스란, 기존의 클래스를 확장하여 새로운 속성이나 메서드를 추가할 수 있는 클래스를 말한다.
// extends 키워드를 사용하여 '기본 클래스'를 상속받아 서브 클래스를 만들 수 있다.

class Parent {
  constructor() {
    this.name = "Park";
  }
  hello() {
    console.log("hello", this.name);
  }
}

// 서브 클래스 선언
class Child extends Parent {
  constructor() {
    super(); // 부모 클래스의 생성자를 호출합니다.
    this.age = 10;
  }
  // 새로운 메서드 추가
  sayAge() {
    console.log("I am", this.age, "years old");
  }
}

const childInstance = new Child();
childInstance.hello(); // "hello Park"
childInstance.sayAge(); // "I am 10 years old"
