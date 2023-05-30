// let rc_test = 98;
// let jh_test = 100;
// let yj_test = 90;

// function print(name) {
//     test = window.prompt("이름을 입력하시오.")
//     if (test == rc_test) {
//         console.log("98점입니다.");
//     } else {
        
//     }
// }

// array 선언
// let babylion =[];

// let babylion = ["오준석", "원빈"];

// console.log(babyliin[0]);

// array
// 1 A의 시험점수를 공개
// let a_test = [33, 33, 54, 98];
// console.log(a_test);


// 1-1
// let test = {
//     kor {
//         score: 33
//     }
// }

const rapClass = {
    seungchul:{
        birth:"1995-08-08",
        age:29
    },
    wonwoo:{
        birth:"1996-07-17",
        age:28
    }
}

const vocalClass = {
    seungkwan: {
        birth:"1998-01-16",
        age:26
    },
    dk:{
        birth:"1997-02-18",
        age:27
    }
}

const danceClass = {
    dino: {
        birth:"1999-02-11",
        age:25
    },
    hoshi: {
        birth:"1999-06-15",
        age:28
    }
}

// 랩클래스 객체 안에 원우가 있음. 
console.log(rapClass.wonwoo.birth);
console.log(vocalClass.dk.age);



// 2
vernonBirth = window.prompt("버논의 생년월일...");
vernonAge = window.prompt("버논의 나이 lets go");
console.log(typeof vernonAge);
vernonAge = parseInt(vernonAge); // type string -> number
console.log(typeof vernonAge);  // number

rapClass.vernon = {birth: vernonBirth, age: vernonAge};
console.log(vernonBirth, vernonAge);

// 다른 방법
rapClass.vernon = {birth: "1998-02-18", age: 26}; // rapClass.vernon.age의 type은 number
console.log(rapClass.vernon.birth, rapClass.vernon.age);

// 2-2
console.log(rapClass.vernon.birth + ", " + rapClass.vernon.age);
console.log(rapClass.vernon);