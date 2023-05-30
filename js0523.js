// 숫자 랜덤
// let x;

// document.getElementById("rollButton").onclick = function () {
//     x = Math.floor(Math.random() * 6) + 1;  // 1 <= 정수 x < 7

//     document.getElementById("xlabel").innerHTML = "x: " + x;
// }


// 더하기 빼기 초기화 버튼을 누르면 해당 기능을 수행하는 프로그램
let a;
// let count = 0;

document.getElementById("decreaseBtn").onclick = function () {
    a = (Math.floor(Math.random() * 6)  + 1) - (Math.floor(Math.random() * 6) + 1);
    document.getElementById("countLable").innerHTML = "a - a = " + a;
    // count -= 1;
    // document.getElementById("countLable").innerHTML = count;
}

document.getElementById("resetBtn").onclick = function () {
    a = 0;
    document.getElementById("countLable").innerHTML = a;
    // count = 0;
    // document.getElementById("countLable").innerHTML = count;
}

document.getElementById("increaseBtn").onclick = function () {
    a = (Math.floor(Math.random() * 6)  + 1)+ (Math.floor(Math.random() * 6) + 1);
    document.getElementById("countLable").innerHTML = "a + a = " + a;
    // count += 1;
    // document.getElementById("countLable").innerHTML = count;
}

