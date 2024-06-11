let memberList = [];


memberList = JSON.parse(localStorage.getItem('memberList'));
if (memberList == null) { memberList = []; };
console.log(memberList);

let loginMemberId = sessionStorage.getItem('loginMemberId'); console.log(loginMemberId);

print();
function print() {

    let printBox = document.querySelector('#printBox');

    let html = '';

    let name = ''; let email = '';

    for (let a = 0; a < memberList.length; a++) {
        if (loginMemberId == memberList[a].memberId) {
            name = memberList[a].name;
            email = memberList[a].email;
        }
    }
    html += ` <li><div>이름ㅤ</div>${name}</li>
                <li><div>이메일</div>${email} </li>`;


    printBox.innerHTML = html;
}