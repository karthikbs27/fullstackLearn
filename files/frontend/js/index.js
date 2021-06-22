function showPassword(){
    checkbox = document.getElementById("checkbox")
    
    if(checkbox.checked) document.getElementById("pass").type = "text"
    else document.getElementById("pass").type = "password"
}

function loadthe(){
    callApi('POST', getsessionID, {"data":JSON.stringify({"name":'Karthik B S'})}, true)
}