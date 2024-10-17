// * 62
// * get과 set 접근자에 대해 설명하고 예시를 들어보세요.

// * get과 set 접근자
// * get과 set 접근자는 객체의 속성을 읽고 쓸 때 특정 로직을 수행하는 함수 형태의 프로퍼티
// * get과 set은 각각 선택적으로 정의할 수 있다.
// * get만 정의하면 읽기 전용 프로퍼티가 되며, set만 정의하면 쓰기 전용 프로퍼티가 된다.
// * 객체 리터럴 안에서도 get과 set을 사용할 수 있다.

const user = {
  name: "Sam",
  surname: "Smith",

  // get 접근자: fullName 프로퍼티를 읽을 때 호출
  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  // set 접근자: fullName 프로퍼티에 값을 쓸 때 호출
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};

console.log(user.fullName); // 출력: "Sam Smith"
user.fullName = "John Doe";
console.log(user.name); // 출력: "John"
console.log(user.surname); // 출력: "Doe"
