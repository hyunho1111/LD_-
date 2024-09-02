// // // //변수
// // // console.log("Hello world"); // "Hello world" 문자열 or string

// // // const a = 1; //숫자or number
// // // const name = 'hyunho'; // 'hyunho' 문자열 or string
// // // const israinning = true //boolean (true(진실), false(거짓))


// // // const empty = null; // unll
// // // let message; //변수 선언 

// // // console.log("null 타입체크", empty === null); //null의 타입체크 방법

// // // console.log("message", message); //값을 지정하지않아서 nudefined로 나옴

// // // console.log("empty type:", typeof empty);
// // // console.log("a", a); //값을 출력
// // // console.log("a type", typeof a); //타입을 확인할땐 "0 type", typeof 0을 써야함

// // //함수
// // // function welcome(){  //함수 기본구조
// //     // console.log("welcome", name); //실행문} 
// // // welcome();

// // //함수 표현식
// // // const welcome = (username)  {  //매개변수가 있는 함수 정의
// //     // console.log("welcome",username); };
// // // 인자가 있는 함수 호출
// // // welcome('김현호'); //함수호출한다 또는 실행한다. welcome 김현호

// // // const inputwelcome = () => {
// // //     //실행문
// // //     const name = prompt("점심 뭐먹을까?");
// // //     console.log("name", name);
// // // };
// // // inputwelcome();



// // const double = (num) => {    //기본적인 화살표 함수
// //     // console.log(num * 2);
// //     console.log('next return');
// //     return num * 2;    //실행문
    
// // };

// // //함수 호출
// // console.log("double", double(66)); // 코드에서 재활용해야할때 리턴을 사용함
// // const doubleresult = double(66);
// // console.log("+1", doubleresult + 1);


// // const multiply = (x) => {
// //     return x * 3;
// // }

// // console.log("multiply", multiply(33))

// // const fn = () => {
// //     result * 2
// // }

// // const multiply2 = (num, step) => {
// //     return num * step;
// // }

// // const multiplyResult = multiply2(5,10);
// // console.log('multiplyResult', multiplyResult)



// // const discount = 0.7;
// // const account =() =>{
// //     const inputprice = numder(prompt('옷이 얼마인가요?'));
// //     // console.log(inputprice * discount);
// //     return inputprice * discount;
// // }

// // console.log('최종 금액은?', account());



// //과제 문제 1
// // function add(a, b) {
// // 	return a + b;
// // }

// // 여기에 화살표 함수로 다시 작성하세요.

// const add = (a, b) => {
//     return a + b;
// }

// console.log(add(5, 3)); // 예상 결과: 8

// // 여기에 두 개의 parameter를 가진 화살표 함수를 작성하세요.
// const minus = (a, b) => {
//     return a - b;
// }
// // 함수 테스트
// console.log(minus(60, 20));// 예상 결과: 40

// const introduce = (name, age) => {
//     return '안녕하세요, ' + name + '님. 당신의 나이는 ' + age + '세입니다.';
//   };
//   // 여기에 함수를 호출하는 코드를 작성하세요.// 당신의 이름과 나이를 argument로 사용하세요.
//   console.log(introduce('김현호', 34));// 예시 결과: "안녕하세요, 김철수님. 당신의 나이는 25세입니다."
  
// // const discount = 0.7;
// // const account =() =>{
// //     const inputprice = numder(prompt("옷이 얼마인가요?"));
// //     console.log(inputprice * discount);
// //     return inputprice * discount;
// // }

// // console.log('최종 금액은?', account());


const a = 0.9;
const b = () => {
    const c = prompt("90%세일");
    // const c = Number(prompt("90% 세일"));
    return c * a;
}

console.log('어렵다', b());