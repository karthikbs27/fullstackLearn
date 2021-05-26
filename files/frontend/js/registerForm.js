function validatepass(){
    pass1 = document.getElementById("password1").value
    pass2 = document.getElementById("password2").value

    if (pass1 == pass2) 
        document.getElementById('invalid').style.display = "none"
    else 
        document.getElementById('invalid').style.display = "block"
}


function next(){
    x = document.getElementsByClassName("input-field")
    go = 1

    for(i = 0; i < 6 ; i++){
        if(x[i].value == "" ) go = 0
    }

    if(go == 1){
        
        passformappear()
        document.getElementById("invalid1").style.display = "none"    
    }    
    else{
        document.getElementById("invalid1").style.display = "block"
    }
}

function passformappear(){
    document.getElementById("reg").style.left = "-50%"
    document.getElementById('pas').style.left = "50%"
}