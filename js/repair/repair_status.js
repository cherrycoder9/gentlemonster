let memberList = [];
let repairList = []; console.log(repairList);


memberList = JSON.parse(localStorage.getItem('memberList'));
if (memberList == null) { memberList = []; };
console.log(memberList);

repairList = JSON.parse(localStorage.getItem('repairList'));//가져오기
if (repairList == null) { repairList = []; };
console.log(repairList);

let loginMemberId = sessionStorage.getItem('loginMemberId'); console.log(loginMemberId);

조회();

function 조회() {
    console.log('조회()');

    let result = document.querySelector('#result');

    let html = '';

    let findId = 2;

    for (let a = 0; a < memberList.length; a++) {
        if (loginMemberId == memberList[a].memberId) {
            findId = a;
        }
    }
    let findNum = 4;

    for (let i = 0; i < repairList.length; i++) {
        if (memberList[findId].email == repairList[i].메일) {
            findNum = i;
        }
    }

    if (memberList[findId].email == repairList[findNum].메일) {
        html += ` <li>${repairList[findNum].repairNum}</li>
                <li>${repairList[findNum].수리내역}</li>
                <li>${repairList[findNum].date}</li>`;
    }


    result.innerHTML = html;
}