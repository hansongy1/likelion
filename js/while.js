let level = 50;
let point = 0;

while(level >= 30) {
    console.log("그의 레벨은 30이상이다.");
    ++point;
    console.log(`획득한 토탈 포인트: ${point}`);

    if (level >= 50) {
        console.log("그의 레벨은 50이상이다.");
        ++point;
        console.log(`획득한 토탈 포인트: ${point}`);
    }

    else if (level >= 80) {
        console.log("그의 레벨은 80이상이다.");
        ++point;
        console.log(`획득한 토탈 포인트: ${point}`);
    }

    else {
        console.log("그의 레벨은 30이상 50미만이다.");
    }
    // 30 미만은 여기에 못 들어옴

    break;
}

