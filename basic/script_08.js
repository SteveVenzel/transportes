let tyre = parseInt(prompt("Digita numero de llantas entre 0 a 20:"));
let transport = prompt("Digite medio de trasporte terrestre, areo o acuatico").toLocaleLowerCase

console.log(tyre);

if (tyre == NaN || ==) {
 alert("ingrese numero de llantas"); 
} else if (transport == NaN){
  alert("ingrese numero de trasporte"); 
}
if (tyre == 4 && transport == "terrestre") {
  alert("El carro papa");
} else if (tyre > 4 && transport == "terrestre") {
  alert("pal camion socio");
} else if (tyre == 2 && transport == "terrestre") {
  alert("la moto o la cicla viejo");
} else if (tyre == 2 && transport == "terrestre") {
  alert("la moto o la cicla viejo");
} else if (tyre == 1 && transport == "terrestre") {
  alert("monosuicidico");
} else if (tyre == 0 && transport == "acuatico") {
  alert("barco");
} else if (tyre == 20 && transport == "aereo") {
  alert("avion");
}

