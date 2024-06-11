let inquiryList = [];

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

_inquiry();
function _inquiry() {
    console.log('_inquiry()');

    inquiryList = JSON.parse(localStorage.getItem('inquiryList'));
    if (inquiryList == null) { inquiryList = []; };
    console.log(inquiryList);

    // 어디에
    let inquiryBox = document.querySelector('#inquiryBox');

    // 무엇을
    let html = ``; console.log(html);

    let findId = -1; console.log(findId);
    let findIq = -1;

    for (let i = 0; i < inquiryList.length; i++) {
        for (let j = 0; j < memberList.length; j++) {
            if (inquiryList[i].memberId == memberList[j].memberId) {
                findId = j;
                findIq = i;
            }
        }
        html += `
                    <tr>
                        <td> ${inquiryList[findIq].inquiryNum} </td>
                        <td> ${memberList[findId].gender} </td>
                        <td> ${memberList[findId].name} </td>
                        <td> ${memberList[findId].email} </td>
                        <td> ${inquiryList[findIq].subject} </td>
                        <td><a href="inquiry-view.html?no=${inquiryList[findIq].inquiryNum}"> ${inquiryList[findIq].title} </a> </td>
                        <td> ${inquiryList[findIq].date} </td>
                        <td>${inquiryList[findIq].state}</td>
                        <td><button onclick="_change(${findIq})" type=button""> 완료</button></td>
                        <td><button onclick="_delete(${findIq})" type=button""> 삭제</button></td>
                    </tr>
        `;
    }

    console.log(findId);
    console.log(findIq);

    // 출력
    inquiryBox.innerHTML = html;
}
function _change(findIq) {
    console.log(findIq);
    if (inquiryList[findIq].state == 'X') {
        inquiryList[findIq].state = 'O';
    } else {
        inquiryList[findIq].state = 'X';
    } console.log(inquiryList);
    // 새로운 데이터를 배열에 저장했으면 localStorage 다시 저장한다.
    localStorage.setItem('inquiryList', JSON.stringify(inquiryList));

    _inquiry();
}
function _delete(findIq) {
    console.log('_delete()');
    inquiryList.splice(findIq, 1);

    // 새로운 데이터를 배열에 저장했으면 localStorage 다시 저장한다.
    localStorage.setItem('inquiryList', JSON.stringify(inquiryList));

    _inquiry();
}
