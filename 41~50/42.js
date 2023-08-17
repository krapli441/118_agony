// * this 키워드에 대해 설명하고, 사용 예를 들어보세요.

// 메서드 내부에서 this를 사용하면 객체에 접근할 수 있다.

let user = {
  name: "박준형",
  age: 29,
  sayHi() {
    // 'this'는 현재 객체를 나타낸다.
    console.log(this.name);
  },
};

console.log(user.sayHi());
