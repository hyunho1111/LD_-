
// const bootcampstudents = [
//     '김원명', '박성민', '김현호', '주영신', '강지영', '김영혜', '조재원', '김태욱',
//     '정세헌', '장현재', '김완재', '박준혁', '김은호']
// console.log("🚀 ~ bootcampstudents:", bootcampstudents)


// // 기본문법 for(초기화값, 반복조건식, 증감식) {}


// for(let i = 0; i < bootcampstudents.length; i++) {    //반복문 기본 문법
//     // console.log(i, "번째 실행");
//     if (bootcampstudents[i].includes("김")) {
//         // consloe.log('학생 이름', i, ":", bootcampstudents[i], "씨");
//         console.log(`학생 이름${i}:${bootcampstudents[i]}씨`)
    
//     }
// }
// // bootcampstudents.forEach((a, b, c) => {
// // console.log("🚀 ~ student", a);
// // console.log("🚀 ~ index", b);
// // console.log("🚀 ~ array", c);
// // });
// //map : 기존 배열을 조작해서?



// //개발꿀팀 예시
// // const add = (a, b) => {
// //     return a +b;
// // }
// // const add2 = (a, b) => a +b;
// // // console.log("🚀 ~ add2(1, 2):", add2(1, 2))
// // // console.log("🚀 ~ add(1, 2):", add(1, 2))   


// const studentnamelist = bootcampstudents.map((student) => `${student}🪛`); //백틱

// console.log("🚀 ~ studentnamelist:", studentnamelist)


// const firestudents = [
//     {
//         id:1,
//         name:'mark',
//         age:35,
//         mbti: 'enfp'
//     },
//     {
//         id:2,
//         name:'june',
//         age:29,
//         mbti: 'esfp'
//     },
//     {
//         id:3,
//         name:'ho',
//         age:34,
//         mbti: 'esfp'
//     },
// ]

// firestudents.map((student) => student.name.toUpperCase());

// console.log 
// (firestudents.map((student) => student.name.toUpperCase())
// );

// // const twentystudents = firestudents.filter((student) => student.age <= 29)
// // console.log("🚀 ~ twentystudents:", twentystudents)

// const esfptystudents = firestudents.filter((student) => student.mbti === 'esfp')
// console.log("🚀 ~ esfptystudents:", esfptystudents)
// const esfptystudent = firestudents.find((student) => student.mbti === 'esfp')
// console.log("🚀 ~ esfptystudent:", esfptystudent)
// const ttstudemts = firestudents.find((student) => student.age >= 40);
// console.log("🚀 ~ ttstudemts:", ttstudemts)


// const issomestdent = firestudents.some((student) => student.name ==='mark')
// const issomestden = firestudents.every((student) => student.age >= 20)
// console.log("🚀 ~ issomestden:", issomestden)
// console.log("🚀 ~ issomestdent:", issomestdent)


//--------------------------------
//counter 구현
// const counterEL = document.querySelector('.couter');
// console.log("🚀 ~ counterEL:", counterEL)
// const increasecounterEL = document.querySelector('.increase-button');
// console.log("🚀 ~ increasecounterEL:", increasecounterEL)
// const decreasecounterEL = document.querySelector('.decrease-button');
// console.log("🚀 ~ ecreasecounterEL:", ecreasecounterEL)

// const increase = () => {

const inputEl = document.querySelector(".input");
const textinput = document.querySelector(".textinput");


//체크했을때

const checkfn = () => {
    console.log("check!!");
    if(inputEl.checked) {
        //체크된상태
        textinput.setAttribute('disabled', true)
    } else {
        //체크해제상태
        textinput.removeAttribute('disabled')
    }
};
{/* <input type="checkbox" id="input"
 class="input"/>
<label for="input">테스트</label>

<input type="text"
class="textinput"></input> */}

inputEl.addEventListener('change', checkfn)
