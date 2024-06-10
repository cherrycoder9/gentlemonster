if (!sessionStorage.getItem('loginMemberId')) {
    alert('로그인해주세요.');
    window.location.href = '../../index.html';
}

let isModifyStatus = false;
const [sId, sIndex] = getSessionInfo();
console.log(sId, sIndex);
showMemberInfo();

function showMemberInfo() {
    console.log(`showMemberInfo() 함수 진입`);
    let id = document.querySelector('#memberIdInfo');
    let email = document.querySelector('#emailInfo');
    let name = document.querySelector('#nameInfo');
    let gender = document.querySelector('#genderInfo');

    id.value = `${memberList[sIndex].memberId}`;
    email.value = `${memberList[sIndex].email}`;
    name.value = `${memberList[sIndex].name}`;
    gender.value = `${memberList[sIndex].gender}`;
    console.log(`showMemberInfo() 함수 종료`);
}

function updateProfile() {
    if (isModifyStatus) {
        document.querySelector('#btnUpdateProfile').innerHTML = "수정하기";
        document.querySelector('#btnDeleteAccount').disabled = false;
        document.querySelector('#btnLogout').disabled = false;
        document.querySelector('#emailInfo').disabled = true;
        document.querySelector('#nameInfo').disabled = true;
        memberList[sIndex].email = document.querySelector('#emailInfo').value;
        memberList[sIndex].name = document.querySelector('#nameInfo').value;
        setMemberList();
        alert('회원정보가 수정되었습니다!');

    } else {
        document.querySelector('#btnUpdateProfile').innerHTML = "수정완료";
        document.querySelector('#btnDeleteAccount').disabled = true;
        document.querySelector('#btnLogout').disabled = true;
        document.querySelector('#emailInfo').disabled = false;
        document.querySelector('#nameInfo').disabled = false;
    }

    isModifyStatus = !isModifyStatus;
}

function deleteAccount() {
    console.log(`deleteAccount() 함수 진입`);
    removeMemberList(sIndex);
    window.location.href = '../../index.html';
    console.log(`deleteAccount() 함수 종료`);
}

function logout() {
    console.log(`logout() 함수 진입`);
    removeSessionInfo();
    window.location.href = '../../index.html';
    console.log(`logout() 함수 종료`);
}