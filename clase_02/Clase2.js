// Callbacks para operaciones numéricas:

const suma = (num1, num2) => num1 + num2; // Le paso a la función flecha dos números como parámetros.

const resta = (num1, num2) => num1 - num2;

const multiplicacion = (num1, num2) => num1 * num2;

const division = (num1, num2) => num1 / num2;


// Le paso a operación dos números y una función callback como parámetro:
const operacion = (num1, num2, callBack) => {

    let resultado = callBack(num1, num2) // Llamo al Callback y le paso los dos números.

    console.log (resultado)
};

// Llamo a la función con los distintos callbacks.

operacion(3, 4, suma);
operacion(3, 4, resta);
operacion(3, 4, multiplicacion);
operacion(3, 4, division);
