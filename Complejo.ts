export class Complejo {
  Real: number;
  Imaginario: number;

  public constructor(Real: number, Imaginario: number) {
    this.Real = Real;
    this.Imaginario = Imaginario;
  }

  public getReal(): number {
    return this.Real;
  }
  public getImaginario(): number {
    return this.Imaginario;
  }
}
export function SumaComplejo(a: Complejo, b: Complejo) {
  let ResultadoSumaReal: number;
  let ResultadoSumaImaginaria: number;
  ResultadoSumaReal = a.Real + b.Real;
  ResultadoSumaImaginaria = a.Imaginario + b.Imaginario;
  let final: string;
  console.log(
    `El resultado de la suma es ${ResultadoSumaReal} + ${ResultadoSumaImaginaria}i `
  );
}
export function restaComplejo(a: Complejo, b: Complejo) {
  let restaReal: number;
  let restaImaginaria: number;
  restaReal = a.Real - b.Real;
  restaImaginaria = a.Imaginario - b.Imaginario;
  let final: string;
  console.log(
    `El resultado de la resta es ${restaReal} + ${restaImaginaria} i`
  );
}
export function multiplicacionComplejo(a: Complejo, b: Complejo) {
  let parteReal: number;
  parteReal = a.Real * b.Real - a.Imaginario * b.Imaginario;
  let parteImaginaria: number;
  parteImaginaria = a.Real * b.Imaginario + b.Real * a.Imaginario;
  let final: string;
  console.log(
    `El resultado de la multiplicacion es: ${parteReal}+${parteImaginaria} i`
  );
}
export function divisionComplejo(a: Complejo, b: Complejo) {
  let parteReal: number;
  parteReal =
    (a.Real * b.Real + a.Imaginario * b.Imaginario) /
    (b.Real ** 2 + b.Imaginario ** 2);
  let parteImaginaria: number;
  parteImaginaria =
    (a.Imaginario * b.Real - a.Real * b.Imaginario) /
    (b.Real ** 2 + b.Imaginario ** 2);
  let final: string;
  console.log(
    `El resultado de la division es: ${parteReal}+${parteImaginaria} i `
  );
}
