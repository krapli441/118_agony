// * 클래스의 인스턴스를 생성하는 코드를 만들어보세요.

class Car {
  constructor() {
    console.log("인스턴스 생성");
  }
}

// Car 클래스의 인스턴스 생성
const car = new Car();

// car가 Car 클래스의 인스턴스인지 확인
console.log(car instanceof Car); // 출력: true

// class Car는 Car 클래스를 정의하고 constuctor()는 클래스 인스턴스를 생성할 때 호출된다.
// const car = new Car(); 구문은 Car 클래스의 인스턴스를 생성하여 car 변수에 할당한다.
// instanceof 연산자를 통해 인스턴스 여부를 확인한다.
