// 수위치 버튼 off : light모드
// 수위치 버튼 on : dark모드
const htmlEl = document.querySelector('html')
const inputEl = document.querySelector('.hyunho-22')


const changemode = () => {
console.log('changemode');
    if(inputEl.checked) {
        htmlEl.setAttribute('data-bs-theme', 'dark')
        //체크된상태
    } else {
        //체크해제상태
        htmlEl.setAttribute('data-bs-theme', 'light')
    }
};

inputEl.addEventListener('change', changemode)
changemode();