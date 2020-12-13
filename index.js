// tfile1.txt
// Ejercicio 1

// - Crear una carpeta para alojar nuestro proyecto
// - Crear un archivo de entrada (index.js)
// - Instalar nodemon
// - Inicializar nuestro proyecto
// - Hacer nuestro primer console.log en node
// - Crear un módulo exportable que tenga un objeto con nuestro nombre y edad
// - requerir nuestro módulo desde index.js
// - Imprimir en consola ‘Hola. soy ${nombre} y tengo ${edad}’
// - Instalar la librería cat-me
// - Utilizar la librería cat-me para imprimir un gato en consola

// opcional - utilizar el módulo fs para generar un archivo con el mensaje ‘Hola, soy ${nombre} y tengo ${edad}’
// para casa - subir el proyecto a github utilizando un gitignore para los node_modules

console.log('First Console.log');

const humano = require("./modulo.js");
const catMe = require("cat-me");
const fs = require("fs");

const message = `Hola. Soy ${humano.humano.nombre} y tengo ${humano.humano.edad}`;
console.log(message)
console.log(catMe());

fs.writeFile("message.txt", message, () => {
    console.log("Archivo creado :)");
})
