// cambio de titulo
function titulo(){
  var cambio= document.getElementById("form-signin-heading");
  cambio.innerHTML="Por favor inicia sesión";
}
titulo();

//cambio del primer imput correo
function correo(){
   document.getElementById("inputEmail").placeholder= "Correo Electrónico";
}
correo();

//cambio contraseña
function contraseña(){
   document.getElementById("inputPassword").placeholder= "Contraseña";
}
contraseña();

//cambiar el remember me
function span(){
   var reemplazar= document.getElementsByTagName("span")[0];
   reemplazar.textContent="Recordar datos";
}
span();

//cambiar boton
function boton(){
   var reemplaza= document.getElementsByTagName("button")[0];
   reemplaza.textContent="Iniciar Sesión";
}
boton();

/* INTENTOS FALLIDOS ---var reemplazar= document.querySelector("span");
reemplazar.textContent="Recordar datos";

document.getElementsByTagName("form").span= "Recordar datos";

cambiar boton
var boton= document.getElementsByClassName("btn btn-lg btn-primary btn-block submit-btn");
boton.innerHTML="Iniciar Sesión";

document.getElementsByTagName("span").innerHTML="chao";*/
