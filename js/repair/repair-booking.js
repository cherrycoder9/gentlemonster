let 회원목록 = [];

console.log(회원목록);


function 등록() {
    console.log('등록()');

    localStorage.setItem('예약조회', JSON.stringify(회원목록));//가져오기

    let firstName = document.querySelector('#firstName').value;
    let secondName = document.querySelector('#secondName').value;
    let mail = document.querySelector('#mail').value;

    console.log(firstName);

    document.querySelector('#firstName').value = '';
    document.querySelector('#secondName').value = '';
    document.querySelector('#mail').value = '';

    let 회원번호 = 회원목록.length != 0 ? 회원목록[회원목록.length - 1].회원번호 + 1 : 1;
    let 회원 = { 회원번호: 회원번호, 성: firstName, 이름: secondName, 메일: mail };

    console.log(회원);

    회원목록.push(회원);
    alert('제품등록 성공');

    localStorage.setItem('예약조회', JSON.stringify(회원목록)); //저장하기

    console.log(회원목록);

    location.href = "repair_guide.html";

}



