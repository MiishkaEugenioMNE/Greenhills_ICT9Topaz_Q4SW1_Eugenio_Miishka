//JavaScript Login Code
function Login() {
    Username = document.getElementById("Username").value;
    Password = document.getElementById("Password").value;

    if (Username === "" || Password === "") {
        document.getElementById("output").innerHTML = "Please fill in all the fields.";
    } else if (Username === "Miishka Eugenio" && Password === "121610") {
        document.getElementById("output").innerHTML = "Logged In Successfully! Welcome, " + Username + "!";
    } else {
        document.getElementById("output").innerHTML = "Invalid username or password.";
    }
}
