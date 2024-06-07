loadFooter();
function loadFooter() {
    const footerHTML = `
        <div id="links">
            <ul>
                <li>
                    <h3>고객 서비스</h3>
                </li>
                <li><a href="#">문의</a></li>
                <li><a href="#">배송</a></li>
                <li><a href="#">서비스</a></li>
                <li><a href="#">교환 및 반품</a></li>
                <li><a href="#">주문조회</a></li>
                <li><a href="#">주문취소</a></li>
                <li><a href="#">매장 픽업 서비스</a></li>
                <li><a href="#">수리서비스 가이드</a></li>
                <li><a href="#">제품 사용 가이드</a></li>
                <li><a href="#">정품 인증</a></li>
                <li><a href="#">FAQ</a></li>
            </ul>
            <ul>
                <li>
                    <h3>법적 고지</h3>
                </li>
                <li><a href="#">공지사항</a></li>
                <li><a href="#">이용약관</a></li>
                <li><a href="#">개인정보처리방침</a></li>
                <li><a href="#">쿠키 정책</a></li>
                <li><a href="#">기프트카드 이용약관</a></li>
            </ul>
            <ul>
                <li>
                    <h3>소셜 미디어</h3>
                </li>
                <li><a href="#">페이스북</a></li>
                <li><a href="#">인스타그램</a></li>
                <li><a href="#">유튜브</a></li>
                <li><a href="#">X</a></li>
                <li><a href="#">카카오톡</a></li>
                <li><a href="#">핀터레스트</a></li>
                <li><a href="#">위챗</a></li>
                <li><a href="#">웨이보</a></li>
            </ul>
        </div>
        <div id="info">
            <div class="aleo-bold font-size-15">© 2024 GENTLE MONSTER</div>
            <div>
                <p class="font-size-11">주) 아이아이컴바인드 | 대표자명: 김한국 | 사업자번호: 119-86-38589 | 통신판매신고번호: 제 2014-서울마포-1050 호
                    (사업자 정보 확인)<br />
                    이메일 문의: cs@gentlemonster.com | 개인정보보호책임자: 정태호 | 주소: 서울특별시 마포구 어울마당로5길 41 | 대표번호: <span
                        class="underline">1600-2126</span><br /></p>
                <p class="font-size-11">고객님의 안전한 현금자산 거래를 위하여 하나은행과 채무지급보증계약을 체결하여 보장해드리고 있습니다. <span
                        class="underline">서비스 가입사실 확인</span>
                </p>
            </div>
        </div>
    `;
    document.querySelector('footer').innerHTML = footerHTML;
}
