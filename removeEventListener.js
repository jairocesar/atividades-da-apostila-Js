function mostraDica()
{
document.getElementById("dicaTexto").style.display = "inline";

}


function esconderDica(){
    document.getElementById("dicaTexto").style.display="none"
}


function validaSenha()
{
var campoSenha = document.getElementById("txtSenha");
var valorSenha = txtSenha.value;
if(valorSenha.length < 6)
{
alert("Senha precisa ter ao menos 6 caracteres");
return false;
}
else
{
return true;
}
}


// abaixo adicionaremos os eventos nas tags html, diretamente pelo Js
document.getElementById("dicaTexto").style.display = "none";

//associando evento blur no campo senha

//associando evento over no ícone de interrogação
var elIcone = document.getElementById("imgIcone");
elIcone.addEventListener("mouseover", mostraDica);
elIcone.addEventListener("mouseout", esconderDica);


// removendo evento  blur da tag html
var removeEvento = document.getElementById("txtSenha");
removeEvento.removeEventListener("blur",validaSenha);