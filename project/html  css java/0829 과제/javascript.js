// const numbers = [1, 2, 3, 4, 5];
// const incrementedNumbers = [1, 1, 1, 1, 1]
// for (let i = 0; i < numbers.length; i++) {
//     incrementedNumbers[i] += numbers[i] 
// }
// console.log(incrementedNumbers); // 예상 결과: [2, 3, 4, 5, 6]

// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers.filter(number => number %2 === 0) //나누기 부호 알아갑니당
// // 여기에 코드를 작성하세요.
// console.log(evenNumbers); // 예상 결과: [2, 4, 6]

// 학생들의 정보가 담긴 배열
// const students = [
//     { name: "Alice", age: 22, major: "Computer Science" },
//     { name: "Bob", age: 21, major: "Mathematics" },
//     { name: "Charlie", age: 23, major: "Physics" },
//     { name: "David", age: 20, major: "Chemistry" },
//     { name: "Eva", age: 22, major: "Biology" }
//   ];
  
//   // 1. 전공이 "Physics"인 학생을 찾으세요.
//   const physicsStudent = students.find(student => student.major === "Physics");
//   console.log("전공이 Physics인 학생:", physicsStudent); // 예상 결과: { name: "Charlie", age: 23, major: "Physics" },
  
//   // 2. 이름이 "David"인 학생을 찾으세요.
//   const davidStudent = students.find(student => student.name === "David")
//   console.log("이름이 David인 학생:", davidStudent); // 예상 결과:{ name: "David", age: 20, major: "Chemistry" },
  
//   // const esfptystudent = firestudents.find((student) => student.mbti === 'esfp')
// // console.log("🚀 ~ esfptystudent:", esfptystudent)

const counters0 = document.querySelector('.counters0');
console.log("🚀 ~ counters0:", counters0)
const counters1 = document.querySelector('.counters1');
console.log("🚀 ~ counters1:", counters1)
const counters2 = document.querySelector('.counters2');
console.log("🚀 ~ counters2:", counters2)

let count = 0;
const button1 = () => {
    count += count <10? 1 : 0 
    counters0.innerText=count
}
counters1.addEventListener('click', button1)
const button2 = () => {
    count -= count >0? 1 : 0 
    counters0.innerText=count
    console.log("🚀 ~ botton1 ~ botton1:", button1) 
}
counters2.addEventListener('click', button2)


