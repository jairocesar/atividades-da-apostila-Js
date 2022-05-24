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
/**Bloco global*/
document.getElementById("dicaTexto").style.display = "none";r
var removeEvento = document.getElementById("imgIcone");
removeEvento.removeEventListener("mouseover",mostraDica);