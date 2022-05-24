/*function mostraDica()
{
document.getElementById("dicaTexto").style.display = "inline";

}*/




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
function validaLogin(e, quantidade)
{
var valorLogin = document.getElementById("txtLogin");
var log = txtLogin.value;
if(log.length > quantidade)
{e.preventDefault();
    alert("Login deve conter no máximo " + quantidade + " caracteres");
}
}


// abaixo adicionaremos os eventos nas tags html, diretamente pelo Js


//associando evento blur no campo senha



document.getElementById("dicaTexto").style.display = "none";
var elIcone = document.getElementById("imgIcone");

elIcone.addEventListener("mouseout", esconderDica);

// a função mostrar dica foi substituida pela função anonima abaixo
//associando evento over no ícone de interrogação
elIcone.addEventListener("mouseover",function(e)
 {
   document.getElementById("dicaTexto").style.display="inline";
}
);

var elLogin = document.getElementById("txtLogin"); // cria um referencia para tag pelo id
elLogin.addEventListener("blur", function(e){validaLogin(e, 8);})  // add  o evento blur para para a chamada da função anonima , parametro (e) é opcional
        /*Note que o corpo da função fica todo dentro do parâmetro de
addEventListener(). O argumento “e” é opcional.*/


