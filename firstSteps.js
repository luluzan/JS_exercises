//VARIABLES
    /*● Crear variables de diferentes tipos de datos: número, cadena de texto, booleano e imprimir su valor por
        la pantalla del navegador y la consola.*/
            let number = 10;
            let decimal = 14.25;
            let a = 20;
            let b = 6;
            let c = 9;
            let d = 2.5;
            let e = 7.1;
            console.log(number);
            console.log('Esto también son números: ' + 'a' + 'b' + 'c')
            document.write(number);
    
            let palabra1 = 'Esto';
            let palabra2 = 'es';
            let palabra3 = 'un';
            let palabra4 = 'string';
            let string = 'Esto también es un string';

            console.log('La palabra1 es "' + palabra1 +'".')
            console.log('La palabra2 es "' + palabra2 +'".')
            console.log('La palabra3 es "' + palabra3 +'".')
            console.log('La palabra4 es "' + palabra4 +'".')



            console.log('Esto es un string de varias palabras: "' + string + '.');
            document.write('Esto es una concateneción de strings. "' + palabra1 + ' ' + palabra2 + ' ' + palabra3 + ' ' + palabra4 + '".')
            window. print('Esto es un string de varias palabras: "' + string + '.');

            let boolean = true;
            let boolean2 = false; 
            console.log(boolean);
            console.log(boolean2);
            document.write(boolean);
            document.write(boolean2);


    /*● De las variables declaradas anteriormente, identifica las que son de tipo integer y realiza operaciones
        matemáticas básicas con las variables creadas anteriormente (suma, resta, multiplicación, división).
        Deberás imprimir el resultado por la pantalla del navegador y la consola.*/
        let suma = number + a;
        let resta =  c - b;
        let multiplicacion =  decimal * e;
        let division = a/b;

        console.log('El resultado de la suma de let number y let a es ' + suma + '. Este numero es un integer porque es un numero entero');
        console.log('El resultado de la resta de let c y let b es ' + resta + '.Este tambien es integer.');
        console.log('El resultado de la multiplicación de let decimal ('+ decimal +') y let e('+e+') es ' + multiplicacion + '.Este numero es tipo floar porque es un decimal.');
        console.log('El resultado de la división de let a y let b es ' + division + '. El resultado es un integer');

        document.write('El resultado de la suma de let number y let a es ' + suma + '. Este numero es un integer porque es un numero entero');
        document.write('El resultado de la resta de let c y let b es ' + resta + '.Este tambien es integer.');
        document.write('El resultado de la multiplicación de let decimal ('+ decimal +') y let e('+e+') es ' + multiplicacion + '.Este numero es tipo floar porque es un decimal.'); 
        document.write('El resultado de la división de let a y let b es ' + division + '. El resultado es un integer'); 
 
        


    /*● De las variables declaradas anteriormente, identifica las que son de tipo texto y concatena dichas
        cadenas de texto.Deberás imprimir el resultado por la pantalla del navegador y la consola.
        */

        console.log('Esto es una concateneción de strings. "' + palabra1 + ' ' + palabra2 + ' ' + palabra3 + ' ' + palabra4 + '".')
        console.log('Esto es un string de varias palabras: "' + string + '.');
        document.write('Esto es una concateneción de strings. "' + palabra1 + ' ' + palabra2 + ' ' + palabra3 + ' ' + palabra4 + '".')
        window. print('Esto es un string de varias palabras: "' + string + '.');

        console.log(boolean);
        console.log(boolean2);
        document.write(boolean);
        document.write(boolean2);




//FUNCIONES
    /*● Crear una función que imprima por la pantalla del navegador y la consola el mensaje "Hola, [nombre]"
        con un parámetro para el nombre.*/
    /*● Crear función que reciba como parámetros dos números y que devuelva la suma de ellos. Deberás
        imprimir el resultado por la pantalla del navegador y la consola.*/
    /*● Crear función que determine si un número es par o impar. Deberás imprimir el resultado por la pantalla
        del navegador y la consola.*/


/*OBJETOS
Todo lo que retorne cada función se debe imprimir el resultado por la pantalla del navegador y la consola.
● Crear un objeto carro haciendo la abstracción de sus atributos y un objeto anidado.
● Crear una función que devuelva la marca del carro.
● Crear una función que devuelva la cantidad de puertas que tiene el carro.
● Crear una función que devuelva un atributo del objeto anidado.*/


/*ARRAYS
● Crear un array de 10 números
● Crear una función que imprima en consola todos los números de un array (Investigar ciclo for)
● Crear una función que añada un número al array
● Crear una función que elimine los números pares de ese array.
● Crear una función que devuelva el número mayor de un array.
● Crear una función que devuelva el número menor de un array.
● Crear un función que convierta en minúsculas todas las letras de un texto.
● Crear una función que convierta en mayúsculas todas las letras de un texto.
● Crear una función que reciba un array de nombres y que convierta la primera letra de cada nombre en
mayúscula.*/


/*MANIPULACIÓN DEL DOM
● Crear un botón en HTML y usar JavaScript para mostrar un mensaje cuando se hace clic.
● Cambiar el contenido de un elemento HTML mediante JavaScript.
● Ocultar y mostrar elementos HTML utilizando JavaScript.
●
● Crear un array de 10 nombres.
● Crear una función que imprima en pantalla una lista con los nombres del array de nombres.
● Crear un array de números.
● Crear una función que pinte en pantalla cuántos números tiene el array de números.
● Crea los nodos necesarios para imprimir un formulario.
● Crea los nodos necesarios para imprimir una tabla.
● Crea array de objetos 10 objetos con su respectivos key:value. Cada objeto deberá tener las siguientes
keys:
id, name, status, species, type, gender
El value de cada key lo asignas tú
● Imprime cada elemento del objeto dentro de la tabla que creaste anteriormente.*/