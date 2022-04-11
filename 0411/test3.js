'use strict';

// 오늘날짜를 전역변수로 생성...
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
const hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();
const yymmdd = year + "-" + month + '-' + date + " " + hour + ":" +minute + ":" + second;

// 일반 날짜 출력
function fCheck() {
  let d1 = new Date();
  let strDate = d1;
  document.getElementById("demo").innerHTML = strDate;
}

// 편집 날짜 출력
function fCheck2() {
  let strDate = yymmdd;
  document.getElementById("demo").innerHTML = strDate;
}

// 쉬운 날짜 출력
function fCheck3() {
  let str = "";
  str += year + "년 ";
  str += month + "월 " + date + "일 ";
  let week = ["일","월","화","수","목","금","토"];
  str += week[today.getDay()] + "요일 "; // 0:일, 1:월, 2:화, 3:수, 4:목, 5:금, 6:토
  str += hour + "시 ";
  str += minute + "분 ";
  // str += second + " 초";
  // str += today.getMilliseconds() + "초";
  str += (today.getMilliseconds()/1000/60) + "초";
  let strDate = str;
  document.getElementById("demo").innerHTML = strDate;
}
// 시간 출력
function fCheck4() {
  let strDate = today.getTime();
  document.getElementById("demo").innerHTML = strDate;
}
// 해당월의 마지막일자 출력
function fCheck5() {
  let strDate = "";
  let year = document.getElementById("year").value;
  let month = document.getElementById("month").value;
  if(year == "") {
    alert("년도를 선택하세요");
    return false;
  }
  if(month == "") {
    alert("월 선택하세요");
    return false;
  }
  strDate = new Date(year, month, 0);   // new Date(년, 월, 일, 시, 분, 초);
  strDate += "선택한 '년/월'의 마지막 일자는? " + strDate.getDate();

  document.getElementById("demo").innerHTML = strDate;
}

// yyyy-mm-dd : slice()함수를 사용한 편집
// function fCheck6() {
//   let strDate = year + "-" + month + "-" + date;
//   let fmtDate = strDate.split("-");
//   let yy = fmtDate[0];
//   let mm = fmtDate[1];
//   let dd = fmtDate[2];
//   console.log(fmtDate[2]);
//   if(fmtDate[1] < 10) mm = "0" + fmtDate[1];
//   if(fmtDate[2] < 10) dd = "0" + fmtDate[2];
//   strDate = yy + "-" + mm + "-" + dd;

//   document.getElementById("demo").innerHTML = strDate;
// }
function fCheck6() {
  let strDate = year + "-" + month + "-" + date;
  let fmtDate = strDate.split("-");
  let yy = fmtDate[0];
  let mm = ('0' + fmtDate[1]).slice(-2);
  let dd = ('0' + fmtDate[2]).slice(-2);
  strDate = yy + "-" + mm + "-" + dd;

  document.getElementById("demo").innerHTML = strDate;
} 