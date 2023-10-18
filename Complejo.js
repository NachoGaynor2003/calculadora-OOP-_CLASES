"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divisionComplejo = exports.multiplicacionComplejo = exports.restaComplejo = exports.SumaComplejo = exports.Complejo = void 0;
var Complejo = /** @class */ (function () {
    function Complejo(Real, Imaginario) {
        this.Real = Real;
        this.Imaginario = Imaginario;
    }
    Complejo.prototype.getReal = function () {
        return this.Real;
    };
    Complejo.prototype.getImaginario = function () {
        return this.Imaginario;
    };
    return Complejo;
}());
exports.Complejo = Complejo;
function SumaComplejo(a, b) {
    var ResultadoSumaReal;
    var ResultadoSumaImaginaria;
    ResultadoSumaReal = a.Real + b.Real;
    ResultadoSumaImaginaria = a.Imaginario + b.Imaginario;
    var final;
    console.log("El resultado de la suma es ".concat(ResultadoSumaReal, " + ").concat(ResultadoSumaImaginaria, "i "));
}
exports.SumaComplejo = SumaComplejo;
function restaComplejo(a, b) {
    var restaReal;
    var restaImaginaria;
    restaReal = a.Real - b.Real;
    restaImaginaria = a.Imaginario - b.Imaginario;
    var final;
    console.log("El resultado de la resta es ".concat(restaReal, " + ").concat(restaImaginaria, " i"));
}
exports.restaComplejo = restaComplejo;
function multiplicacionComplejo(a, b) {
    var parteReal;
    parteReal = a.Real * b.Real - a.Imaginario * b.Imaginario;
    var parteImaginaria;
    parteImaginaria = a.Real * b.Imaginario + b.Real * a.Imaginario;
    var final;
    console.log("El resultado de la multiplicacion es: ".concat(parteReal, "+").concat(parteImaginaria, " i"));
}
exports.multiplicacionComplejo = multiplicacionComplejo;
function divisionComplejo(a, b) {
    var parteReal;
    parteReal =
        (a.Real * b.Real + a.Imaginario * b.Imaginario) /
            (Math.pow(b.Real, 2) + Math.pow(b.Imaginario, 2));
    var parteImaginaria;
    parteImaginaria =
        (a.Imaginario * b.Real - a.Real * b.Imaginario) /
            (Math.pow(b.Real, 2) + Math.pow(b.Imaginario, 2));
    var final;
    console.log("El resultado de la division es: ".concat(parteReal, "+").concat(parteImaginaria, " i "));
}
exports.divisionComplejo = divisionComplejo;
