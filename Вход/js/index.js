function verifyPassword() {
    var pw = document.getElementById("pswd").value;

    if (pw == "") {
        document.getElementById("message").innerHTML = "Fill the password!";
        return false;
    }
    if (pw.length < 8) {
        document.getElementById("message").innerHTML = "length must be atleast 8 characters";
        return false;
    }
    if (pw.length > 15) {
        document.getElementById("message").innerHTML = "length must not exceed 15 characters";
        return false;
    } else {
        alert("Password is correct");
    }
}  

