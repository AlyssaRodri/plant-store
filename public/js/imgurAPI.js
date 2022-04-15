
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer 5eeae49394cd929e299785c8805bd168fc675280");

var formdata = new FormData();

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("https://www.api.imgur.com/3/upload", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

document.querySelector("upload")