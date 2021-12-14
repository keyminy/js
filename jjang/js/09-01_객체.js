//book객체의 제목과 가격을 문자열로 돌려주는 함수 선언
var toStringFunc = function(){
  return this.price + "/" + this.title;
}

// (M1)데이터가 중간중간에 생기는 경우 사용방법
var book = {}; //book이라는 객체를 선언함
// book 객체에 제목 항목의 데이터를 저장
book.title = "자바스크립트"; // setter의 역할
book.price = 18800;
book.print = function() {
  //function은 밖에서 선언해서 정의를 다 한 후 book의 print속성에 넘기고 있다.
  return this.price + "/" + this.title; //function은 object에 집어넣기 전 단계이므로 this를 써줘야한다.
  //return price + "/" + title; //title과 price가 밖에있어서 못찾겠다
} //함수를 저장햇누
console.log("(M1)",book.print());

// (M2)객체를 만들 당시에 데이터가 확정되어 있다.
book = {
  title : "자바",
  price : "30000",
  toString : function() {
    return this.title + "/" + this.price;
  }
}
console.log("(M2)",book.toString());

// (M3) 함수 간략하게 호출
book = {};
book.title = "자바스크립트"; // setter의 역할
book.price = 18800;
book.toString = toStringFunc;

console.log("(M3)",book.toString());

// (M4) 함수이름으로 간략하게 toString : toStringFunc
book = {
  title : "자바",
  price : "30000",
  toString : toStringFunc
}
console.log("(M4)",book.toString());