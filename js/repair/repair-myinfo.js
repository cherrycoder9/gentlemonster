
let 회원 = { 회원번호: 회원번호, 성: firstName, 이름: secondName, 메일: mail };
let 회원목록 = [];


function 조회() {
    console.log('조회()');
    let firstName = document.querySelector('#firstName').value;
    let secondName = document.querySelector('#secondName').value;
    let mail = document.querySelector('#mail').value;

    localStorage.setItem('예약조회', JSON.stringify(회원목록));//가져오기

    // 2. 기존 회원 목록에 있는 회원정보와 입력받은 데이터 일치 여부
    for (let i = 0; i < 회원목록.length; i++) {
        let member = 회원목록[i];
        if (member.firstName == firstName && member.secondName == secondName &&
            member.mail == mail) {
            alert('조회 확인');

            localStorage.setItem('예약조회', JSON.stringify(회원목록)); //저장하기
            // JS에서 페이지전환 해주는 속성
            location.href = "repair_status.html";

            return;
        }
    }
    alert('일치하는 회원이 없습니다.');
}

