(function () {
    const footerHTML = `
        <footer>
            <p>&copy; 2024 Your Company. All rights reserved.</p>
            <nav>
                <ul>
                    <li><a href="/x-customer/update-user-info.html">Update Info</a></li>
                    <li><a href="/x-customer/user-info.html">User Info</a></li>
                    <li><a href="/x-customercare/faq.html">FAQ</a></li>
                    <li><a href="/x-customercare/service-inquiry.html">Service Inquiry</a></li>
                </ul>
            </nav>
        </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);
})();
