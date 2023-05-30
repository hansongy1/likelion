// 일상생활에서 사용하고 있는 예시들을 코드로 구현해오기
// if, switch, while, do-while문 중 2개 혹은 그 이상을 활용하여 구현
// 조건 3가지 이상..??
// 2201803 한송이
// 1. 운동 횟수 물어보기
let exercise = window.prompt("일주일에 몇 번 운동하시나요?")

if (exercise = 0) {
    console.log("가벼운 걷기부터 시작하는 거 어떨까요?");
} else {
    do {
        console.log("와우 잘하고 계시는 군요!");
    } while (exercise > 0)
    console.log("좋아요 앞으로도 파이팅");;
}

// 2. 점심 메뉴 고르기
let lunch = (window.prompt("점심으로 학식, 배달 중 무엇을 드실건가요"));
lunch = String(lunch);
if (lunch == "학식") {
    let menu = window.prompt("교직원, 한그릇, 학생식A 중에 골라주세요");
    switch(menu) {
        case "교직원":
            console.log("오늘의 메뉴는 설렁탕(5900원)입니다.");
            break;
        case "한그릇":
            console.log("오늘의 메뉴는 우동(3900원)입니다.");
            break;
        case "학생식A":
            console.log("오늘의 메뉴는 돈까스(4200원)입니다");
            break;
        default:
            console.log("카페에서 핫도그는 어떨까요?");
            break;
    }
} 
else if (lunch == "배달") 
{
    console.log("맛있는 점심 드세요.");
}
else {
    console.log("즐거운 점심시간 보내세요.");
}

// 3. 엘리베이터 층수 누르기
let elevator = window.prompt("엘리베이터에 타시려면 숫자 1를 눌러주세요(0: 안 타기)");

if (elevator == 1) {
    let floor = window.prompt("이동하려는 층수를  눌러주세요.(1F~5F)")
    while (6 > floor >= 1) {
        console.log("문이 열립니다.");
        console.log(`${floor}층으로 올라갑니다.`);

        if (floor >= 2) {
            console.log(`${floor}층입니다.`);
        }
        else {
            console.log("문이 닫힙니다.");
        }

        break;
    }
} else {
    console.log("안녕히 가세요.");
}


// if (elevator == 0) {
//     console.log("즐거운 하루 되세요");
// } 
// else {
//     let floor = window.prompt("이동하려는 층 수를 누르세요.");

//     while(floor >= 1) {
//         console.log("문이 열립니다.");
//         console.log(`${floor}층으로 올라갑니다.`);
    
//         if (floor > 1) {
//             console.log(`${floor}층입니다.`);
//         }
    
//         else if (floor > 2) {
//             console.log(`${floor}층입니다.`);
//         }
    
//         else {
//             console.log("문이 닫힙니다.");
//         }
    
//         break;
//     }

// }

// 4
// let ride = window.prompt("이용한 횟수를 입력해주세요.");
// let count = 0;

// while(ride >= 0) {
//     console.log("따릉이 이용 횟수는 0번이다.");
//     count++;
//     console.log(`따릉이 이용 횟수: ${count}`);

//     if(ride >= 1) {
//         console.log("1번 이용하셨습니다.");
//         ++count;
//         console.log(`따릉이 이용 횟수: ${count}`);
//     }
    
//     else if(ride >= 3) {
//         console.log("3번 이용하셨습니다.");
//         ++count;
//         console.log(`따릉이 이용 횟수: ${count}`);
//     }

//     else if(ride >= 4) {
//         console.log("4번 이용하셨습니다.");
//         ++count;
//         console.log(`따릉이 이용 횟수: ${count}`);
//     }
    
//     else {
//         console.log("오류가 발생되었습니다. 재로그인해주세요.");
//     }

//     break;
// }