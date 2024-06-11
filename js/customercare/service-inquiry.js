let inquiryList = [];

let loginMemberId = sessionStorage.getItem('loginMemberId'); console.log(loginMemberId);

// 2. 없으면
if (loginMemberId == null) {
    alert('로그인 후 글쓰기가 가능합니다.');
    location.href = "../x-customer/login.html";
}

let memberList = [];

function _submit() {
    console.log('_submit()');

    memberList = JSON.parse(localStorage.getItem('memberList'));
    if (memberList == null) { memberList = []; };

    inquiryList = JSON.parse(localStorage.getItem('inquiryList'));
    if (inquiryList == null) { inquiryList = []; };

    let inquiryNum = 0;
    inquiryNum = inquiryList.length == 0 ? 1 : inquiryList[inquiryList.length - 1].inquiryNum + 1;
    let subject = document.querySelector('#subject').value; console.log(subject);
    let title = document.querySelector('#title').value; console.log(title);
    let msg = document.querySelector('#msg').value; console.log(msg);
    let date = new Date();

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let currentDate = date.getDate();

    date = `${year}-${자릿수변환(month)}-${자릿수변환(currentDate)}`; console.log(date);


    let memberId = 0;
    let memberIndex = 0;

    for (let i = 0; i < memberList.length; i++) {
        if (loginMemberId == memberList[i].memberId) {
            memberId = loginMemberId;
            memberIndex = i;
            break;
        }
    }
    console.log(memberId);

    inquiry = {
        inquiryNum: inquiryNum,
        subject: subject,
        title: title,
        msg: msg,
        date: date,
        memberId: memberId,
        state: 'X'
    };

    // 공백 체크 

    let gender = document.querySelector('#gender').value; console.log(gender);
    let name = document.querySelector('#name').value; console.log(name);
    let email = document.querySelector('#email').value; console.log(email);

    if (gender == '') {
        alert('성별을 입력해주세요.');
        return;
    }
    if (name == '') {
        alert('이름을 입력해주세요.');
        return;
    }
    if (email == '') {
        alert('이메일을 입력해주세요.');
        return;
    }
    if (subject == '' || title == '' || msg == '') {
        alert('내용을 입력해주세요.');
        return;
    }

    let checkBoxes = document.querySelectorAll('.checkBoxes');

    let checking = true;

    for (let i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            checking = true;
        } else {
            checking = false;
        }
    }

    if (checking == false) {
        alert('위 박스 모두 체크해주세요.');
        return;
    }
    if (email != memberList[memberIndex].email) {
        alert('입력하신 이메일이 다릅니다.');
        return;
    }
    inquiryList.push(inquiry); console.log(inquiryList);

    localStorage.setItem('inquiryList', JSON.stringify(inquiryList));

    alert('이메일문의 등록 완료');

    location.href = "../index.html";
}

function 자릿수변환(변환할값) {
    // 만약에 월/일/시/분 (매개변수)가 10보다 작으면 앞에 '0' 연결하기
    if (변환할값 < 10) { 변환할값 = '0' + 변환할값; }
    // 반환
    return 변환할값;
}
function selectAll(selectAll) {
    const checkboxes
        = document.getElementsByName("cBox");

    checkboxes.forEach((checkbox) => {
        checkbox.checked = selectAll.checked;
    });
}