// Control de mayusculas y minusculas (toLowerCase) (toUpperCase)
// Conversion de tipos de datos 

let age =parseInt (prompt ("ingresa tu edad"));
let country = prompt ("ingresa tu pais").toLowerCase

console.log(age, country)

if (age == 0 || country == "") {
    alert("No igresaste uno de los valores")
    
} else {
    if (age >= 18 && country != "china" ) {
        alert ("se ha desbloqueado el catalogo de pelis violentas");   
} else {
    alert ("no tienes permiso de ver este catalogo");   
}   
}




/** 
 * Operadores de comparación 
 * > = : indicar que es mayor a algo 
 * < = : indicar que es menor a algo
 * == :  comparar si un  valor es igual al otro
 *>= : si es mayor o igual
 *<= : si es menor igual
 * != : diferente
 * 
 * Operadores Logicos 
 *&&: Y
 *||: O
 */