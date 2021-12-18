//입력 데이터 처리를 위한 js util

//1.필수 입력 항목 검사
//사용법 : if(!require(input의객체,"항목이름")) return false;
// if문 안의값이 false가 넘어오면 return false를 하자
function require(obj,item){ //obj : input tag의 객체이다
  //매개변수 object라고 쓰지마라
  //데이터가 없는 경우 처리
  if(!obj.value){
    //input 입력란에 입력이 안되어 있어요.
    //경고메시지 뛰우고
    alert(item+"은(는) 반드시 입력하셔야 합니다.")
    //커서 위치시키기
    obj.focus();
    //submit 막기(return false)
    return false;
  }
  return true; //이거 안하면 pw검사로 안넘어가더라
}

//2.입력 데이터의 길이 검사 함수(~이상)
//사용법 : if(!checkLength(input객체,"항목이름","길이")) return false;
function checkLength(obj,item,len){
  if(obj.value.length < len){
    //경고
    alert(item + "은(는) " + len + "자 이상이여야 합니다.");
    //만약 input의 type이 password인 경우 pw.value= ""로 데이터 지우기
    if(obj.type == "password") obj.value = ""; //이건 몰랏넹
    //커서 위치시키기
    obj.focus();
    //submit()을 취소시키기위한 false를 리턴
    return false;
  }
  //데이터가 적당하다면 true를 리턴한다.
  return true;
}

//id넣을때 input 태그의 공백을 지우는 함수
//String의 trim() 메소드
//값의 공백을 제거한 후 다시 입력란의 값으로 넣어준다(keyup 이벤트)
function removeBlank(inputObj){
  //alert("removeBlank()");
  var v = inputObj.value;
  //alert("["+v+"]");
  inputObj.value = v.trim(); //공백이 제거된걸 넣어줍니다.
  //alert("["+inputObj.value+"]"); //공백 제거된걸 알 수 있당..
}

//다음 항목으로 자동이동이 되는 함수(keyup 이벤트를 사용하여야한다)
function goNext(thisObj,nextObj,len){
  //현재 입력란의 값의 길이가 len에 도달하면 다음 입력 란으로 이동시켜준다
  if(thisObj.value.length>=len){
    nextObj.focus();
  }
}