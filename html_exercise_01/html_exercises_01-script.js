

function authenticate(event) {
    event.preventDefault();

    var username = document.getElementById('username');
    var password = document.getElementById('password')[0];
    var male_button = document.getElementById('male');
    var female_button = document.getElementById('female');
    var check_terms = document.getElementById('terms');

    if (!username.checkValidity()){
        alert('Invalid username. Ensure a minimum of 10 characters.');
        return;
    }

    if (!password.checkValidity()) {
        alert('Invalid password. Ensure a minimum length of 8 characters.');
        return;
    }

    if (!male_button.checked && !female_button.checked){
        alert('Select a gender.');
        return;
    }

    if (!check_terms.checked){
        alert('Check if you agree to the terms and conditions.')
    }

    // If the authentication is successful,
    document.getElementById('submit_container').style.backgroundColor = 'rgb(5, 100, 5)';
    document.getElementById(login_header).innerText = 'Login Successful!';

}