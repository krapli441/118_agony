// * JSON 객체를 사용해 JavaScript 객체를 JSON 문자열로 변환하는 코드를 작성해보세요.

const person = {
  name: "John Doe",
  age: 30,
  city: "New York",
};

const jsonString = JSON.stringify(person);

console.log(jsonString); // '{"name":"John Doe","age":30,"city":"New York"}'
