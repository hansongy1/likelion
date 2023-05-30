// 0328(2)

let age = window.prompt("How old are you?")
console.log(typeof age);
age += 1; // age = age + 1
console.log("Happy Birthday!", age, "years old");
// console.log(`Happy Birthday!! You are ${age} years old`) 권장

// let 재선언 불가
age = Number(age);
console.log(typeof age);
age += 1;
console.log(`Happy Birthdat! You are ${age} years old`);    //12줄의 age를 불러온다

