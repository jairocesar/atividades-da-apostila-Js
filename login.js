function mostraDica() // mostra a dica de como preencher  o campo senha
{
document.getElementById("dicaTexto").style.display = "inline"; // faz aparecer o texto da tag span com a dica de senha
}

function esconderDicadeSenha(){ // esconde a dica de como preencher o campo senha da tag span
    document.getElementById("dicaTexto").style.display="none";
}
function validaSenha() // verifica se o preenchimento da senha esta correto
{
var campoSenha = document.getElementById("txtSenha");
var valorSenha = txtSenha.value;
if(valorSenha.length < 6)
{
alert("Senha precisa ter ao menos 6 caracteres");// mostra no topo um erro relacionado ao preenchimento da senha
return false;
}
else
{
return true;
}
}
/**Bloco global*/
document.getElementById("dicaTexto").style.display = "none"; //esconde a dica de preenchimento de senha
var elForm = document.getElementById("formPrincipal");
var pegaSenha=document.getElementById("txtSenha"); // seleciona o elemento html input para atribuir ao campo de senha um evento on blur
//pegaSenha.onblur=validaSenha;//associando evento blur no campo input senha
elForm.onsubmit = validaSenha; // associoando  um evento onsubmit no formulario
//associando evento over no ícone de Imagaen interrogação

var iconeInterrogacao=document.getElementById("imgIcon"); // seleciona a imagem"icone interrogação" atravez do id imgIcon, para atribuir a img os eventos mouse over e mouse out
iconeInterrogacao.onmouseover = mostraDica; // associa o evento mouse over ao icone pelo id imgIcon
iconeInterrogacao.onmouseout = esconderDicadeSenha;// associa o evento mouse out ao icone de interrogação