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
//tag객체를 선택하는 함수 : 객체 여러개가 나옴 []
function selTag(tag){
  return document.getElementsByTagName(tag);
}