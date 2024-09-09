document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the values from the form
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Perform basic validation
    if (password !== confirmPassword) {
        document.getElementById('message').textContent = 'Passwords do not match!';
        return;
    }

    // Assuming form is valid if passwords match
    document.getElementById('message').textContent = 'Registration successful!';

    // Here you could also handle form submission, e.g., send data to a server
});
