function encrypt(text) {
    // Diccionario con las conversiones de letras
    const conversions = {
      'e': 'enter',
      'i': 'imes',
      'a': 'ai',
      'o': 'ober',
      'u': 'ufat'
    };
  
    // Variable para almacenar el texto encriptado
    let encryptedText = '';
  
    // Dividimos la cadena de entrada en una matriz de palabras
    const words = text.split(' ');
  
    // Recorremos cada palabra en la matriz
    for (let i = 0; i < words.length; i++) {
      // Variable para almacenar la palabra encriptada
      let encryptedWord = '';
  
      // Recorremos cada letra en la palabra
      for (let j = 0; j < words[i].length; j++) {
        // Si la letra está en el diccionario de conversiones, agregamos la versión encriptada a la palabra encriptada
        if (words[i][j] in conversions) {
          encryptedWord += conversions[words[i][j]];
        } else {
          // Si la letra no está en el diccionario, agregamos la letra sin cambios a la palabra encriptada
          encryptedWord += words[i][j];
        }
      }
  
      // Agregamos la palabra encriptada al texto encriptado
      encryptedText += encryptedWord;
  
      // Si no es la última palabra en la matriz, agregamos un espacio al texto encriptado
      if (i < words.length - 1) {
        encryptedText += ' ';
      }
    }
  
    // Devolvemos el texto encriptado
    return encryptedText;
}

function decrypt(text) {
  // Diccionario con las conversiones de letras
  const conversions = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
  };

  // Variable para almacenar el texto desencriptado
  let decryptedText = '';

  // Dividimos la cadena de entrada en una matriz de palabras
  const words = text.split(' ');

  // Recorremos cada palabra en la matriz
  for (let i = 0; i < words.length; i++) {
    // Variable para almacenar la palabra desencriptada
    let decryptedWord = '';

    // Recorremos cada letra en la palabra
    for (let j = 0; j < words[i].length; j++) {
      // Si la letra está en el diccionario de conversiones, agregamos la versión desencriptada a la palabra desencriptada
      if (words[i][j] in conversions) {
        decryptedWord += conversions[words[i][j]];
      } else {
        // Si la letra no está en el diccionario, agregamos la letra sin cambios a la palabra desencriptada
        decryptedWord += words[i][j];
    }
  }

  // Agregamos la palabra desencriptada al texto desencriptado
  decryptedText += decryptedWord;

  // Si no es la última palabra en la matriz, agregamos un espacio al texto desencriptado
  if (i < words.length - 1) {
    decryptedText += ' ';
  }
}

// Devolvemos el texto desencriptado
return decryptedText;
}

const encriptarButton = document.getElementById('encriptar');
encriptarButton.addEventListener('click', function() {
const inputElement = document.getElementById('texto');
const inputValue = inputElement.value;
const encryptedText = encrypt(inputValue);
const outputElement = document.querySelector('.textarea2');
outputElement.value = encryptedText;
});

const desencriptarButton = document.getElementById('desencriptar');
desencriptarButton.addEventListener('click', function() {
const inputElement = document.getElementById('texto');
const inputValue = inputElement.value;
const decryptedText = decrypt(inputValue);
const outputElement = document.querySelector('.textarea2');
outputElement.value = decryptedText;
});