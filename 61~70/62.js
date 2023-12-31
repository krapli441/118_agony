// * 62
// * get과 set 접근자에 대해 설명하고 예시를 들어보세요.

// * get과 set 접근자
// * 객체의 프로퍼티를 읽고 쓸 때 호출되는 함수
// * get은 프로퍼티 값을 읽을 때 호출되고, set은 프로퍼티에 값을 쓸 때 호출된다.
// * get과 set은 둘 다 선택적으로 사용할 수 있다.
// * get과 set은 객체 리터럴 안에서 사용할 수 없다./

const user = {
  name: "sam",
  surname: "Smith",
  get fullName() {
    return `${this.name} ${this.surname}`;
  },
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};