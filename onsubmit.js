function mostraDica()
{
document.getElementById("dicaTexto").style.display = "inline";

}

function esconderDica(){
    document.getElementById("dicaTexto").style.display="none"
}


function validaSenha(p) /*definiremos um parametro para incrementar o 
bom funcionamento do codigo elForm.addEventListener("submit",validaSenha);  */ 
{
var campoSenha = document.getElementById("txtSenha");
var valorSenha = txtSenha.value;
if(valorSenha.length < 6)
{
     p.preventDefault();
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
var elSenha = document.getElementById("txtSenha");
//elSenha.addEventListener("blur", validaSenha);
//associando evento over no ícone de interrogação
var elIcone = document.getElementById("imgIcone");
elIcone.addEventListener("mouseover", mostraDica);
elIcone.addEventListener("mouseout", esconderDica);


var elForm = document.getElementById("formPrincipal"); 
//elForm.onsubmit = validaSenha; // com esse metodo a loginca funciona corretamente, para o evento de submit

elForm.addEventListener("submit",validaSenha); /* ja esse metodo da maneira a ação de submit não é interrompida
 quando informamos um valor invalido no campo senha,  funcionou para outros eventos,
 porem não funciona corretamente para o submits,nesse caso
(maneira considerada padrão de fazer isso) é utilizando um objeto Event,Event é um tipo de objeto que mantém informações sobre um determinado
evento
*/




