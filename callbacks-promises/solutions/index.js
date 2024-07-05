// * Ejercicio 1: Test 1
//* 1 - Arregla esta función para que el código posterior funcione como se espera:
import net from "node:net";

export const ping = (ip, callback) => {
  const startTime = process.hrtime();

  const client = net.connect({ port: 80, host: ip }, () => {
    client.end();
    const data = { time: process.hrtime(startTime), ip };
    callback(null, data);
    return data;
  });

  client.on("error", (err) => {
    callback(err, null);
    throw err;
    client.end();
  });
};

// ping('midu.dev', (err, info) => {
//   if (err) console.error(err)
//   console.log(info)
// // })

// * 2 - Transforma la siguiente función para que funcione con promesas en lugar de callbacks:
// * 2 - Transform the next function to work with promises instead of callbacks:

export function obtenerDatosPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: "datos importantes" });
    }, 2000);
  });
}

// obtenerDatosPromise().then(data => console.log(data))

/*
//* Explica qué hace la función. Identifica y corrige los errores en el 
//* siguiente código. Si ves algo innecesario, elimínalo. Luego mejoralo 
//* para que siga funcionando con callback y luego haz lo que consideres 
//* para mejorar su legibilidad.
*/

/*
Esta función le el archivo input.txt, convierte el texto en mayúsculas
y lo escribe en un archivo llamado output.txt
*/

import fs from "fs";

export function procesarArchivo() {
  fs.readFile("input.txt", "utf8", (error, contenido) => {
    if (error) {
      console.error("Error leyendo archivo:", error.message);
      return;
    }

    const textoProcesado = contenido.toUpperCase();
    fs.writeFile("output.txt", textoProcesado, (error) => {
      if (error) {
        console.error("Error guardando archivo:", error.message);
        return;
      }

      console.log("Archivo procesado y guardado con éxito");
    });
  });
}

// procesarArchivo();

// * 4 - ¿Cómo mejorarías el siguiente código y por qué? Arregla los tests si es necesario:

export async function leerArchivos() {
  return Promise.all([
    fs.readFileSync("./archivo1.txt", "utf-8"),
    fs.readFileSync("./archivo2.txt", "utf-8"),
    fs.readFileSync("./archivo3.txt", "utf-8"),
  ]).then((result) => {
    const [t1, t2, t3] = result;
    return `${t1} ${t2} ${t3}`;
  });
}

/*5 - 
Escribe una funcion `delay` que retorne una promesa que se resuelva 
después de `n` milisegundos.
*/

export async function delay(time) {
  return new Promise((resolve, reject) => {
    if (!time) {
      return reject("Time must be a number");
    }

    if (time <= 0) {
      return reject("Time must be greater than 0");
    }

    setTimeout(() => {
      resolve();
    }, time);
  });
}

// await delay(2000)
// console.log('Hello world')

/*
6. Vamos a crear nuestra propia utilidad `dotenv` en el archivo `dotenv.js`.
- La utilidad debe devolver un método `config` que lee el archivo `.env` y añade las variables de entorno que haya en el archivo al objeto `process.env`.
- Por ejemplo si tu archivo `.env` contiene:
*/

// import dotenv from './dotenv.js';
// dotenv.config()
// await delay(1000)
// console.log(process.env.HI)


