// // //조건문
// // const score = 59;   //받은점수

// //if () {}   //조건문 기본형태

// // if (score  >= 60) { 
// //     console.log("합격"); //식이 끝나면 자연스럽게 다음 코드로 넘어감
// // } else {
// //     //60점 이상이 아닌경우
// //     console.log("불합격")
// // }    
// // console.log("next!!!");

// //  //score >= 60 ?  '':'' //<--삼함연산문 기본형태
// // score >= 60 ? console.log("합격") :  console.log("불합격") 
// // 90점이상A등급 
// // 80점이상B등급 
// // 70점이상이면C등급 
// // 70점미만D등급
// // const score = 87;
// // if (score >=90) {
// //     console.log("A등급");
// // }else if (score >=80) {
// //     console.log("B등급");
// // }else if (score >=70) {
// //     console.log("C등급");
// // }else {
// //     console.log("D등급");
// // }

// // 마트에 아보카도가 있는지 체크(조건문)
// // 아보카드가 있으면(true) 우유6개 사기
// // 아보카도가 없으면(false) 우유1개 사기
// // const mart =['🥑', '🥛', '🍕']   //컨트롤+커맨드+스페이스바 = 이모티콘
// // const isAvocado = mart.some((item) => item === "🥛" ) //some은 boolean타입을 리턴한다.
// // console.log(" ~ isAvocado:", isAvocado);

// // if(isAvocado === true) {
// //     //아보카도가 있는 경우
// //     console.log('🥛 🥛 🥛 🥛 🥛 🥛')
// // }else {
// //     // 아보카도가 없는 경우
// //     console.log('🥛')
// // } //비교연산자는 boolean 데이터타입 반환

// // isAvocado ? console.log('🥛 🥛 🥛 🥛 🥛 🥛') : console.log('🥛')
// // console.log(isAvocado ? '🥛 🥛 🥛 🥛 🥛 🥛' : '🥛')



// // const input = '';

// // // if (!input) { //false
// // //     console.log('false');
// // // }


// // //삼항연산자
// // input ? console.log('true') : console.log("false");
// //  //조건문 ? console.log()


// // [] //배열 시작하는 명령문
// const bootcampstudents = [
//     '김원명', '박성민', '김현호', '주영신', '강지영', '김영혜', '조재원', '김태욱',
//     '정세헌', '장현재', '김완재', '박준혁', '김은호']

//     const studentlen = bootcampstudents.length;
//     console.log("🚀 ~ studentlen:", studentlen)
// console.log("🚀 ~ bootcampstudents:", bootcampstudents)
// console.log('박준혁!!!', bootcampstudents[2])

// const username = '김현호';  //객체가 없을때 
// const useragr = '91';
// const isusermale =true;
// const usermbti = 'B'

// const user = {             //객체를 활용할때
//     name : '김현호',
//     age : 91,
//     ismale : true,
//     mbti : 'b'
// } //객체 타입
// console.log("🚀 ~ user:", user)

// user.mbti
// console.log("🚀 ~ user.mbti:", user.mbti)


// const categorylist = [    //배열타입 
//     {  //객체
//         id: '1',
//         name: '선물관',
//         subcategorylist: [   //배열
//             {    //객체
//             id: '1-1',
//             name: '선착순',
//             },
//             {
//             id: '1-2',
//             name: '선물',
//             },
//             {
//             id: '1-3',
//             name: '인기',
//             },
//             {
//             id: '1-4',
//             name: '렌탈',
//             }    
//         ]
//     },
//     {
//         id: '2',
//         name: '식품',
//         subcategorylist: [   //배열
//             {    //객체
//             id: '2-1',
//             name: '선착순2',
//             },
//             {
//             id: '2-2',
//             name: '선물2',
//             },
//             {
//             id: '2-3',
//             name: '인기2',
//             },
//             {
//             id: '2-4',
//             name: '렌탈2',
//             }    
//         ]
//     },
//     {
//         id: '3',
//         name: '효도가전',
//         subcategorylist: [   //배열
//             {    //객체
//             id: '3-1',
//             name: '선착순3',
//             },
//             {
//             id: '3-2',
//             name: '선물3',
//             },
//             {
//             id: '3-3',
//             name: '인기3',
//             },
//             {
//             id: '3-4',
//             name: '렌탈3',
//             }    
//         ]
//     },
//     {
//         id: '4',
//         name: '럭셔리',
//         subcategorylist: [   //배열
//             {    //객체
//             id: '4-1',
//             name: '선착순4',
//             },
//             {
//             id: '4-2',
//             name: '선물4',
//             },
//             {
//             id: '4-3',
//             name: '인기4',
//             },
//             {
//             id: '4-4',
//             name: '렌탈4',
//             }    
//         ]
//     },
// ];

// console.log("🚀 ~ categorylist:", categorylist)

// console.log('선물관을 뽑아오기 위함', categorylist[0].name)
// console.log('선물관을 뽑아오기 위함', categorylist[1].subcategorylist[0].name)


const age = 20;
let message;

if (age >= 18) {
  message = "성인입니다";
} else {
  message = "미성년자입니다";
}

// 여기에 삼항 연산자를 사용하여 다시 작성하세요.

const age =20
const message = age >=18 ? '성년입니다' : '미성년입니다'
console.log("🚀 ~ message:", message)

const compareNumbers = (a, b) => {
    if (a > b) {
      return "a is greater";
    } else if (b > a) {
      return "b is greater";
    }
  };
  
  console.log(compareNumbers(5, 5)); 
  // 예상 결과값: a보다 b가 크고 b보다 a가크다? 식이이상함..
//문제를 낸 개발자가 의도를 가지고 답을 없게 정한거면 null
//문제를 낸 개발자가 의도와 다르게 값이 없으면 undefined

let x;
console.log(typeof x); // 예상 결과값: undefined를 변수로 지정했지만 타입을 지정하지않음

x = 5;
console.log(typeof x); // 예상 결과값: numner x를 숫자5로 지정해서 

x = "Hello";
console.log(typeof x); // 예상 결과값: string x를 문자열 hello로 자정해서


const mission = [   
    {
        id: '1',
        name: "'최다' 인플루언서수",
        number: '1,158,061+'
    },
    {
        id: '2',
        name: "'최다' 캠페인 진행",
        number: '942,737+'
    },
    {
        id: '3',
        name: "'최다'리뷰생성 ",
        number: '8,288,434+'
    },
];
console.log("🚀 ~ mission:", mission)



















