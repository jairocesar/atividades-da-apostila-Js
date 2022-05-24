




function esconderDica(){
    document.getElementById("dicaTexto").style.display="none";
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




