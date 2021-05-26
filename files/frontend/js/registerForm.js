function validatepass(){
    pass1 = document.getElementById("password1").value
    pass2 = document.getElementById("password2").value

    if (pass1 == pass2) 
        document.getElementById('invalid').style.display = "none"
    else 
        document.getElementById('invalid').style.display = "block"
}

function passformappear(){
    document.getElementsByClassName("register").style.left = "-50%"
    document.getElementsByClassName('password').style.left = "50%"
}