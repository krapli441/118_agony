// * JSON 객체를 사용해 JSON 문자열을 JavaScript 객체로 변환하는 코드를 작성해보세요.

const jsonString = '{"name": "John", "age": 30, "city": "New York"}';

const jsonObject = JSON.parse(jsonString);
console.log(jsonObject); // { name: 'John', age: 30, city: 'New York' }
