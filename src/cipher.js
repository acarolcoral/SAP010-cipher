const cipher = {
  encode: function (palavra, deslocamento) { // Função que recebe como parâmetro a palavra e a chave de deslocamneto.
  // const primeira_letra = palavra [0];
  // const códigoAsciiPrimeiraLetra = palavra.charCodeAt(0);
  // console.log (primeira_letra);
  // console.log(códigoAsciiPrimeiraLetra);
  // const cifraAscii = ((códigoAsciiPrimeiraLetra - 65 + deslocamento) % 26) + 65;
  // console.log(cifraAscii);
  // const cifraString = String.fromCharCode(cifraAscii);
  // console.log(cifraString);


  if (typeof palavra !== "string" || deslocamento === "") { // Especifíca o tipo de um elemento
    throw new TypeError(        // Mostra uma mensagem de erro
      "Digite sua mensagem apenas com palavras e selecione uma opção de deslocamento"
    );
  } else {  
    let palavraCodificada = ""; //Varável que guardará o texto codificado
    for ( let i = 0; i < palavra.length; i++) {   //looping que fará o código executar a cifra em todos os caracteres
        let caractere = palavra [i]; // contador de índice de caractere (paga cada caractere).
       if (caractere.match(/[A-Z]/i)) { //Expressão regular que transforma? ou verifica? em/se é letra maiúscula.
        const caractereCodificado = palavra.charCodeAt(i); // Transformar em códico ASCIi
        if (caractereCodificado >= 65 && caractereCodificado <= 90) { // Verifica se está entre o código de A a Z em ASCII.
          caractere = String.fromCharCode(((caractereCodificado - 65 + deslocamento) % 26) + 65); // Cifrar e transformar em String
        }
       }        
    }
    return caractere; // Retorna o resultado
  }
  }
};

export default cipher;
