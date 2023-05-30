// 0328(3)

let userName = "Han songyi";

// length
console.log(userName.length); // 유저네임의 길이는 얼마냐, 10

// charAt()
console.log(userName.charAt(0));    // H
console.log(userName.charAt(3));    // (공백)
console.log(userName.charAt(4));    // s

// indexOf()
console.log(userName.indexOf("o"));     // 5
console.log(userName.indexOf(" "));     // 3
console.log(userName.lastIndexOf("n")); //6

// toUpperCase() & toLowerCase()
console.log(userName.toUpperCase());    // 대문자로 작성됨
console.log(userName.toLowerCase());    // 소문자로 작성됨

// slice() 
let fullName = "songyi Han";
let firstName;
let lastName;

firstName = fullName.slice(0, fullName.indexOf(" "));
// 0 ~ 공백 전까지
console.log(firstName);

lastName = fullName.slice(fullName.indexOf(" ") +1);
// K(=공백 + 1)부터 끝(, 뒤가 생략됨)까지
console.log(lastName);