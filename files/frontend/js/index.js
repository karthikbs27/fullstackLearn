function showPassword(){
    checkbox = document.getElementById("checkbox")
    
    if(checkbox.checked) document.getElementById("pass").type = "text"
    else document.getElementById("pass").type = "password"
}