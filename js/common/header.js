loadHeader();
function loadHeader() {
    const headerHTML = `
        <div id="logo">
            <a href="/index.html">GENTLE MONSTER</a>
        </div>
        <div id="mainMenu">
            <ul>
                <li><a href="#">선글라스</a></li>
                <li><a href="#">안경</a></li>
                <li><a href="#">콜라보레이션</a></li>
                <li><a href="#">스타일</a></li>
                <li><a href="#">브랜드이슈</a></li>
                <li><a href="#">매장보기</a></li>
                <li><a href="#">수리서비스</a></li>
            </ul>
        </div>
        <div id="utilMenu">
            <ul>
                <li><a href="#">ㅇ</a></li>
                <li><a href="#">로그인</a></li>
                <li><a href="#">ㅇ</a></li>
            </ul>
        </div>
    `;
    document.querySelector('header').innerHTML = headerHTML;
}
