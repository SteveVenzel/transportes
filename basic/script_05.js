// condicionales - if/else

// Algoritmo si es mayor de 18 habilita  catalogo de peliculas violentas 
// si el pais es china asi sea mayor de 18 no habilitar peliculas 

let age = prompt ("ingresa tu edad");
let country = prompt ("ingresa tu pais")


if (age >= 18 && country != "china" ) {
        alert ("se ha desbloqueado el catalogo de pelis violentas");   
} else {
    alert ("no tienes permiso de ver este catalogo");   
}

/** 
 * Operadores de comparación 
 * > = : indicar que es mayor a algo 
 * < = : indicar que es menor a algo
 * == :  comparar si un  valir es igual al otro
 *>= : si es mayor o igual
 *<= : si es menor igual
 * != : diferente
 * 
 * Operadores Logicos 
 *&&: Y
 *||: O
 */