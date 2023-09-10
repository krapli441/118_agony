// * 메서드를 가진 클래스를 선언하는 코드를 작성해보세요.

class Person {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  }
}

const person = new Person("박준형");

console.log(person.name);
