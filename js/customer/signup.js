if (sessionStorage.getItem('loginMemberId')) {
    alert('이미 로그인되어 있습니다.');
    window.location.href = '../../index.html';
}

if (memberList == '') {
    alert('admin@gm.com 으로 가입하면 회원정보에서 관리자페이지에 접근할 수 있습니다.');
}

function handleSignupClick() {
    console.log(`handleSignupClick() 함수 진입`);

    // 입력값 유효성 검사 
    if (validateLoginForm()) {
        // 유효성 검사를 통과하면 
        console.log(`유효성 검사 통과함`);
        // 이미 존재하는 이메일인지 확인
        if (isExistingEmail()) {
            // 중복 이메일이 없으면 멤버 등록함
            registerMember();
            // 등록 이후 안내창 띄우고 회원정보 페이지로 이동
            alert('회원가입을 축하합니다! 다시 로그인해주세요.');
            window.location.href = 'login.html';
        } else {
            alert(`존재하는 이메일입니다.`);
            return;
        }
    } else {
        console.log(`유효성 검사 통과 못함`);
        return;
    }
    console.log(`handleSignupClick() 함수 종료`);
}

function validateLoginForm() {
    // 이메일 정규표현식
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // 비밀번호 정규표현식
    // 최소 8자, 최소 1개의 대문자, 최소 1개의 특수문자, 최소 1개의 숫자 포함
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}$/;

    // 폼 입력값 저장
    const signupEmail = document.querySelector('#signupEmail').value;
    const signupEmailCheck = document.querySelector('#signupEmailCheck').value;
    const signupPassword = document.querySelector('#signupPassword').value;
    const signupPasswordCheck = document.querySelector('#signupPasswordCheck').value;

    // 공백 제출시 
    if (signupEmail == '' || signupPassword == '') {
        alert('모든 항목을 입력해주세요.');
        return false;
    }

    // 이메일 요건에 맞는지 체크
    if (!emailRegex.test(signupEmail)) {
        alert('유효한 이메일 주소를 입력해주세요.');
        return false;
    }

    // 비밀번호 요건에 맞는지 체크 
    if (!passwordRegex.test(signupPassword)) {
        alert('비밀번호는 최소 8자 이상, 최소 1개의 대문자, 최소 1개의 특수문자, 최소 1개의 숫자를 포함해야 합니다.');
        return false;
    }

    // 이메일과 이메일 확인란이 같은지
    if (signupEmail != signupEmailCheck) {
        alert('이메일과 이메일 확인란을 같게 해주세요.');
        return false;
    }
    // 비밀번호와 비밀번호 확인란이 같은지 
    if (signupPassword != signupPasswordCheck) {
        alert('비밀번호와 비밀번호 확인란을 같게 해주세요.');
        return false;
    }

    return true;
}
console.log(`!memberList`, !memberList);
function isExistingEmail() {
    const signupEmail = document.querySelector('#signupEmail').value;
    if (!memberList) {
        // 멤버리스트에 등록된 멤버가 하나도 없으면 계정 생성 가능함 
        return true;
    } else {
        // 멤버리스트에 등록된 멤버가 있더라도 중복 이메일이 없으면 가능함
        for (let i = 0; i < memberList.length; i++) {
            if (signupEmail == memberList[i].email) {
                // 같은 이메일이 있으면 false 리턴
                return false;
            }
        }
        // 반복문 종료 = 같은 이메일이 없다는 의미
        return true;
    }
}

function registerMember() {
    const signupEmail = document.querySelector('#signupEmail').value;
    const signupPassword = document.querySelector('#signupPassword').value;
    const signupGender = document.querySelector('#signupGender').value;
    const signupName = document.querySelector('#signupName').value;
    const isAdmin = signupEmail == 'admin@gm.com' ? true : false;
    let newMemberId = 1;
    if (memberList.length > 0) {
        newMemberId = memberList[memberList.length - 1].memberId + 1;
    }
    const newMember = {
        memberId: newMemberId,
        email: signupEmail,
        password: signupPassword,
        gender: signupGender,
        name: signupName,
        isAdmin: isAdmin,
    };
    setMemberList(newMember);
}