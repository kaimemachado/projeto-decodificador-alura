
//ATRIBUIÇÃO DAS VARIAVEIS

var btnCrip = document.querySelector(".criptografar");

var btnDescp = document.querySelector(".descriptografar");

var aparecePrimeiro = document.querySelector(".antes-result");

var apareceResultado = document.querySelector(".aparece_resultado");

var resultado = document.querySelector(".txt_cript");

var btnCopiar = document.querySelector(".copiar");

var entra = document.querySelector("#entra");

//ATRIBUINDO AS FUNÇÕES AOS BOTÕES 
btnCrip.onclick = encriptografar;

// btnDescp.onclick = descriptografar;
btnDescp.onclick = descriptografar;

btnCopiar.onclick = function cripCopiado(){
  limpa();
  copiarTexto();
}

//MOSTRA MENSAGEM CRIPTOFADA NO CAMPO DE RESULTADO
function encriptografar(){
  ocultar();
  aparece();
  resultado.textContent = encodeReplace(recuperaTexto());
}

//MENSAGEM CRIPTOGRADA COPIADA OU INSERIDA PELO USUARIO PARA DESCRIPTOGRAFAR
function descriptografar(){
  ocultar();
  aparece();
  resultado.textContent = decodeReplace(recuperaTexto());
}

//SEGREDO DA CRIPTOGRAFIA
function encodeReplace(message) {
  return message
          .replace(/e/g,"enter")
          .replace(/i/g,"imes")
          .replace(/a/g,"ai")
          .replace(/o/g,"ober")
          .replace(/u/g,"ufat");
}

//SEGREDO DA DESCRIPTOGRAFIA
function decodeReplace(message) {
  return message
          .replace(/enter/g,"e")
          .replace(/imes/g,"i")
          .replace(/ai/g,"a")
          .replace(/ober/g,"o")
          .replace(/ufat/g,"u");
}

//RECEBE O VALOR INICIAL DIGITADO PELO USUARIO
function recuperaTexto(){
  return entra.value;
}

//ATRIBUI COPIA DO TEXTO CRIPTOGRAFADO AO BOTÃO COPIAR
function copiarTexto() {
  entra = document.getElementById("copy");
  navigator.clipboard.writeText(entra.value);
  return entra.value
  // alert("O texto é: " + entra.value);
}

//ADICIONA A CLASSE OCULTAR NA DIV .aparece_primeiro
function ocultar(){
  aparecePrimeiro.classList.add("ocultar");
}

//REMOVE A CLASSE OCULTAR NA DIV .aparece_resultado
function aparece(){
  apareceResultado.classList.remove("ocultar");
}

//LIMPA A TELA
function limpa(){
  aparecePrimeiro.classList.remove("ocultar");
  apareceResultado.classList.add("ocultar");
  document.getElementById("entra").value = '';
}