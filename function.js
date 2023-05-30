// 0509

// Q1
function hello() {
    console.log('안녕 내 이름은 송이야');
}
hello();


// Q2
let name = '한송이'
function hi() {
    console.log(`안녕 내 이름은 ${name}(이)야`);
}
hi();   // 함수호출


// Q3
function add(x, y) {
    result = x + y;
    console.log(result);
}
add(1, 2);


// Q4
function add(x, y) {    // 매개변수 x, y
    result = x + y;
    console.log(result);
}
let a = 4;
let b = 9;
add(a, b);  // 간단하게 적어도 본인이 알아보면 ㄱㅊ다. x -> a, y -> b


// Q5
let age = 40;
function year(age) {
    result = 2024 - age;
    console.log(`썜의 출생년도는 ${result}년도이다.`);
}
year(age);


// Q6
let x = 7;
let y = 3;

function max(num1, num2) {
    if(num1 > num2) {
        console.log(num1);
    }
    else{
        console.log(num2);
    }
}
max(x, y);


// Q7
function solution() {
    result = num1 / num2;
    console.log(parseInt(result, 10));
}
let num1 = 100;
let num2 = 2;
solution(x, y);


// Q8
function sum(n) {
    let count = 0;  // n 이하의 양수를 모두 더한 값을 대입할 변수
    for(let i=1; i<=n; i+=1) {
        count += i;
    }
    console.log(count);
}
let n = 5;
sum(n);


// Q9
// function solution(e) {
//     let count = 0;
//     for (let i=0; i<=n; i+=2) {
//         count += i;
//     }
// }
// let e = 13;
// solution();


// let num = 10;
// function solution(num) {
//     for(let i=0; i<=n; i+=2) {
//         count += i;
//     }
//     console.log(count);
// }
// solution(num);

// Q10
function gugudan() {
    for(let a=5; a<=7; a+=1){
        for(let b=1; b<=9; b+=1) {
            result = a * b;
            console.log(`${a} X ${b} = ${result}`);
        }
        console.log(('----------'));
    }
}
gugudan();