// 한송이
// 1. if문
let food = window.prompt("오늘 식단은?")

if(food == "짜장면") { 
    console.log("오늘 식단은 짜장면입니다.");
}
else {
    console.log("오늘 식단은 짜장면이 아닙니다.");
}


// 2. for문
for (let i = 1; i <= 3; i+=2) {
    for (let j = 2; j <= 7; j+=2) {
        console.log(i, j);
    }
}


// 3. switch문
let weater = "sunny";
switch(weater) {
    case "windy":
        console.log("오늘은 바람이 많이 분다.");
        break;
    case "rainy":
        console.log("오늘은 비가 온다.");
        break;
    case "sunny":
        console.log("오늘은 날씨가 좋다.");
        break;
    default:
        console.log("오늘의 날씨는 어떤가요?");
        break;
}


// 4번
let product = window.prompt("필요한 물건을 입력하시오: ")
product = String(product);

if(product == "cola") { 
    console.log("cola는 2000원입니다.");
}
else if(product == "beer") {
    console.log("beer는 4000원입니다.");
}
else if(product == "milk") {
    console.log("milk는 3000원입니다.");
}
else if(product == "coffee") {
    console.log("coffee는 1000원입니다.");
}
else {
    console.log(`${product}은 팔지 않습니다.`);
}

// let product = "milk"
// switch (product) {
//     case "cola":
//         console.log("cola는 2000원입니다.");
//         break;
//     case "beer":
//         console.log("beer는 4000원입니다.");
//         break;
//     case "milk":
//         console.log("milk는 3000원입니다.");
//         break;
//     case "coffee":
//         console.log("coffee는 1000원입니다.");
//         break;
//     default:
//         console.log(product, "는 팔지 안하용");
//         break;
// }