let urlParams = new URL(location.href).searchParams;
let no = urlParams.get('no'); // 클릭된 게시물 번호
console.log(no);

let repairList = [];

let memberList = []; console.log(memberList);

_inquiryPrint();

function _inquiryPrint() {
    console.log('_inquiryPrint()');
    // *
    repairList = JSON.parse(localStorage.getItem('repairList'));
    if (repairList == null) { repairList = []; } console.log(repairList);

    memberList = JSON.parse(localStorage.getItem('memberList'));
    if (memberList == null) { memberList = []; } console.log(memberList);

    // 1. 어디에
    let repairBox = document.querySelector('#repairBox');
    // 2. 무엇을
    let html = ``; console.log(html);

    let findIndex = -1;
    let findId = 0;

    for (let i = 0; i < repairList.length; i++) {
        if (no == repairList[i].repairNum) { findIndex = i; break; }
    }
    console.log(findIndex);

    for (let i = 0; i < memberList.length; i++) {
        if (repairList[findIndex].memberId == memberList[i].memberId) { findId = i; break; }
    }

    console.log(findId);

    html += `
            <div class="contentBox">
                        <p>성별</p>
                        <div>${memberList[findId].gender}</div>
                    </div>
                    <div class="contentBox">
                        <p>이름</p>
                        <div>${memberList[findId].name}</div>
                    </div>
                    <div class="contentBox">
                        <p>이메일</p>
                        <div>${memberList[findId].email}</div>
                    </div>
                    <div class="contentBox">
                        <p>모델명</p>
                        <div>${repairList[findIndex].productName}</div>
                    </div>
                    <div class="contentBox">
                        <p>예약 내용</p>
                        <div>${repairList[findIndex].수리내역}</div>
                    </div>
                    <div class="contentBox">
                        <p>접수일</p>
                        <div>${repairList[findIndex].date}</div>
                    </div>
            
            `;

    // 3. 출력
    repairBox.innerHTML = html;
}
function _move() {
    location.href = "../x-admin/inquiry-mngm.html";
}