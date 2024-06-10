

let 회원목록 = [];


function 조회() {
    console.log('조회()');
    let firstName = document.querySelector('#firstName').value;
    let secondName = document.querySelector('#secondName').value;
    let mail = document.querySelector('#mail').value;

    회원목록 = JSON.parse(localStorage.getItem('예약조회'));
    console.log(회원목록);

    // 2. 기존 회원 목록에 있는 회원정보와 입력받은 데이터 일치 여부
    console.log(firstName);
    console.log(secondName);
    console.log(mail);
    for (let i = 0; i < 회원목록.length; i++) {
        let member = 회원목록[i];
        if (member.성 == firstName && member.이름 == secondName &&
            member.메일 == mail) {

            alert('조회 확인');

            console.log(member.firstName, firstName);
            console.log(member.secondName, secondName);
            console.log(member.mail, mail);
            localStorage.setItem('예약조회', JSON.stringify(회원목록)); //저장하기
            // JS에서 페이지전환 해주는 속성
            location.href = "repair_status.html";

            return;
        }
    }
    alert('일치하는 회원이 없습니다.');
}

