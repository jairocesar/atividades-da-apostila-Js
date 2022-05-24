function desabilitar() // função que desabilita o input, ou otro componente
{
var formElem = document.getElementById("formPrincipal");
for(var i = 0; i < formElem.elements.length; i++)
{
formElem.elements[i].disabled = true;
}
}



function habilitar()// função que habilita o input, ou outro component
{
var formElem = document.getElementById("formPrincipal");
for(var i = 0; i < formElem.elements.length; i++)
{
formElem.elements[i].disabled = false;
}
}


function apagar() // apaga o formulario da pagina, somente da visualização do usuario
{
var formElem = document.getElementById("formPrincipal");
formElem.style.display = "none";
}

function recuperar(){ // recupera o formulario apagado da pagina, tras de volta para a visulalização do usuario
    var formElem=document.getElementById("formPrincipal");
    formElem.style.display="block";
}


// APLICA UMA FORMATAÇÃO DE FONTE NOS TESTOS
/*** Executa no carregamento da página */
var listaP = document.getElementsByTagName("p");
for(var i = 0; i< listaP.length; i++)
{
listaP[i].style.fontSize = "18px";
listaP[i].style.fontFamily = "Helvetica, sans-serif";
listaP[i].style.margin = "20px 10px 20px 10px";
}
/****/