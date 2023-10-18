// * 클래스의 인스턴스를 생성하는 코드를 만들어보세요.

class Car {
  constructor() {
    console.log("인스턴스 생성");
  }
}

const car = new Car();

console.log(car instanceof Car);
