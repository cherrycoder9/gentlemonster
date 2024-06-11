
// 1. 출력함수 : js가 열렸을때

function 조회() {
    // * 
    회원목록 = JSON.parse(localStorage.getItem('예약조회'));

    if (회원목록 == null) { 회원목록 = []; }

    // 1. 어디에
    let firstName = document.querySelector('#firstName').value;
    let result = document.querySelector('#result');
    console.log(firstName);
    // 2. 무엇을
    let html = '';
    for (let i = 0; i < 회원목록.length; i++) {
        if (firstName == 회원목록[i].성) {
            console.log(html);
            html += ` <div> 
                    ${회원목록[i].성}
                    ${회원목록[i].이름}
                    ${회원목록[i].메일}
                 </div>`;
        }
    }

    // 3. 출력/대입
    result.innerHTML = html;
};