loadHeader();
function loadHeader() {
    console.log('loadHeader() 함수 진입');
    let headerHTML = '';
    let currentPath = window.location.pathname;

    console.log(currentPath);
    if (currentPath.endsWith("/index.html") || currentPath == "/" || currentPath == "") {
        // body에 indexPage 클래스 값 추가
        document.body.classList.add("indexPage");
        headerHTML = `
        <div id="logo">
            <a href="../index.html">GENTLE MONSTER</a>
        </div>
        <div id="mainMenu">
            <ul>
                <li><a href="./x-customer/sunglasses.html">선글라스</a></li>
                <li><a href="./x-customer/glasses.html">안경</a></li>
                <li><a href="#"><s>콜라보레이션</s></a></li>
                <li><a href="#"><s>스타일</s></a></li>
                <li><a href="#"><s>브랜드이슈</s></a></li>
                <li><a href="#"><s>매장보기</s></a></li>
                <li><a href="./x-productservice/repair_guide.html">수리서비스</a></li>
            </ul>
        </div>
        <div id="utilMenu">
            <ul>
                <li><a href="#"><img id="searchSvg" src="#"></img></a></li>
                <li id="sessionCheck"></li>
                <li><a href="#"><img id="cartSvg" src="#"></img></a></li>
            </ul>
        </div>
    `;
        document.querySelector('header').innerHTML = headerHTML;
        // 하얀색 아이콘
        let searchSvg = document.querySelector('#searchSvg');
        let cartSvg = document.querySelector('#cartSvg');
        searchSvg.src = './img/icon/search-white.svg';
        cartSvg.src = './img/icon/cart-white.svg';

        // 파비콘 삽입
        let link = document.createElement('link');
        link.rel = 'shortcut icon';
        link.href = './img/gm-logo/favicon-96.png';
        link.type = 'image/x-icon';
        document.getElementsByTagName('head')[0].appendChild(link);

    } else {
        // body에 otherPage 클래스 값 추가
        document.body.classList.add("otherPage");
        headerHTML = `
        <div id="logo">
            <a href="../index.html">GENTLE MONSTER</a>
        </div>
        <div id="mainMenu">
            <ul>
                <li><a href="../x-customer/sunglasses.html">선글라스</a></li>
                <li><a href="../x-customer/glasses.html">안경</a></li>
                <li><a href="#"><s>콜라보레이션</s></a></li>
                <li><a href="#"><s>스타일</s></a></li>
                <li><a href="#"><s>브랜드이슈</s></a></li>
                <li><a href="#"><s>매장보기</s></a></li>
                <li><a href="../x-productservice/repair_guide.html">수리서비스</a></li>
            </ul>
        </div>
        <div id="utilMenu">
            <ul>
                <li><a href="#"><img id="searchSvg" src="#"></img></a></li>
                <li id="sessionCheck"></li>
                <li><a href="#"><img id="cartSvg" src="#"></img></a></li>
            </ul>
        </div>
    `;
        document.querySelector('header').innerHTML = headerHTML;
        // 검은색 아이콘 
        let searchSvg = document.querySelector('#searchSvg');
        let cartSvg = document.querySelector('#cartSvg');
        searchSvg.src = '../img/icon/search-black.svg';
        cartSvg.src = '../img/icon/cart-black.svg';

        // 파비콘 삽입 
        let link = document.createElement('link');
        link.rel = 'shortcut icon';
        link.href = '../img/gm-logo/favicon-96.png';
        link.type = 'image/x-icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }

    let sessionCheck = document.querySelector('#sessionCheck');
    if (sessionStorage.getItem('loginMemberId')) {
        sessionCheck.innerHTML = '<a href="./x-customer/user-info.html">회원정보</a>';
    } else {
        sessionCheck.innerHTML = '<a href="./x-customer/login.html">로그인</a>';
    }

    console.log('loadHeader() 함수 종료');
}
