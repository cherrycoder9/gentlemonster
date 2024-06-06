(function () {
    const headerHTML = `
        <header>
            <nav>
                <ul>
                    <li><a href="/index.html">Home</a></li>
                    <li><a href="/x-customer/login.html">Login</a></li>
                    <li><a href="/x-customer/signup.html">Sign Up</a></li>
                    <li><a href="/x-customercare/customer-service.html">Customer Service</a></li>
                </ul>
            </nav>
        </header>
    `;
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
})();
