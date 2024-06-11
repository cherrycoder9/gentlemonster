let memberList = [];


memberList = JSON.parse(localStorage.getItem('memberList'));
if (memberList == null) { memberList = []; };
console.log(memberList);

let loginMemberId = sessionStorage.getItem('loginMemberId'); console.log(loginMemberId);

print();
function print() {

    let printBox = document.querySelector('#printBox');

    let html = '';

    let name = '';

    for (let a = 0; a < memberList.length; a++) {
        if (loginMemberId == memberList[a].memberId) {
            name = memberList[a].name;
            email = memberList[a].email;
        }

    }
    html += ` <li>이름${name}</li>
                <li>이메일${email} </li>`;


    printBox.innerHTML = html;
}