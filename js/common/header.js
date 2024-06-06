loadHeader();
function loadHeader() {
    const headerHTML = `
        <header>
            <nav>
                <ul>
                    <li><a href="/index.html">헤더 영역 테스트</a></li>
                </ul>
            </nav>
        </header>
    `;
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
}
