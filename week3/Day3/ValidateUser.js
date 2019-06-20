function validate(){

var userinfo = {
    username : "Ruth",
    password: "123"
}

var name =document.forms["user"]["name"].value;
var pass= document.forms["user"]["password"].value;

if(name === userinfo.username && pass === userinfo.password){
    alert("succesfully logged in")
    window.open("./home.html")
   
}

else{
    alert("Incorrect Username and password")
}
}