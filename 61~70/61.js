// * static 키워드가 무엇인지 설명하고 예를 들어보세요.

// static 키워드는 클래스의 정적(static) 메소드를 정의할 때 사용한다.
// 정적 메서드와 속성은 클래스의 인스턴스가 아닌 클래스 자체에 연결되며, 인스턴스를 생성하지 않고도 클래스 이름을 통해 직접 호출할 수 있다.
// 정적 메서드와 속성은 인스턴스에서 직접 접근할 수 없고, 클래스 이름을 통해서만 접근할 수 있다.

class Article {
  static publisher = "imnotkrapli";

  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  // 정적 메서드
  static printPublisher() {
    console.log(Article.publisher);
  }
}

// 정적 메서드는 클래스 이름으로 호출
Article.printPublisher(); // 출력: "imnotkrapli"

// 인스턴스를 통한 호출 불가
const myArticle = new Article(1);
myArticle.printPublisher(); // 오류: printPublisher는 인스턴스에서 호출할 수 없음

class Calculator {
  static add(x, y) {
    // 정적 메서드
    return x + y;
  }
  multiply(x, y) {
    // 인스턴스 메서드
    return x * y;
  }
}

// 정적 메서드는 클래스 이름을 통해 호출
console.log(Calculator.add(5, 3)); // 8

// 인스턴스 메서드는 인스턴스를 생성하여 호출해야 함
const calc = new Calculator();
console.log(calc.multiply(5, 3)); // 15
