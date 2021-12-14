var items = ["컴퓨터","키보드","모니터"];//배열 선언
for(idx in items){
  console.log(items[idx]);
}//items배열 안에 들어있는 index번호를 꺼내가지고 출력
// for(var idx = 0; idx<items.length;idx++){
//   console.log(items[idx]);
// }
console.log("구분------------");
// 배열 데이터를 하나씩 꺼내서 꺼내온 변수를 처리하는 for문 키워드 of-(자바의 향상된 for문)
for(item of items){
  console.log(item);
}