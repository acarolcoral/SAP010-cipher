const cipher = {
  encode: function (deslocamento, palavra) { // Função que recebe como parâmetro a palavra e a chave de deslocamneto.
    if (typeof palavra !== "string" || typeof deslocamento !== "number") {  // Especifíca o tipo de um elemento
      throw new TypeError (        // Mostra uma mensagem de erro
        "Digite sua mensagem apenas com letras maiúsculas e selecione um número como opção de deslocamento"
      );
    } else {  
      let palavraCodificada = ""; //Varável que guardará o texto codificado
      for (let i = 0; i < palavra.length; i++) {   //looping que fará o código executar a cifra em todos os caracteres
        let caractere = palavra [i]; // contador de índice de caractere (paga cada caractere).
        if (caractere.match(/[A-Z]/i)) { //Expressão regular que transforma? ou verifica? em/se é letra maiúscula.
          const caractereCodificado = palavra.charCodeAt(i); // Transformar em códico ASCIi
          if (caractereCodificado >= 65 && caractereCodificado <= 91) { // Verifica se está entre o código de A a Z em ASCII.
            caractere = String.fromCharCode(((caractereCodificado - 65 + deslocamento) % 26) + 65); // Cifrar e transformar em String
            palavraCodificada += caractere; // concatenação
          }
        }  
      }
      return palavraCodificada; // Retorna o resultado
    }
  },

  decode: function (deslocamento, palavra) { // Função que recebe como parâmetro a palavra e a chave de deslocamneto.
    if (typeof palavra !== "string" || typeof deslocamento !== "number") {  // Especifíca o tipo de um elemento
      throw new TypeError (        // Mostra uma mensagem de erro
        "Digite sua mensagem apenas com letras maiúsculas e selecione um número como opção de deslocamento"
      );
    } else {  
      let palavraDecodificada = ""; //Varável que guardará o texto codificado
      for (let i = 0; i < palavra.length; i++) {   //looping que fará o código executar a cifra em todos os caracteres
        let caractere = palavra [i]; // contador de índice de caractere (paga cada caractere).
        if (caractere.match(/[A-Z]/i)) { //Expressão regular que transforma? ou verifica? em/se é letra maiúscula.
          const caractereCodificado = palavra.charCodeAt(i); // Transformar em códico ASCIi
          if (caractereCodificado >= 65 && caractereCodificado <= 91) { // Verifica se está entre o código de A a Z em ASCII.
            caractere = String.fromCharCode(((caractereCodificado - 91 - deslocamento) % 26) + 91); // Decifrar e transformar em String
            palavraDecodificada += caractere; // Concatenação
          } 
        }   
      }
      return palavraDecodificada; // Retorna o resultado
    }
  }
};

export default cipher;
