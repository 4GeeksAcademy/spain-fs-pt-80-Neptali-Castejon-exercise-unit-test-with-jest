
// Funcion que solo debe devolver string
const convertToString = function(valueToString){
    // Si el valor es null o undefined, lo convertimos a una cadena
    if (valueToString === null || valueToString === undefined) {
        return '';
    }
    // Convertimos cualquier otro tipo a string
    return valueToString.toString();
}

// Funcion comprueba que el array tiene 5 o menos elementos y que contiene un 2
const valueArray = function(obj, key) {
    if (Array.isArray(obj[key]) && obj[key].length <= 5 && obj[key].includes(2)) {
        return obj[key]; 
    }
    return 'El array debe tener 5 o menos elementos y contener un 2.';
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a dólares
    let valueInYen = valueInDollar * 156.5;
    // Retornamos el valor en dólares
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a dólares
    let valueInPound = valueInYen * 0.87;
    // Retornamos el valor en dólares
    return valueInPound;
}

// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound, convertToString, valueArray };