//PUNTO 1
let colores = ["azul","amarillo","rojo","naranja","celeste"]
console.log(colores.length); 

//PUNTO 2
console.log("primer color", colores[0]);
console.log("ultimo color", colores[colores.length - 1]);
//PUNTO 3
console.log("cantidad de elementos", colores.length)
//PUNTO 4
colores.push("verde")
console.log("agregado al final" ,colores)
//PUNTO 5
colores.unshift("negro");
console.log("agregado al principio", colores)
//PUNTO 6
colores.pop("verde");
console.log("eliminado el del final")
//PUNTO 7
colores.shift("negro")
console.log("eliminado el del principio")
//PUNTO 8
colores[0] = 'marron'
console.log(colores);
//PUNTO 9
for (let i = 0; i < colores.length; i++) {
    console.log(`Color #${i + 1}: ${colores[i]}`);
}
//PUNTO 10
let botonUsuario = document.getElementById('act10');

botonUsuario.onclick = function(){
    alert('Hola profe Ale')
    let colores = prompt('Ingresa 3 colores (separados por coma)');
    if (colores) {
        let nuevosColores = colores.split(',');
        console.log('Los colores que ingresaste fueron ' + nuevosColores);
    } else {
        console.log('No se ingresaron colores');
    }
    alert('Revisa la consola')
}
