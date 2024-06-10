// 회원 가입시 등록되는 객체 예시
// 세원 파트
console.log(`js/object/member-list.js 파일 진입`);
let memberList = [];
getMemberList();

function getMemberList() {
    console.log(`getMemberList() 함수 진입`);
    if (localStorage.getItem('memberList')) {
        memberList = JSON.parse(localStorage.getItem('memberList'));
        console.log(`memberList`, memberList);
    }
    console.log(`getMemberList() 함수 종료`);
}

function removeMemberList(sIndex) {
    memberList.splice(memberList[sIndex], 1);
    removeSessionInfo();
    setMemberList();
}

function setMemberList(newMember) {
    console.log(`setMemberList() 함수 진입`);
    console.log('newMember', newMember);
    if (newMember != null) {
        memberList.push(newMember); // JS 메모리에 추가 
    }
    localStorage.setItem('memberList', JSON.stringify(memberList)); // 로컬 업데이트
    getMemberList(); // JS 메모리 갱신
    console.log(`setMemberList() 함수 종료`);
}

function getSessionInfo() {
    let id = sessionStorage.getItem('loginMemberId');
    let index = sessionStorage.getItem('loginMemberIndex');
    return [id, index];
}

function setSessionInfo(id, index) {
    sessionStorage.setItem('loginMemberId', id);
    sessionStorage.setItem('loginMemberIndex', index);
}

function removeSessionInfo() {
    sessionStorage.removeItem('loginMemberId');
    sessionStorage.removeItem('loginMemberIndex');
}