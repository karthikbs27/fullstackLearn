function validatepass(){
    pass1 = document.getElementById("password1").value
    pass2 = document.getElementById("password2").value

    if (pass1 == pass2){
        document.getElementById('invalid').style.display = "none"
        document.getElementById('verifybutton').disabled = false
    }

    else{
        document.getElementById('invalid').style.display = "block"
        document.getElementById('verifybutton').disabled = true
    } 
}


function next(){
    x = document.getElementsByClassName("input-field")
    go = 1

    for(i = 0; i < 6 ; i++){
        if(x[i].value == "" ) go = 0
    }

    if(go == 1){
        document.getElementById("invalid1").style.display = "none"    
        verifyEmail()
    }    
    else{
        document.getElementById("invalid1").style.display = "block"
    }
}

// function getCookie(name) {
//     let cookieValue = null;
//     if (document.cookie && document.cookie !== '') {
//         const cookies = document.cookie.split(';');
//         for (let i = 0; i < cookies.length; i++) {
//             const cookie = cookies[i].trim();
//             // Does this cookie string begin with the name we want?
//             if (cookie.substring(0, name.length + 1) === (name + '=')) {
//                 cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                 break;
//             }
//         }
//     }
//     return cookieValue;
// }

function passformappear(){
    document.getElementById("reg").style.left = "-50%"
    document.getElementById('pas').style.left = "50%"
}

function verifyEmail(){
    var data = $("#registerform").serializeArray();
    var requestPayload = {
        email : null
    }

    for(i = 0;i < data.length; i++){
        element = data[i]
        switch(element.name){
            case 'email':
                requestPayload['email'] = element.value
                break
        }
    }

    document.getElementById('loadtext').innerHTML = "Sending OTP"
    document.getElementsByClassName('loadbox')[0].style.bottom= '20px'
    setTimeout(()=>{
        callApi('POST', verifyEmailCall, {'data': JSON.stringify(requestPayload)}, false )
        console.log(Data['data'])
        document.getElementsByClassName('loadbox')[0].style.bottom= '-50px'
        if(Data['data']) passformappear()
    }, 350)
    console.log(JSON.stringify(requestPayload))
}

function reg(){
    x = document.getElementsByClassName("input-field")
    go = 1

    for(i = 6; i < 10 ; i++){
        if(x[i].value == "" ) go = 0
    }
    console.log(go)
    if(go == 1){
        document.getElementById('invalid2').style.display = "none"
        var data = $("#registerform").serializeArray();
        var datapass = $("#passwordform").serializeArray();
        console.log(datapass)
        var requestPayload = {
            name : null,
            age : null,
            year : null,
            roomNo : null,
            phoneNo : null,
            email : null,
            usname : null,
            password  : null,
            otp : null
        }

        for(i = 0;i < data.length; i++){
            element = data[i]
            switch(element.name){
                case 'name':
                    requestPayload["name"] = element.value
                    break
                case 'age':
                    requestPayload['age'] = element.value
                    break
                case 'year':
                    requestPayload['year'] = element.value
                    break
                case 'roomno':
                    requestPayload['roomNo'] = element.value
                    break
                case 'phoneno':
                    requestPayload['phoneNo'] = element.value
                    break
                case 'email':
                    requestPayload['email'] = element.value
                    break
            }
        }    

        for(i = 0;i < datapass.length; i++){
            element = datapass[i]
            switch(element.name){
                case 'password':
                    requestPayload['password'] = element.value
                    break
                case 'otp':
                    requestPayload['otp'] = element.value
                    break
                case 'username':
                    requestPayload['usname'] = element.value
                    break    
            }
        }    

        document.getElementById('loadtext').innerHTML = "Verifing OTP"
        document.getElementsByClassName('loadbox')[0].style.bottom= '20px'
        setTimeout(()=>{
            callApi('POST', registerinfo, {'data': JSON.stringify(requestPayload)}, false )
            if(Data['data']){
                document.getElementById('loadtext').innerHTML = "OTP Verified"
                setTimeout(()=>{
                    document.getElementsByClassName('loadbox')[0].style.bottom= '-50px'
                    window.location.href = 'index.html'
                }, 1000)
            }else{
                document.getElementById('loadtext').innerHTML = "Invalid OTP"
                setTimeout(()=>{
                    document.getElementsByClassName('loadbox')[0].style.bottom= '-50px'
                }, 1000)
            }
        }, 350)
    }
    else{
        document.getElementById('invalid2').style.display = "block"
    }
    
}

function checkforname(){
    Data['data'] = false
    id = document.getElementById("username").value
    requestPayload = {
        usname : id
    }
    callApi("POST",checkNameId, {data: JSON.stringify(requestPayload)}, false)
    console.log(Data['data'])
    if( Data['data']) {
        document.getElementById('invaliduserid').style.display = 'block'
        document.getElementById('verifybutton').disabled = true
    } 
    else{
        document.getElementById('invaliduserid').style.display = 'none'
        document.getElementById('verifybutton').disabled = false
    } 
    
}