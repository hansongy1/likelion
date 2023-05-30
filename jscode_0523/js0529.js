// 2201803 한송이

// Q. Object를 호출하는 방법 2가지를 서술하시오(고선진님)
// 대괄호와 점(.)연산자를 이용하여 호출한다.
// ex)  fruit["name"]
//      fruit.name


// Q. 아래의 값이 출력되는 for문을 작성하시오(나민경님)
// for (let i = 1; i < 5; i+=3){
//     for (let j=2; j<9; j+=3){
//         console.log(i, j);
//     }   
// }


// Q 선택자 id와 class의 차이점을 서술하시오(정지현님)
// class 선택자는 동일한 이름을 중복으로 사용 가능하고,
// id 선택자는 같은 이름을 사용할 수 없고 특정 이름을 부여해서 사용해야한다.


// Q 아래의 코드를 보고 출력값을 구하시오(정지현님)
// let a = 3;
// let b = 4;
// let c = a++ + --b;

// console.log(a, b, ++c);

// A. 4, 3, 7


// Q. 이메일을 입력 받고 '@' 전까지만 출력하시오(김하경님)
let email = window.prompt("이메일을 입력하시오");
var id = String(email.split("@", 1));
console.log(id);


// Q. 아래의 array 내용을 모두 출력하는 for문을 작성하시오(조혜현님)
// (단, length를 사용하여야 한다.)
// let array = [1, 2, 3, 4, 5];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }


// Q. 1~100까지 7의 배수만을 합하여 결과를 출력하는 프로그램(조혜현님)
// let sum = 0;
// for(let i = 0; i <= 100; i++) {
//     // 채우세요
//     if (i%7 == 0) {
//         sum += i;
//     }
// }

// console.log("7의 배수의 합: ", sum);


// Q 컴퓨터가 생각하고 있는 숫자를 맞추는 프로그램(정채원님)
// var targetNum = Math.floor(Math.random() * 9) + 1;
// var user = window.prompt("숫자를 맞춰보세요");
// while (true) {
//     var user = window.prompt("숫자를 맞춰보세요");

//     if (user > targetNum) {
//         console.log("Down!!");
//     } 
//     else if (user < targetNum){
//         console.log("Up!!");
//     }
//     else {
//         console.log(`축하합니다! ${targetNum}를 맞추셨네요`);
//         break;
//     }
// }



// Q. Object를 이용해 학생 3명의 이름과 학점, 백분율을 작성하고 
// 학점이 3.0 이상이고 백분율이 90 이상인 학생만을 출력하시오 (허정윤님)
// const student = {
//     pororo:{
//         name:"뽀로로",
//         score:1.4,
//         percent:68
//     },
//     tongtong:{
//         name:"통통이",
//         score:3.6,
//         percent:90
//     },
//     petty:{
//         name:"패티",
//         score:4.4,
//         percent:98
//     }
// }

// console.log(Object.values(student).filter(student => student.score >= 3.0 && student.percent >= 90));