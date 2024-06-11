let memberList = [];


memberList = JSON.parse(localStorage.getItem('memberList'));
if (memberList == null) { memberList = []; };
console.log(memberList);

let loginMemberId = sessionStorage.getItem('loginMemberId'); console.log(loginMemberId);

_checkAdmin();

function _checkAdmin() {
    console.log('_checkAdmin()');

    let checkAdmin = false;

    console.log(loginMemberId);

    for (let a = 0; a < memberList.length; a++) {
        if (loginMemberId == memberList[a].memberId) {
            checkAdmin = memberList[a].isAdmin;
        }
    }
    console.log(checkAdmin);

    if (checkAdmin == false) {
        alert('관리자만 접근 가능합니다.');
        location.href = '../index.html';
    }
}

let repairList = [];

_repair();

function _repair() {
    console.log('_repair()');

    repairList = JSON.parse(localStorage.getItem('repairList'));
    if (repairList == null) { repairList = []; };
    console.log(repairList);

    // 어디에
    let repairBox = document.querySelector('#repairBox');

    // 무엇을
    let html = ``; console.log(html);

    let findId = -1; console.log(findId);
    let findRe = -1;

    for (let i = 0; i < repairList.length; i++) {
        for (let j = 0; j < memberList.length; j++) {
            if (repairList[i].memberId == memberList[j].memberId) {
                findId = j;
                findRe = i;
            }
        }
        html += `
                    <tr>
                        <td> ${repairList[findRe].repairNum} </td>
                        <td> ${memberList[findId].gender} </td>
                        <td> ${memberList[findId].name} </td>
                        <td> ${memberList[findId].email} </td>
                        <td><a href="repair-view.html?no=${repairList[findRe].repairNum}"> ${repairList[findRe].productName} </a> </td>
                        <td> ${repairList[findRe].date} </td>
                        <td>${repairList[findRe].state}</td>
                        <td><button onclick="_change(${findRe})" type=button""> 완료</button></td>
                        <td><button onclick="_delete(${findRe})" type=button""> 삭제</button></td>
                    </tr>
        `;
    }

    // 출력
    repairBox.innerHTML = html;
}
function _change(findRe) {
    console.log(findRe);
    if (repairList[findRe].state == 'X') {
        repairList[findRe].state = 'O';
    } else {
        repairList[findRe].state = 'X';
    } console.log(repairList);
    // 새로운 데이터를 배열에 저장했으면 localStorage 다시 저장한다.
    localStorage.setItem('repairList', JSON.stringify(repairList));

    _repair();
}
function _delete(findRe) {
    console.log('_delete()');
    repairList.splice(findRe, 1);

    // 새로운 데이터를 배열에 저장했으면 localStorage 다시 저장한다.
    localStorage.setItem('repairList', JSON.stringify(repairList));

    _repair();
}