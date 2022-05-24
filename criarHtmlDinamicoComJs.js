var novoLi = document.createElement("li"); // criando um elemento li
    var textoDoLi = document.createTextNode("Novo item de li"); // criando um texto para li
    var elementoUl = document.getElementsByTagName("ul")[0];// pegando na na extrutura html o primeiro elemento ul que encontrar
    novoLi.appendChild(textoDoLi); // adiciona textoDoLi como filho de novoLi 
    elementoUl.appendChild(novoLi); // adiciona novoLi como filho de elementoUl
    
    // assim um novo elemento li passa a existir como elemento filho de ul, sem
    // nescessariamente aparecer dentro da estrutura ul dentro da estrutura html, 
    // pois esse li: todo o seu codigo de atribuição esta definido pelo js  

//segundo li
var novoLi2 = document.createElement("li");
var textoDoLi2 = document.createTextNode("segundo item de li");
var elementoUl2 = document.getElementsByTagName("ul")[0]; //rimeiro elemento "ul" encontrado
novoLi2.appendChild(textoDoLi2);
elementoUl2.appendChild(novoLi2);


// criando uma nova div
    var novodiv = document.createElement("div"); // cria uma div
    var novoh1 = document.createElement("h1");// cria um h1
    var textodeh1 = document.createTextNode("texto de h1");// cria o texto para h1
      
    var corpo = document.getElementsByTagName("body")[0]; // encontro a tag especifica onde eu quero que o novo elemento div seja criado

    novodiv.appendChild(novoh1); // defino a tag h1 como filho de div
    novoh1.appendChild(textodeh1);// defino um texto como filho de h1   
    corpo.appendChild(novodiv);// defino o novo elemento div como sendo filho de body 


    // apagando um elemento de forma dinamica

    var removeli = document.getElementsByTagName("li")[0]; // encontra o primeiro elemento li que é o que queremos excluir, "iphone"
    var pai = removeli.parentNode; //na variavel pai sera atribuido, o elemento pai de de li atravez de "parentNode"
    pai.removeChild(removeli); // remove o elemento que é filho do elemento atribuido na variavel pai, 

