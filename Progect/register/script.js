document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    
    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            const username = document.getElementById('registerUsername').value;
            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;

            const user = {
                username: username,
                email: email,
                password: password
            };

            localStorage.setItem('user', JSON.stringify(user));
            alert('Реєстрація успішна!');
            window.location.href = '../Home page/index.html';  // Відносний шлях до Home Page
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const loginEmail = document.getElementById('loginEmail').value;
            const loginPassword = document.getElementById('loginPassword').value;

            const storedUser = JSON.parse(localStorage.getItem('user'));

            if (storedUser && storedUser.email === loginEmail && storedUser.password === loginPassword) {
                alert('Вхід успішний!');
                window.location.href = '../Home page/index.html';  // Відносний шлях до Home Page
            } else {
                alert('Неправильна електронна пошта або пароль');
            }
        });
    }
});
