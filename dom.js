//GETELEMENTBYID
document.getElementById("exemplo-um").innerHTML= "Inserir texto no exemplo ";


//GETELEMENTBYNAME

function exemploDois(){
    var nomeElemento = document.getElementsByName("curso");
    console.log(nomeElemento);
}

//GETELEMENTBYTAGNAME

function exemploTres(){
    var nomeTag = document.getElementsByTagName("span");
    console.log(nomeTag);
}

//GETELEMENTBYTAGNAME

function exemploQuatro(){
   var nomeTagLista = document.getElementsByTagName("li");
   console.log(nomeTagLista);
}

function exemploCinco(){
    var nomeClasse = document.getElementsByClassName("produto");
    console.log(nomeClasse);
}