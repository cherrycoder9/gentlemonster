let urlParams = new URL( location.href ).searchParams;
let no = urlParams.get('no'); // 클릭된 게시물 번호
console.log(no);

let inquiryList = [];

let memberList = [];            console.log(memberList);

_inquiryPrint();

function _inquiryPrint(){   console.log('_inquiryPrint()');
    // *
    inquiryList = JSON.parse(localStorage.getItem('inquiryList'));
    if( inquiryList == null ){ inquiryList = []; }        console.log( inquiryList);

    memberList = JSON.parse(localStorage.getItem('memberList'));   
    if( memberList == null){ memberList = [];}                 console.log( memberList);

    // 1. 어디에
    let inquiryBox = document.querySelector('#inquiryBox');
    // 2. 무엇을
    let html = ``;                console.log(html);

    let findIndex = -1;
    let findId = 0;

    for( let i = 0 ; i < inquiryList.length ; i++ ){
        if( no == inquiryList[i].inquiryNum ){ findIndex = i; break; }
    }
    console.log(findIndex);

    for( let i = 0 ; i < memberList.length ; i++ ){
        if( inquiryList[findIndex].memberId == memberList[i].memberId ){ findId = i; break; }
    }
  
    console.log(findId);

    html+=`
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
                        <p>주제</p>
                        <div>${inquiryList[findIndex].subject}</div>
                    </div>
                    <div class="contentBox">
                        <p>제목</p>
                        <div>${inquiryList[findIndex].title}</div>
                    </div>
                    <div class="contentBox">
                        <p>내용</p>
                        <div>${inquiryList[findIndex].msg}</div>
                    </div>
                    <div class="contentBox">
                        <p>작성일</p>
                        <div>${inquiryList[findIndex].date}</div>
                    </div>
            
            `;

    // 3. 출력
    inquiryBox.innerHTML = html;
}
function _move(){
    location.href="../x-admin/inquiry-mngm.html"
}