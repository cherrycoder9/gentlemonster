function handleLoginClick() {
    console.log(`handleLoginClick() 함수 진입`);

    // 입력값 유효성 검사 
    if (validateLoginForm()) {

    } else {
        console.log(`유효성 검사 통과 못함`);
        return;
    }







    console.log(`handleLoginClick() 함수 종료`);
}

function validateLoginForm() {
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


    // 비밀번호 요건에 맞는지 체크 
    // 최소 8자 이상
    // 최소 1개의 대문자 사용
    // 최소 1개의 특수문자 사용
    // 최소 1개의 숫자 사용
}