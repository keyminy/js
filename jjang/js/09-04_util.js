/*tag를 만들어서 문자열로 넘겨주는 함수*/
function pairTag(preChar,tagName){
  return "<" + preChar + tagName + ">";
}
/*태그 이름을 받아서 앞뒤의 태그를 둘러싸서 완성하는 함수*/
function tag(tagName,data){
  return pairTag("",tagName) + data + pairTag("/",tagName);
}
// id객체를 선택하는 함수 : 객체 하나만 찾아진다.
function sel(id){
  return document.getElementById(id);
}
//tag객체를 선택하는 함수 : 객체 여러개가 나옴 [] - for of
function selTag(tag){
  return document.getElementsByTagName(tag);
}
//요일에 사용될 배열 : 전역 변수
var days = ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"];
//날짜를 형식에 맞는 문자열로 만들어주는 함수
function dateToStr(inDate,separator,week){
  var year = inDate.getFullYear();
  var month = inDate.getMonth()+1;
  var monthStr = "";
  //월을 2자리로 만들어 주기 위한 처리
  if(month<10){
    monthStr += "0";
  }
  monthStr += month;
  var date = inDate.getDate();
  var dateStr = "";
  if(date < 10) {
    dateStr += "0";
  }
  dateStr += date;
  if(!separator) {
    separator = "-";
  }
  //yyyy-mm-dd 형식으로
  var str = year + separator + monthStr + separator + dateStr;
  if(week){
    str += "(" + days[inDate.getDay()] + ")";
  }
  return str;
}