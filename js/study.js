'use strict';

let fruits = ["사과","배","바나나","딸기","수박"];

fruits.forEach(fruit => console.log(fruit));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

// 배열에 값 추가
fruits.push("참외","오렌지","키위");  // push : 값을 뒤로 추가
console.log(fruits);

console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
fruits.unshift("앵두","자두");        // unshift : 값을 앞으로 추가
console.log(fruits);

console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
// 배열값 삭제(pop(), shift())
fruits.pop();       // pop : 뒤의 값 삭제
fruits.pop();
console.log(fruits);

console.log("############################");
fruits.shift();     // shift : 앞의 값 삭제
fruits.shift();
console.log(fruits);

console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
// 특정요소위치부터 지정개수만큼 제거(splice(인덱스번호, 개수))
fruits.splice(2, 1);
console.log(fruits);

fruits.splice(3);   // splice()에 인덱스 번호만 적으면 그 위치부터 모두 제거한다.
console.log(fruits);
console.log("%%%%%%%%%%%%%%%%%%%%%%%%%5%%");

fruits.splice(1,1,"옥수수","자몽","토마토");  // 1번 뒤에 한개를 덮어쓰고 그위치부터 값을 넣겠다.
console.log(fruits);

fruits.splice(1,0,"감자");    // 1번 뒤에 값을 넣겠다.
console.log(fruits);

console.clear();
console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
// 배열의 지정된 위치부터 자료를 가져온다. : slice()
let imsiFruits = fruits.slice(2);
console.log(imsiFruits);
console.log(fruits);

// fruits배열의 인덱스번지 2번째부터 4번째 앞까지 가져오시오.
imsiFruits = fruits.slice(2,4);
console.log(imsiFruits);
console.log(fruits);

console.log("&&&&&&&&&&&&&&&&&&&&&&");
// 결합(붙이기) : concat()
const concatFruits = fruits.concat(imsiFruits);
console.log(concatFruits);

// 배열의 자료 검색 : includes() - 있으면 true, 없으면 false
console.log(concatFruits.includes("옥수수"));
console.log(concatFruits.includes("옥소수"));

// indexOf() : 있으면 위치값, 없으면 -1
console.log(concatFruits.indexOf("옥수수"));
console.log(concatFruits.indexOf("옥소수"));

// lastIndexOf() : 뒤에서부터 검색
console.log(concatFruits.lastIndexOf("옥수수"));
console.log(concatFruits.lastIndexOf("옥소수"));


