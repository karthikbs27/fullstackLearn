const verifyEmailCall = 'http://127.0.0.1:8000/web/verify'
const registerinfo = 'http://127.0.0.1:8000/web/register'
const test = 'http://127.0.0.1:8000/web/test'
const getsessionID = 'http://127.0.0.1:8000/web/sessionID'
const checkNameId =  'http://127.0.0.1:8000/web/nameId'

var Data = ''

function callApi(method, url, data, sync){
    $.ajax({
        method: method,
        url: url,
        crossDomain: true,
        // xhrFields:{
        //     withCredentials: true
        // },
        async: sync,
        data: data,
        dataType: "json"
    })
    .done((data, status, xhr) => { Data =  data; })
    .fail((xhr,textStatus, errorThrown) =>{ alert(xhr.status + "      "  + textStatus + "       " + errorThrown)})
}