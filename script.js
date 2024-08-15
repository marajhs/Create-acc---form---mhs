const submitBtn = document.getElementById('submitBtn');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const errorMessage = document.getElementById('error-message');

submitBtn.addEventListener('click', () => {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match';
    } else {
        console.log('Passwords match, proceed with submission');

    }
});

const showPasswordCheckbox = document.getElementById('showPassword');

showPasswordCheckbox.addEventListener('change', () => {
    if (showPasswordCheckbox.checked) {
        passwordInput.type = 'text';
        confirmPasswordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
        confirmPasswordInput.type = 'password';
    }
});