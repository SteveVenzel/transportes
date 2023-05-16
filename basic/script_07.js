let day = prompt("ingresa un dia").toLowerCase(); //Martes - MARTES (martes)

if (day == "sabado" || day == "domingo") {
  alert("Es un fin de semana");
} else {
  if (
    day == "lunes" ||
    day == "martes" ||
    day == "miercoles" ||
    day == "jueves" ||
    day == "viernes"
  ) {
    alert("Es un dia entre semana");
  } else {
    alert ("escribiste una palabra incorrecta o ilogica. Por favor escribir un dia");
  }
}


