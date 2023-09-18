// * static 키워드가 무엇인지 설명하고 예를 들어보세요.

// static 키워드는 클래스의 정적(static) 메소드를 정의할 때 사용한다.
// 정적 메소드는 클래스의 인스턴스를 생성하지 않아도 호출할 수 있다.
// 정적 메소드는 클래스의 인스턴스에서 호출할 수 없다.
// 정적 메소드는 클래스의 인스턴스에서 호출할 수 없기 때문에 클래스의 인스턴스에서 사용할 수 없는 필드를 정의할 때 사용한다.

// 예를 들어, 다음과 같이 사용할 수 있습니다.
class Article {
  static publisher = 'imnotkrapli';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}