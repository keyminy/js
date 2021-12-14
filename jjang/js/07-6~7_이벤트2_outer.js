//이벤트 리스너를 위한 자바스크립트

  //load 리스너 붙이기
  sel_body = document.getElementById("body");
  //sel_body.addEventListener("load",alert('test')); //이건됨
  // sel_body.addEventListener("load",
  // function(){
  //   alert('문서를 로딩했어요');
  //   alert('함수test');
  // });
  //ㅅㅂ 익명함수로 하니까 안됨(왜냐 호출해서 실행하는게 아니기때문..!) - load하면서 바로 실행됨
  sel_body.addEventListener("load",load_func());
  function load_func(){
    alert('문서를 로딩했어요');
    alert('함수test');
  }

  //클릭 이벤트 리스너 작성
  document.getElementById("div_click").addEventListener("click"
  ,function(){
    alert("클릭했어요.")
  });//function안쓰고 그냥 alert하면 오류남

  //mouseover 이벤트 리스너 작성
  document.getElementById("span_mouseover").addEventListener("mouseover",
    function(){
      alert("마우스가 올라갔어요");
    });

  //input_keyup
  document.getElementById("input_keyup").addEventListener("keyup",function(){
    alert("키보드 키가 올라갔어요");
  });
  //input_focus
  document.getElementById("input_focus").addEventListener("focus",function(){
    alert("커서가 들어갔어요");
  });
  //select_change 데이터 바꾸기
  document.getElementById("select_change").addEventListener("change",function(){
    alert("데이터 선택으로 데이터가 변경됬어요");
    console.log(document.getElementById("select_change").value);
  });