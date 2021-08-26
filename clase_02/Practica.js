// Expresión de función que itera sobre las letras de la palabra con un intervalo entre cada console.log

const mostrarLetras = (palabra, mensajeFinal) => { 

    let index = 0;

    const unaLetra = palabra => {

        console.log (palabra[index]);

        index++; // En cada iteración de setInterval el index se va a incrementar.

        if (index > palabra.length - 1) { 

            clearInterval(intervalRef); // Detener la iteración usando la referencia (intervalRef)
            mensajeFinal() // Mostrar el mensaje de fin (Terminé!).
        }     
    };

    let intervalRef = setInterval (unaLetra, 1000, palabra); 
    
    // setInterval debe estar declarado como expresión de función para tener una referencia (intervalRef).
    // setInterval toma como primer param el callback, como segundo param los milisegundos 
    // y como tercer param el parámetro del callback.
};

const fin = () => console.log('Terminé!');

const mostrarConPausa = pausa => { setTimeout( () => mostrarLetras('¡Hola!', fin), pausa ) };


// mostrarConPausa (0)

// mostrarConPausa (250)

// mostrarConPausa (500)

mostrarLetras('¡Hola!', fin); // Muestra las letras de ¡Hola! una por segundo y luego dice "Terminé".