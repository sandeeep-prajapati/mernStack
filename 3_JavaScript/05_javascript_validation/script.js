function validate(){
    var username = document.loginform.user.value;
    var password = document.loginform.pass.value;
    username = username.trim()
    password = password.trim()
    if(username = ""|| username == null){
        alert("user name is empty")
    }
    if(password.length<6){
        alert(" password length is good enough")
        return false
    }
    return true
}