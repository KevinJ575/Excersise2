// Declare una variable llamada 'challenge' y asígnala a un valor inicial '30DaysOfJavaScript'.
let challenge = '30DaysOfJavaScript';

// Imprime la cadena en la consola del navegador usando console.log()
console.log(challenge);

// Imprime la longitud de la cadena en la consola del navegador usando console.log()
console.log(challenge.length);

// Cambia todos los caracteres de la cadena a letras mayúsculas usando el método toUpperCase()
console.log(challenge.toUpperCase());

// Cambia todos los caracteres de la cadena a letras minúsculas usando el método toLowerCase()
console.log(challenge.toLowerCase());

// Corta (corta) la primera palabra de la cadena usando el método substr() o substring()
console.log(challenge.substr(2)); 

// Corta la frase 'DaysOfJavaScript' de '30DaysOfJavaScript'.
console.log(challenge.substr(2, 14));

// Comprueba si la cadena contiene la palabra 'Script' usando el método includes()
console.log(challenge.includes('Script'));

// Divide la cadena en una matriz usando el método split()
let challengeArray = challenge.split('');
console.log(challengeArray);

// Divide la cadena '30díasdeJavaScript' en espacios usando el método split()
let challengeWords = challenge.split(' ');
console.log(challengeWords);

// 'Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon' divide la cadena por la coma y cámbiala a una matriz.
let companies = 'Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon';
let companiesArray = companies.split(',');
console.log(companiesArray);

// Cambia '30DaysOfJavaScript' a '30DaysOfNode' usando el método replace()
let newChallenge = challenge.replace('JavaScript', 'Node');
console.log(newChallenge);

// ¿Cuál es el carácter en el índice 15 en la cadena '30DaysOfJavaScript'? Utiliza el método charAt()
console.log(challenge.charAt(15));

// ¿Cuál es el código de carácter de 'J' en la cadena '30DaysOfJavaScript' usando charCodeAt()?
console.log(challenge.charCodeAt(6)); // El índice 6 corresponde a 'J'.

// Utiliza indexOf para determinar la posición de la primera aparición de 'a' en '30DaysOfJavaScript'
console.log(challenge.indexOf('a'));

// Utiliza lastIndexOf para determinar la posición de la última aparición de 'a' en '30DaysOfJavaScript'
console.log(challenge.lastIndexOf('a'));

// Utiliza indexOf para encontrar la posición de la primera aparición de la palabra 'porque' en una oración
let sentence = 'No puedes terminar una oración con porque porque porque es una conjunción';
console.log(sentence.indexOf('porque'));

// Utiliza lastIndexOf para encontrar la posición de la última aparición de la palabra 'porque' en una oración
console.log(sentence.lastIndexOf('porque'));

// Utiliza includes para encontrar la posición de la primera aparición de la palabra 'porque' en una oración
console.log(sentence.includes('porque'));

// Utiliza trim() para eliminar cualquier espacio en blanco al principio y al final de una cadena
let stringWithWhitespace = ' 30DaysOfJavaScript ';
console.log(stringWithWhitespace.trim());

// Utiliza startsWith() con la cadena '30DaysOfJavaScript' y haz que el resultado sea verdadero
console.log(challenge.startsWith('30DaysOfJavaScript'));

// Utiliza endsWith() con la cadena '30DaysOfJavaScript' y haz que el resultado sea verdadero
console.log(challenge.endsWith('30DaysOfJavaScript'));

// Utiliza match() para encontrar todas las 'a' en '30DaysOfJavaScript'
console.log(challenge.match(/a/g));

// Utiliza concat() y combina '30DaysOf' y 'JavaScript' en una sola cadena '30DaysOfJavaScript'
let part1 = '30DaysOf';
let part2 = 'JavaScript';
console.log(part1.concat(part2));

// Utiliza repeat() para imprimir '30DaysOfJavaScript' 2 veces
console.log(challenge.repeat(2));
