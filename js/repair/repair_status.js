
// 1. 출력함수 : js가 열렸을때
확인();

function 확인() {
    console.log('조회()');
    // * 
    memberList = JSON.parse(localStorage.getItem('예약조회'));

    if (memberList == null) { memberList = []; }

    // 1. 어디에
    let result = document.querySelector('#result');
    console.log(firstName);
    // 2. 무엇을
    let html = '';
    for (let i = 0; i < memberList.length; i++) {
        if (firstName == memberList[i].성) {
            console.log(html);
            html += ` <div> 
                    ${memberList[i].성}
                    ${memberList[i].이름}
                    ${memberList[i].메일}
                 </div>`;
        }
    }
    // 3. 출력/대입
    result.innerHTML = html;
};


