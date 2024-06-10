if (!sessionStorage.getItem('loginMemberId')) {
    alert('로그인해주세요.');
    window.location.href = '../../index.html';
}

let isModifyStatus = false;
const [sId, sIndex] = getSessionInfo();
console.log(sId, sIndex);

if (memberList[sIndex].isAdmin) {
    document.querySelector('#btnMoveAdminPage').disabled = false;
}

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
    let newEmail = document.querySelector('#emailInfo').value;
    let newName = document.querySelector('#nameInfo').value;
    console.log(`newEmail`, newEmail);
    console.log(`memberList[sIndex].email`, memberList[sIndex].email);
    if (isModifyStatus) {
        document.querySelector('#btnUpdateProfile').innerHTML = "수정하기";
        document.querySelector('#btnDeleteAccount').disabled = false;
        document.querySelector('#btnLogout').disabled = false;
        document.querySelector('#emailInfo').disabled = true;
        document.querySelector('#nameInfo').disabled = true;
        for (let i = 0; i < memberList.length; i++) {
            if (memberList[i].email == newEmail) {
                alert('사용중인 이메일 주소가 있습니다.');
                console.log(memberList[i], newEmail);
                isModifyStatus = !isModifyStatus;
                return;
            }
        }
        memberList[sIndex].email = newEmail;
        memberList[sIndex].name = newName;
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

function moveAdminPage() {
    if (memberList[sIndex].isAdmin) {
        window.location.href = '../../x-admin/user-mngm.html';
    } else {
        alert('관리자만 사용할 수 있는 메뉴입니다.');
    }
}