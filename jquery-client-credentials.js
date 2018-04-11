var url_base_autenticacao = "https://autenticacao.info.ufrn.br/";
var client_id = "<my_client_id>";
var client_secret = "<my_client_secret>";

var url_base = "https://api.info.ufrn.br/";
var versao = "<versao_api>";
var x_api_key = "<my_x_api_key>";

var settings = {  
  "async": true,  
  "crossDomain": true,  
  "url": url_base_autenticacao + "authz-server/oauth/token?client_id=" + client_id + "&client_secret=" + client_secret + "&grant_type=client_credentials",  
  "method": "POST"
}

var token = null;

$.ajax(settings).done(function (response) {  
  token = response.access_token;

  var settings = {  
        "async": true,  
        "crossDomain": true, 
        "url": url_base + "curso/" + versao + "/cursos",
    "headers": {
        "Authorization": "bearer " + token,
        "x-api-key": x_api_key
    },  
        "method": "GET"
  }

    $.ajax(settings).done(function (response) {  
        console.log(response);
    }).fail(function (e) {
    console.log(e);
  });
});
