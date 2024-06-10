let inquiryList = [];

let loginMemberId = sessionStorage.getItem('loginMemberId');  console.log(loginMemberId);
// 2. 없으면
if( loginMemberId == null ){
alert('로그인 후 글쓰기가 가능합니다.');
location.href="../x-customer/login.html";
}

let memberList = [];
                                  
function _submit(){ console.log('_submit()');

    memberList = JSON.parse(localStorage.getItem('memberList'));
    if(memberList==null){memberList=[]};

    let inquiryNum = inquiryList[inquiryList.length-1].inquiryNum+1;    console.log(inquiryNum);
    let subject = document.querySelector('#subject').value;             console.log(subject);
    let title = document.querySelector('#title').value;             console.log(title);
    let msg = document.querySelector('#msg').value;             console.log(msg);
    let date = new Date();

    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let currentDate = date.getDate();

    date = `${year}-${자릿수변환(month)}-${자릿수변환(currentDate)}`;   console.log(date);


    let memberId = 0;

    for(let i = 0 ; i < memberList.length ; i++){
        if(loginMemberId == memberList[i].memberId){
            memberId = loginMemberId;
            break;
        }
    }
    console.log(memberId);

    inquiry = {
        inquiryNum : inquiryNum , 
        subject : subject , 
        title : title , 
        msg : msg , 
        date : date , 
        memberId : memberId
    };

    // 공백 체크 

    let sex = document.querySelector('#sex').value;     console.log(sex);
    let name = document.querySelector('#name').value;     console.log(name);
    let email = document.querySelector('#email').value;     console.log(email);

    if(sex == ''){
        alert('성별을 입력해주세요.')
        return;
    }
    if(name == ''){
        alert('이름을 입력해주세요.')
        return;
    }
    if(email == ''){
        alert('이메일을 입력해주세요.')
        return;
    }
    if(subject == '' || title == '' || msg == ''){
        alert('내용을 입력해주세요.')
        return;
    }

    let checkBoxes = document.querySelectorAll('.checkBoxes');

    let checking = true;

    for(let i = 0 ; i < checkBoxes.length ; i++){
        if(checkBoxes[i].checked){
            checking = true;
        }else{
            checking = false;
        }
    }

    if(checking == false){
        alert('위 박스 모두 체크해주세요.');
        return;
    }

    inquiryList.push(inquiry);                  console.log(inquiryList);

    localStorage.setItem('inquiryList' , JSON.stringify(inquiryList));
    
    alert('이메일문의 등록 완료');

    // location.href="../index.html";
}

function 자릿수변환(변환할값){  
    // 만약에 월/일/시/분 (매개변수)가 10보다 작으면 앞에 '0' 연결하기
    if(변환할값 < 10){ 변환할값 = '0'+변환할값 } 
    // 반환
    return 변환할값;
}