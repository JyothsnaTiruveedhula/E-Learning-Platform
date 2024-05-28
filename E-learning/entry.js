function login() {
    // Get the values entered by the user
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var username = document.getElementById('username').value;

    if (email === 'jyothsna123@gmail.com' && password === '1234567' && username === 'Jyothsna Devi') {
        window.location.href = 'home.html';
        return false; // Prevent form submission
    } 
    else {
        var messageElement = document.getElementById('message');
        messageElement.textContent = 'Invalid email or password';
        return false; // Prevent form submission
    }
}