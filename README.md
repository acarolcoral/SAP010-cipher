# I && I

## Índice

* [1. I &&n I](#1-i-&&-i)
* [2. Sobre o projeto Cifra de César](#2-sobre-o-projeto-cifra-de-césar)
* [3. Objetivos](#3-objetivos)
* [4. Processo de criação](#5-processo-de-criação)
* [5. Desafios e aprendizados](#5-desafios-e-aprendizados)
* [6. Aprimoramentos futuros](#6-aprimoramentos-futuros)


***

## 1. I && I

Os usuários são pessoas que tenham interesse e ou necessidade de escrever, textos dos quais não queira compartilhar com terceiros. 

O teor dos textos pode variar desde desabafos, escritos terapêuticos e artísticos, ou mesmo senhas de uso pessoal. 

A página I && I é  um decodificador baseado em cifra de césar, foi criada com o intuito de ser uma aliada para as pessoas que por circunstâncias diversas não conseguem ter a privacidade que desejam. Ao acessar a página o usuário digita seu texto, escolhe uma chave será possível criptografar uma mensagem/texto e apenas com a chave será possível ter acesso a mensagem original. Por sua vez, a mensagem codificada pode ser manipulada ou compartilhada sem correr o risco de ser descoberta por pessoas sem permissão.

A estrutura da página foi pensada para entregar uma maneira simples de interagir. As duas caixas de texto de entrada e de saída respectivamente, se encontram lado a lado, demonstrando uma cadeia de fluxo onde o texto passa a ser criptografado/descriptografado com a escolha de uma chave de deslocamento, esta se encontra no meio das duas caixas de texto. Após digitar a mensagem e em seguida a chave, a usuária escolhe a ação desejada entre os botões de codificar e decodificar. O resultado se seguirá  na caixa de texto a direita.

## 2. Sobre o projeto Cifra de César

Cifrar significa codificar. A cifra de César é um dos primeiros tipos de criptografias conhecidas na história. O imperador romano Júlio César utilizava essa cifra para enviar ordens secretas aos seus generais no campo de batalha.

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um tipo de cifra por substituição, em que cada letra do texto original é substituida por outra que se encontra há um número fixo de posições (deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (offset) de 3 posições:

Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
Alfabeto com cifra: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
A letra A será D
A palavra CASA será FDVD
Atualmente todas as cifras de substituição alfabética simples, são decifradas com facilidade e não oferecem muita segurança na comunicação por si mesma, mas a cifra de César muitas vezes pode fazer parte de um sistema mais complexo de criptografia, como a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 3. Objetivos

Nessa primeira aplicação web do bootcamp foram trabalhados os fundamentos do JavaScript, incluindo conceitos como variáveis, condicionais e funções, bem como eventos e manipulação básica de DOM, fundamentos HTML e CSS.

### Os objetivos gerais deste projeto são os seguintes:

* Trabalhar com base em um boilerplate, a estrutura básica de um projeto em diferentes
  pastas (através de módulos em JS).
* Conhecer as ferramentas de manutenção e melhoria do código (linters e testes
  unitários).
* Aprender sobre objetos, estruturas, métodos e iteração (loops) em JavaScript
* Implementar controle de versão com git (e a plataforma github).

## 4. Processo de criação

O processo de construção envolveu a realização de um protótipo de baixa fidelidade que consistiu em um esboço feito com caneta e papel de caderno e a partir desse esboço através da plataforma Figma construir um protótipo de alta fidelidade. Nessa etapa importante, realizei o posicionamento e decidi a paleta de cores dos elementos.

Como ferramentas de planejamento e organização utilizei o trello e o google docs, mais especificamente os apps de planilhas e documentos de texto

## 5. Desafios e aprendizados

Os maiores desafios durante essa jornada foram conciliar os diversos papéis que hoje recaem sobre mim. Ser mulher, mãe, e realizar uma transição de carreira em pleno puerpério me colocaram frente às minhas grandes dificuldades e por que não, as minhas  dores que estou dissecando e curando durante esse período intenso de bootcamp na Laboratória. Aprendi muito com todo o processo, que por sua vez acabou se estendendo em relação ao prazo estipulado de entrega, com tudo, aproveitei bastante os espaços de suporte ofertados como as OHs técnicas e com a CDP que foram de imensa ajuda para  enfrentar meus medos, bem como me acolherem nesse início de jornada na programação.

## 6. Aprimoramentos futuros

* Neste projeto desenvolvi os critérios mínimos de aceitação que exigia criptografar e descriptografar uma mensagem  com um alfabeto       simplificado - apenas letras maiúsculas. Como marco opcional existia a opção de adicionar suporte para letras minúsculas e outros caracteres e pretendo desenvolver essa parte em um outro momento.
* Estilização dos botões e das caixas de texto
* Botão de copiar.
