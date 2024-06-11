let repairList = [];
let memberList = [];

memberList = JSON.parse(localStorage.getItem('memberList'));
if (memberList == null) { memberList = []; };


repairList = JSON.parse(localStorage.getItem('repairList'));
if (repairList == null) { repairList = []; }


function 등록() {
    console.log('등록()');

    let name = document.querySelector('#name').value;
    let mail = document.querySelector('#email').value;
    let textarea = document.querySelector('#msg').value;

    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#msg').value = '';

    console.log(repairList);

    let repairNum = repairList.length != 0 ? repairList[repairList.length - 1].repairNum + 1 : 1;
    let 회원 = {
        repairNum: repairNum, 이름:
            name, 메일: mail, 수리내역: textarea
    };

    console.log(회원);

    repairList.push(회원);

    alert('제품등록 성공');

    localStorage.setItem('repairList', JSON.stringify(repairList)); //저장하기


    location.href = "repair_guide.html";

}



