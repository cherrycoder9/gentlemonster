/*
let loginMemberId = sessionStorage.getItem('loginMemberId');  console.log(loginMemberId);
// 2. 없으면
if( loginMemberId != 1 ){
alert('관리자만 볼 수 있는 페이지 입니다.');
location.href="../index.html";
}
*/

let inquiryList = [];       

let memberList = [];        

_inquiry();
function _inquiry(){    console.log('_inquiry()');

    memberList = JSON.parse(localStorage.getItem('memberList'));
    if(memberList==null){memberList=[]};
    console.log(memberList);

    inquiryList = JSON.parse(localStorage.getItem('inquiryList'));
    if(inquiryList==null){inquiryList=[]}; 
    console.log(inquiryList);

    // 어디에
    let inquiryBox = document.querySelector('#inquiryBox');

    // 무엇을
    let html = ``;                  console.log(html);

    let findId = -1;                console.log(findId);

    for( let i = 0 ; i < memberList.length ; i++ ){
        for(let j = 0 ; j < inquiryList.length ; j++ ){
            if( memberList[i].memberId == inquiryList[j].memberId ){
                findId = i; 
                break;
            }
        }
    }       
    console.log(findId);
    
    for(let i = 0 ; i < inquiryList.length ; i++){
        html +=`
                    <tr>
                        <td> ${inquiryList[i].inquiryNum} </td>
                        <td> ${memberList[findId].gender} </td>
                        <td> ${memberList[findId].name} </td>
                        <td> ${memberList[findId].email} </td>
                        <td> ${inquiryList[i].subject} </td>
                        <td> ${inquiryList[i].title} </td>
                        <td> 2024-06-10 </td>
                    </tr>
        `;
    }

    // 출력
    inquiryBox.innerHTML = html;
}
    