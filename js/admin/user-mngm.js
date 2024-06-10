let memberList = [];

_print();

function _print(){  console.log('_print()');

    memberList = JSON.parse(localStorage.getItem('memberList'));
    if(memberList==null){memberList=[]};
    console.log(memberList);
    
    let printBox = document.querySelector('#printBox');

    let html = ``;
    for(let i = 0 ; i < memberList.length ; i++){
        
        html+=`
                    <tr>
                        <td> ${memberList[i].memberId} </td>
                        <td> ${memberList[i].email} </td>
                        <td> ${memberList[i].password} </td>
                        <td> ${memberList[i].gender} </td>
                        <td> ${memberList[i].name} </td>
                        <td>${memberList[i].isAdmin}</td>
                        <td><button onclick="_change(${i})" type=button""> 관리자 </button></td>
                        <td><button onclick="_delete(${i})" type=button""> 삭제</button></td>
                    </tr>
            `;
    }

    printBox.innerHTML = html;
}
function _change(i){ console.log(i);
    if(memberList[i].isAdmin == false){
        memberList[i].isAdmin = true;
    }else{
        memberList[i].isAdmin = false;
    }                                           console.log(memberList);
    // 새로운 데이터를 배열에 저장했으면 localStorage 다시 저장한다.
    localStorage.setItem('memberList' , JSON.stringify( memberList ));

    _print();
}
function _delete(i){ console.log('_delete()');
    memberList.splice(i , 1);

    // 새로운 데이터를 배열에 저장했으면 localStorage 다시 저장한다.
    localStorage.setItem('memberList' , JSON.stringify( memberList ));

    _print();
}