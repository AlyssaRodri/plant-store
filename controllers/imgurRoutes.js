var myHeaders = new Headers();
myHeaders.append("Authorization", "Client-ID {{clientId}}");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.imgur.com/3/account/{{username}}", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));