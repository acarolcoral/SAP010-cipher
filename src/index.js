import cipher from './cipher.js';

// Elementos de entrada

const caixa_entrada = document.getElementById('caixaEntrada');
const chave_deslocamento = (document.getElementById('chave'));
const botão_codificar = document.getElementById('botãoCodificar');
const botão_decodificar = document.getElementById('botãoDecodificar');
const caixa_saida = document.getElementById('caixaSaida');

// Botão Codificar

botão_codificar.addEventListener('click', function () {
  const palavra = caixa_entrada.value;
  const deslocamento = parseInt(chave_deslocamento.value);
  const textoCodificado = cipher.encode (deslocamento, palavra);
  caixa_saida.value = textoCodificado;
}
);

// Botão Decodificar

botão_decodificar.addEventListener('click', function () {
  const palavra = caixa_entrada.value;
  const deslocamento = parseInt(chave_deslocamento.value);
  const textoDecodificado = cipher.decode (deslocamento, palavra);
  caixa_saida.value = textoDecodificado;
}
);



