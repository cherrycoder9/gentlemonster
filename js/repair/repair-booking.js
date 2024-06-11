let repairList = [];
let memberList = [];

let loginMemberId = sessionStorage.getItem('loginMemberId'); console.log(loginMemberId);

memberList = JSON.parse(localStorage.getItem('memberList'));
if (memberList == null) { memberList = []; };

let memberId;

repairList = JSON.parse(localStorage.getItem('repairList'));
if (repairList == null) { repairList = []; }


function 등록() {
    console.log('등록()');

    let name = document.querySelector('#name').value;
    let mail = document.querySelector('#email').value;
    let productName = document.querySelector('#productName').value;
    let state = 'X';
    let msg = document.querySelector('#msg').value;

    console.log(repairList);

    let date = new Date();

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let currentDate = date.getDate();

    let memberIndex;

    for (let i = 0; i < memberList.length; i++) {
        if (loginMemberId == memberList[i].memberId) {
            memberId = loginMemberId;
            memberIndex = i;
            break;
        }
    }

    date = `${year}-${자릿수변환(month)}-${자릿수변환(currentDate)}`; console.log(date);

    let repairNum = repairList.length != 0 ? repairList[repairList.length - 1].repairNum + 1 : 1;

    let 회원 = {
        repairNum: repairNum,
        productName: productName,
        이름: name,
        메일: mail,
        수리내역: msg,
        date: date,
        state: state,
        memberId: memberId
    };

    if (productName == '') {
        alert('모델명을 입력해주세요.');
        return;
    }
    console.log(회원);

    repairList.push(회원);

    alert('예약 성공');

    localStorage.setItem('repairList', JSON.stringify(repairList)); //저장하기


    location.href = "repair_guide.html";

}
function 자릿수변환(변환할값) {
    // 만약에 월/일/시/분 (매개변수)가 10보다 작으면 앞에 '0' 연결하기
    if (변환할값 < 10) { 변환할값 = '0' + 변환할값; }
    // 반환
    return 변환할값;
}



