// const age = 20;
// let message;

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