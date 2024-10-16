// Importar la función sum del archivo app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound, convertToString, valueArray } = require('./app.js');

// Test para verificar si el tipo de dato es un string
test('convertToString should return string type for number input', function() {

    const result = convertToString(4);
    expect(typeof result).toBe('string');
    
    expect(result).toBe('4');
});


// Test para comprobar que el array tiene 5 o menos elementos y que contiene un 2
test('Test to check that the array has 5 or fewer elements and contains a 2', function() {

    const obj = {
        key: [1, 2, 3, 4, 5]
    };
    const arrayResult = valueArray(obj, 'key');
    const expectedArray = obj['key'];

    expect(arrayResult).toEqual(expectedArray);
});


// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


// Test para la conversión de Euros a Dólares
test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07; // 1 euro son 1.07 dólares
    expect(dollars).toBe(expected);
})


// Test para la conversión de Dólares a Yenes
test("One dollars should be 156.5 yenes", function() {
    const yenes = fromDollarToYen(1);
    const expected = 1 * 156.5; // 1 Dollar son 156.5 yenes
    expect(yenes).toBe(expected);
})


// Test para la conversión de Dólares a Yenes
test("One yen should be 0.87 pound", function() {
    const pound = fromYenToPound(1);
    const expected = 1 * 0.87; // 1 yen son 0.87 pound
    expect(pound).toBe(expected);
})