const listaDeNumerosSorteados = [];
const numeroLimite = 40;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function falar(texto) {
  if (window.responsiveVoice) {
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
  }
}

function exibirTextoNaTela(tag, texto) {
  const campo = document.querySelector(tag);
  // textContent evita injeção acidental de HTML
  campo.textContent = texto;
  falar(texto);
}

function exibirMensagemInicial() {
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroLimite}`);
  // garante que o input respeite o limite configurado
  document.querySelector('input').setAttribute('max', String(numeroLimite));
}

exibirMensagemInicial();

function verificarChute() {
  const input = document.querySelector('input');
  const chute = Number(input.value);

  // validações básicas
  if (!input.value) {
    exibirTextoNaTela('p', 'Digite um número.');
    input.focus();
    return;
  }
  if (chute < 1 || chute > numeroLimite) {
    exibirTextoNaTela('p', `O número deve estar entre 1 e ${numeroLimite}.`);
    input.focus();
    input.select();
    return;
  }

  if (chute === numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou!');
    const palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    exibirTextoNaTela('p', `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    exibirTextoNaTela('p', chute > numeroSecreto ? 'O número secreto é menor' : 'O número secreto é maior');
    tentativas++;
    limparCampo();
  }
}

// se preferir manter o HTML com confirmarChute(), mantemos este alias:
function confirmarChute() {
  verificarChute();
}

function gerarNumeroAleatorio() {
  // quando esgotar todos os números, zera o histórico
  if (listaDeNumerosSorteados.length === numeroLimite) {
    listaDeNumerosSorteados.length = 0;
  }

  const numeroEscolhido = Math.floor(Math.random() * numeroLimite) + 1;

  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  }
  listaDeNumerosSorteados.push(numeroEscolhido);
  // console.log(listaDeNumerosSorteados);
  return numeroEscolhido;
}

function limparCampo() {
  const input = document.querySelector('input');
  input.value = '';
  input.focus();
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', 'true');
}
