//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

/*Para conseguirmos, de fato, alterar o conteúdo do HTML com o JavaScript,
 precisamos capturar esse fragmento e selecionar h1. Conseguimos fazer isso usando uma palavra reservada chamada document.
Esse document ainda não capta o h1, já que o documento HTML tem muitos elementos. Para que ele saiba o que deve ser selecionado, usamos .querySelector().
É importante que o "S" esteja em maiúsculo, caso contrário, não vai funcionar. Trata-se de um case sensitive, que diferencia maiúsculas e minúsculas.
Desta forma, selecionamos o que queríamos.
O próximo passo é inserir um texto dentro desta tag. Para isso, vamos pegar a variável titulo, sem o uso de let,
 pois usamos apenas para criar esta variável, e chamar .innerHTML.*/
let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = geraNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
   let campo = document.querySelector(tag);
   campo.innerHTML = texto;
   responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
   exibirTextoNaTela('h1', 'Jogo do número secreto');
   exibirTextoNaTela('p', 'Escolha um número de 1 a 10');
} 

exibirMensagemInicial()

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número de 1 a 10');

//Por que utilizamos == e não =? Sempre que usamos =, queremos atribuir um valor.
//Quando usamos ==, queremos comparar um valor.
/* Quando temos um input e queremos apenas o valor inserido, utilizamos .value após a seleção que fizemos.
 Precisa ser escrito desta maneira. Lembre-se de colocar o ponto e vírgula ao final.*/
 
function verificarChute() {
   let chute = document.querySelector('input').value;
   console.log(chute == numeroSecreto);

   if(chute == numeroSecreto) {
      exibirTextoNaTela('h1', 'Na mosca!');
      let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
      let mensagemTentativas = `Você descobriu o número com ${tentativas} ${palavraTentativa}!`;
      exibirTextoNaTela('p', mensagemTentativas );
      document.getElementById('reiniciar').removeAttribute('disabled')
      //O id é um atributo que especifica o botão e deve ser único, não pode ser usado em outro lugar.]
      //lembrar de abrir e fechar parenteses para indicar que é uma função
   } else {
      if (chute > numeroSecreto){
         exibirTextoNaTela('p', 'O número secreto é menor');
      } else {
         exibirTextoNaTela('p', 'O número secreto é maior');
      }
      tentativas++;
      limparCampo ();
   }
}

/* Para gerar o número aleatório, utilizaremos o código que conhecemos: Math.random().
 Será uma função que multiplica por 10 e soma 1 para ter um número entre 1 e 10.
 A função Math.random() retorna um valor decimal, mas queremos um número inteiro.
 Por isso, colocamos a expressão matemática entre parênteses e utilizamos parseInt() para converter o resultado em um número inteiro.
 Ao gerar o número aleatório, queremos que a função nos retorne esse número que terá valor entre 1 e 10. 
 Para garantir esse comportamento, precisamos informar que queremos este retorno utilizando a palavra reservada return na linha 16, antes de toda a expressão matemática.
 O nome do método pode ser diferente em outras linguagens.*/

function geraNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

   if (quantidadeDeElementosNaLista == numeroLimite){
      listaDeNumerosSorteados = [];
   }
   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
   return gerarNumeroAleatorio();
   } else {
      listaDeNumerosSorteados.push(numeroEscolhido);
      console.log(listaDeNumerosSorteados)
      return numeroEscolhido;;
   }
}
/*Para verificarmos quantos elementos temos em uma lista, podemos utilizar nomeDaLista.length. Nesse caso, codamos numeros.length.
 O método .length sempre retorna a quantidade de elementos que temos na lista.
includes(), que verifica se o elemento está na lista.
 Se estiver, retorna true e, se não estiver, retorna false. Assim, podemos tomar decisões a partir desse resultado.*/
 /*É importante frisar que o includes() é algo específico do JavaScript.
  Pode ser que a linguagem que você escolheu para seguir na sua jornada tenha outro método ou nome para resolver o mesmo problema, mas, como o Gui mencionou,
   é sempre importante verificarmos se o problema que estamos enfrentando foi resolvido na documentação da linguagem
   Em JavaScript, o método para adicionar elementos na lista é o push(), mas em outras linguagens pode ter outros nomes.*/

function limparCampo(){
   chute = document.querySelector('input');
   chute.value = '';
}

function reiniciarJogo(){
   numeroSecreto = geraNumeroAleatorio();
   limparCampo();
   tentativas = 1;
   exibirMensagemInicial();
   document.getElementById('reiniciar').setAttribute('disabled', true)
}

/* Uma array no JavaScript é uma estrutura de dados que permite armazenar e organizar vários valores em uma única variável. 
Os valores em uma array podem ser de qualquer tipo de dado, como números, strings, objetos, outras arrays e assim por diante. 
As arrays em JavaScript são indexadas, o que significa que cada valor dentro dela é associado a um índice numérico, começando geralmente do índice 0.

let frutas = ["Maçã", "Uva", "Laranja"];

Os elementos de uma array são acessados usando índices numéricos, que começam em 0.

Para adicionar um elemento ao final da array, você pode usar o método push.
frutas.push("Morango");
console.log(frutas); // Saída: ["Maçã", "Uva", "Laranja", "Morango"]

Para remover o último elemento, você pode usar o método pop.
frutas.pop();
console.log(frutas); // Saída: ["Maçã", "Uva", "Laranja"]*/



