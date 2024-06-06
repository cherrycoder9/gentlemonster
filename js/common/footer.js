loadFooter();
function loadFooter() {
    const footerHTML = `
        <footer>
            <nav>
                <ul>
                    <li><a href="/index.html">푸터 영역 테스트</a></li>
                </ul>
            </nav>
        </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}
