import {
  Complejo,
  SumaComplejo,
  divisionComplejo,
  multiplicacionComplejo,
  restaComplejo,
} from "./Complejo";
const prompt = require("prompt-sync")();
const readline = require("readline-sync");
//MENU
let opcion;
do {
  console.log(
    "Indique con que tipo de variable le gustaria realizar las operaciones \n [1] Real/Entero \n [2] Imaginario \n [3] Salir"
  );
  opcion = prompt("Ingrese la opcion-> ");
  switch (opcion) {
    case "1":
      console.log(
        "Que operacion desea realizar? \n [1] Suma  [2] Resta  [3] Multiplicacion  [4] Division"
      );
      let operacion = prompt();
      switch (operacion) {
        case "1":
          console.log("Ingrese el primer numero a sumar");
          let a = parseInt(prompt());
          console.log("Ingrese el segundo numero a sumar");
          let b = parseInt(prompt());

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
            console.log(
              "El divisor no puede ser 0, ingrese un numero mayor al mismo"
            );
            b = parseInt(prompt());
          }
          console.log("El resultado de la resta es: ", a / b);

          break;
      }
      break;
    case "2":
      let primerNumero: Complejo;
      console.log("Ingrese el numero real del primer numero");
      let real1 = parseInt(prompt());
      console.log("Ingrese la parte imaginaria del primer numero");
      let imaginario1 = parseInt(prompt());
      primerNumero = new Complejo(real1, imaginario1);
      let segundoNumero: Complejo;
      console.log("Ingrese el numero real del primer numero");
      let real2 = parseInt(prompt());
      console.log("Ingrese la parte imaginaria del primer numero");
      let imaginario2 = parseInt(prompt());
      segundoNumero = new Complejo(real2, imaginario2);
      console.log(
        "Que operacion desea realizar? \n [1] Suma  [2] Resta  [3] Multiplicacion  [4] Division"
      );
      operacion = prompt();
      switch (operacion) {
        case "1":
          SumaComplejo(primerNumero, segundoNumero);
          break;
        case "2":
          restaComplejo(primerNumero, segundoNumero);
          break;
        case "3":
          multiplicacionComplejo(primerNumero, segundoNumero);
          break;
        case "4":
          divisionComplejo(primerNumero, segundoNumero);
          break;
      }
      break;
    case "3":
      console.clear();
      console.log("Muchas gracias por visitar el sistema. ADIOS...");
      break;
  }
} while (opcion != 3);
