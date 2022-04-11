'use strict';

function regexCheck() {
  // 정규표현식을 만든다.
  const regex1 = /atom/gm;  // 'atom'문자열이 포함되어 있으면? true, 없으면 false
  const regex2 = /mbc|kbs|sbs/gm;
  const regex3 = /홍길(순|동)/gm;
  const regex4 = /[a-g]/gm;   // a~g까지 포함하고 있는가?
  // const regex5 = /[a-z]/gm;   // a~z까지 포함하고 있는가?
  const regex5 = /[^a-z]/gm;   // a~z문자를 제외한 다른문자가 포함되어 있는가?
  const regex6 = /[^A-Z]/gm;   // A~Z문자를 제외한 다른문자가 포함되어 있는가?
  const regex6_2 = /^[A-Z]/gm;   // A~Z문자를 포함하고 있는가? 각괄호앞의 ^는 시작문자열을 의미, 첫글자는 영문대문자가 오면 true
  const regex7 = /[0-9]/gm;  // 0~9숫자의 포함 유무?
  const regex7_2 = /[^0-9]/gm;  // 0~9숫자의 다른문자 포함 유무?
  const regex8 = /[a-zA-z0-9]/gm; // 영문 대/소문자나 숫자 포함유무?
  const regex9 = /[ㄱ-ㅎ가-힣]/gm; // 한글 포함유무?
  // 와일드카드(? / * / +) : ?는 1개, '*/+' 복수개를 의미
  const regex10 = /홍길동?안녕/gm;  // '홍길동' 의 동 1개 글자에 대한 포함여부(있어도 되고, 없어도 된다)?
  const regex11 = /홍길동+안녕/gm;  // '홍길동' 의 동 글자가 1개 이상 포함여부(있어도 되고, 없어도 된다)?
  const regex11_2 = /홍길동*안녕/gm;  // '홍길동' 의 동 글자가 0개 이상 포함여부(있어도 되고, 없어도 된다)?
  // const regex12 = /홍길동{2}안녕/gm;
  // const regex13 = /홍길동{2,3}안녕/gm;
  const regex14 = /\./gm;   // 문자열중에서 '.'이 있는가? // .을쓸때 \를 사용  (\ 는 제어코드)
  const regex15 = /\d/gm;   // 숫자를 포함하고 있는가 ?
  const regex16 = /\D/gm;   // '\d'와 반대의 개념 // 숫자를 포함하고 있지 않는가? 
  const regex17 = /\w/gm;   // 영문자/숫자/_ 만을 체크 
  const regex17_2 = /\W/gm;   // 영문자/숫자/_ 만을 체크 
  const regex18 = /\s/gm;   // 문장안에 공백(탭,엔터)을 포함하고 있으면 true

  // ==============================

  let content = document.getElementById("content").value;

  if(content == "") {
    alert("1. 문자열을 입력하세요?");
    return false;
  }
  // else if(!content.match(regex1)) {
  //   alert("2. atom문자열을 포함하고 있지 않습니다.");
  //   return false;
  // }
  // else if(!content.match(regex2)) {
  //   alert("3. mbc/kbs/sbs 문자열을 포함하고 있지 않습니다.");
  //   return false;
  // }
  // else if(!content.match(regex3)) {
  //   alert("4. 홍길동/홍길순 문자열을 포함하고 있지 않습니다.");
  //   return false;
  // }
  // else if(!content.match(regex4)) {
  //   alert("5. 'a/b/c/d/e/f/g' 문자를 포함하고 있지 않습니다.");
  //   return false;
  // }
  // else if(regex5.test(content)) { 
  //   alert("6. 'a~z' 문자외 다른문자가 있습니다.");
  //   return false;
  // }
  // else if(regex6.test(content)) { 
  //   alert("7. 'A~Z' 문자외 다른문자가 있습니다.");
  //   return false;
  // }
  // else if(!regex6.test(content)) { 
  //   alert("8. 'A~Z' 문자외 다른문자가 있습니다.");
  //   return false;
  // }
  // else if(regex6_2.test(content)) { 
  //   alert("9. 첫글자가 영문대문자 입니다.");
  //   return false;
  // }
    // else if(!regex6_2.test(content)) { 
    //   alert("10. 첫글자가 영문대문자가 아닙니다. 체크하세요.");
    //   return false;
    // }
    // else if(regex7.test(content)) {  // 숫자만 사용시
    //   alert("7. 숫자를 포함하고 있지습니다. 다른문자와 숫자의 혼합가능");
    //   return false;
    // }
    // else if(regex7_2.test(content)) { 
    //   alert("7_2. 숫자외의 다른문자를 포함하고 있습니다. ");
    //   return false;
    // }
    // else if(regex8.test(content)) { 
    //   alert("8. '영문자나 숫자'를 포함하고 있습니다. ");
    //   return false;
    // }
    // else if(!regex8.test(content)) { 
    //   alert("8. '영문자나 숫자'를 포함하고 있지 않습니다. ");
    //   return false;
    // }
    // else if(regex9.test(content)) { 
    //   alert("9. 한글을 포함하고 있습니다.");
    //   return false;
    // }
    // else if(!regex9.test(content)) { 
    //   alert("9. 한글을 포함하고 있지 않습니다.");
    //   return false;
    // }
    // else if(regex10.test(content)) { 
    //   alert("10. 홍길[동]?안녕 이 있습니다.");
    //   return false;
    // }
    // else if(regex11.test(content)) { 
    //   alert("11. 홍길[동]?안녕 이 있습니다.");
    //   return false;
    // }
    else if(regex11_2.test(content)) { 
      alert("11_2. 홍길[동]?안녕 이 있습니다.");
      return false;
    }
    // else if(regex12.test(content)) { 
    //   alert("12. 홍길동{2}안녕 이 있습니다.");
    //   return false;
    // }
    // else if(regex13.test(content)) { 
    //   alert("13. 홍길동{2,3}안녕 이 있습니다.");
    //   return false;
    // }
    // else if(regex14.test(content)) { 
    //   alert("14. 문자열중에서 '.' 이 있습니다.");
    //   return false;
    // }
    // else if(regex15.test(content)) { 
    //   alert("15. 숫자를 포함하고 있습니다.");
    //   return false;
    // }
    // else if(regex16.test(content)) { 
    //   alert("16. 숫자의외에 다른 문자를 포함하고 있습니다.");
    //   return false;
    // }
    // else if(!regex16.test(content)) { 
    //   alert("16. 숫자만 포함하고 있습니다.");
    //   return false;
    // }
    // else if(regex17.test(content)) { 
    //   alert("17. 영문자/숫자/_ 를 포함하고 있습니다.");
    //   return false;
    // }
    // else if(!regex17.test(content)) { 
    //   alert("17. 영문자/숫자/_ 를 제외한 다른문자를 포함하고 있습니다.");
    //   return false;
    // }
    // else if(!regex17_2.test(content)) { 
    //   alert("17_2. 영문자/숫자/_ 를 제외한 다른문자를 포함하고 있습니다.");
    //   return false;
    // }
    // else if(regex18.test(content)) { 
    //   alert("18. 문장안에 공백 을 포함하고 있습니다.");
    //   return false;
    // }

  alert("작업끝!");
  document.getElementById("content").focus();
}