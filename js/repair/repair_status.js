let memberList = [];
let repairList = [];

memberList = JSON.parse(localStorage.getItem('memberList'));
if (memberList == null) { memberList = []; };
console.log(memberList);

repairList = JSON.parse(localStorage.getItem('repairList'));//가져오기

print();
function print() {

    let result = document.querySelector('#result');

    let html = '';

    let 접수번호 = '';
    let 수리내역 = '';

    for (let a = 0; a < memberList.length; a++) {
        if (repairLis[a].메일 == memberList[a].mail) {
            접수번호 = repairLis[a].접수번호;
            메일 = repairLis[a].메일;
        }

    }
    html += ` <li>번호${접수번호}</li>
                <li>${수리내역}수리 </li>`;


    result.innerHTML = html;
}