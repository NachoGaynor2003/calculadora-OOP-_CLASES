"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Complejo_1 = require("./Complejo");
var prompt = require("prompt-sync")();
var readline = require("readline-sync");
//MENU
var opcion;
do {
    console.log("Indique con que tipo de variable le gustaria realizar las operaciones \n [1] Real/Entero \n [2] Imaginario \n [3] Salir");
    opcion = prompt("Ingrese la opcion-> ");
    switch (opcion) {
        case "1":
            console.log("Que operacion desea realizar? \n [1] Suma  [2] Resta  [3] Multiplicacion  [4] Division");
            var operacion = prompt();
            switch (operacion) {
                case "1":
                    console.log("Ingrese el primer numero a sumar");
                    var a = parseInt(prompt());
                    console.log("Ingrese el segundo numero a sumar");
                    var b = parseInt(prompt());
                    console.log("El resultado de la suma es: ", a + b);
                    break;
                case "2":
                    console.log("Ingrese el primer numero a restar");
                    a = parseInt(prompt());
                    console.log("Ingrese el segundo numero a restar");
                    b = parseInt(prompt());
                    console.log("El resultado de la resta es: ", a - b);
                    break;
                case "3":
                    console.log("Ingrese el primer numero a multiplicar");
                    a = parseInt(prompt());
                    console.log("Ingrese el segundo numero a multiplicar");
                    b = parseInt(prompt());
                    console.log("El resultado de la resta es: ", a * b);
                    break;
                case "4":
                    console.log("Ingrese el dividendo");
                    a = parseInt(prompt());
                    console.log("Ingrese el divisor");
                    b = parseInt(prompt());
                    while (b == 0) {
                        console.log("El divisor no puede ser 0, ingrese un numero mayor al mismo");
                        b = parseInt(prompt());
                    }
                    console.log("El resultado de la resta es: ", a / b);
                    break;
            }
            break;
        case "2":
            var primerNumero = void 0;
            console.log("Ingrese el numero real del primer numero");
            var real1 = parseInt(prompt());
            console.log("Ingrese la parte imaginaria del primer numero");
            var imaginario1 = parseInt(prompt());
            primerNumero = new Complejo_1.Complejo(real1, imaginario1);
            var segundoNumero = void 0;
            console.log("Ingrese el numero real del primer numero");
            var real2 = parseInt(prompt());
            console.log("Ingrese la parte imaginaria del primer numero");
            var imaginario2 = parseInt(prompt());
            segundoNumero = new Complejo_1.Complejo(real2, imaginario2);
            console.log("Que operacion desea realizar? \n [1] Suma  [2] Resta  [3] Multiplicacion  [4] Division");
            operacion = prompt();
            switch (operacion) {
                case "1":
                    (0, Complejo_1.SumaComplejo)(primerNumero, segundoNumero);
                    break;
                case "2":
                    (0, Complejo_1.restaComplejo)(primerNumero, segundoNumero);
                    break;
                case "3":
                    (0, Complejo_1.multiplicacionComplejo)(primerNumero, segundoNumero);
                    break;
                case "4":
                    (0, Complejo_1.divisionComplejo)(primerNumero, segundoNumero);
                    break;
            }
            break;
        case "3":
            console.clear();
            console.log("Muchas gracias por visitar el sistema. ADIOS...");
            break;
    }
} while (opcion != 3);
