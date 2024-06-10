if (sessionStorage.getItem('loginMemberId')) {
    alert('이미 로그인되어 있습니다.');
    window.location.href = '../../index.html';
}

function handleLoginClick() {
    console.log(`handleLoginClick() 함수 진입`);

    // 입력값 유효성 검사 
    if (validateLoginForm()) {
        // 유효성 검사를 통과하면 
        console.log(`유효성 검사 통과함`);
        // 존재 이메일 체크
        if (isExistingMember()) {
            // 이메일이 등록되어 있으면 메인페이지로 이동
            window.location.href = '../../index.html';
        } else {
            return;
        }

    } else {
        console.log(`유효성 검사 통과 못함`);
        return;
    }

    console.log(`handleLoginClick() 함수 종료`);
}

function isExistingMember() {
    // 로그인할때 존재하는 회원인지 체크 
    let loginEmail = document.querySelector('#loginEmail').value;
    for (let i = 0; i < memberList.length; i++) {
        if (memberList[i].email == loginEmail) {
            // 이메일이 등록되어 있으면 세션페이지에 i인덱스랑 memberId 등록
            setSessionInfo(memberList[i].memberId, i);
            return true;
        }
    }
    alert('입력하신 이메일이 존재하지 않습니다.');
    return false;
}

function validateLoginForm() {
    // 이메일 정규표현식
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // 비밀번호 정규표현식
    // 최소 8자, 최소 1개의 대문자, 최소 1개의 특수문자, 최소 1개의 숫자 포함
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}$/;

    // 폼 입력값 저장
    const memberEmail = document.querySelector('#loginEmail').value;
    console.log(memberEmail);
    const memberPassword = document.querySelector('#loginPassword').value;
    console.log(memberPassword);

    // 공백 제출시 
    if (memberEmail == '' || memberPassword == '') {
        alert('모든 항목을 입력해주세요.');
        return false;
    }

    // 이메일 요건에 맞는지 체크
    if (!emailRegex.test(memberEmail)) {
        alert('유효한 이메일 주소를 입력해주세요.');
        return false;
    }

    // 비밀번호 요건에 맞는지 체크 
    if (!passwordRegex.test(memberPassword)) {
        alert('비밀번호는 최소 8자 이상, 최소 1개의 대문자, 최소 1개의 특수문자, 최소 1개의 숫자를 포함해야 합니다.');
        return false;
    }

    return true;
}

function redirectSignUp() {
    window.location.href = 'signup.html';
}