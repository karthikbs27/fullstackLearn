const verifyEmailCall = 'http://127.0.0.1:8000/web/verify'
const registerinfo = 'http://127.0.0.1:8000/web/register'
const test = 'http://127.0.0.1:8000/web/test'

var Data = ''

function callApi(method, url, data, sync){
    $.ajax({
        method: method,
        url: url,
        async: sync,
        data: data,
        dataType: "json"
    })
    .done((data, status, xhr) => { Data =  data; })
    .fail((xhr,textStatus, errorThrown) =>{ alert(xhr.status + "      "  + textStatus + "       " + errorThrown)})
}