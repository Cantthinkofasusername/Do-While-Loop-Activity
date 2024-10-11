function passwordPrompt() {
    password = "correctpassword123"
    do {
        attempt = prompt("Enter your password:");
        if (password !== attempt) {
            alert("Incorrect. Try again.")
        }
        else if (password == attempt) {
            alert("Access Granted.")
        }
    }
    while (password != attempt);
}