function carConteudo(){
    document.getElementById("conteudo").innerHTML=" bla,bla,bla";
}

function mouseOver(){
    document.getElementById("mouseAlt").innerHTML=" Retire o mouse"; 
}

function mouseOut(){
    document.getElementById("mouseAlt").innerHTML= "Passe o mouse";
}
function convertexto(){
   var nome =document.getElementById("nome"); 
    nome.value = nome.value.toUpperCase();

}

function validarSenha(){
    var senha = document.getElementById("senha").value;

    if(senha == "" || senha.length <= 5){
        document.getElementById("erroSenha").innerHTML= "<span style='color:#ff0000;'> Preencher o campo senha com no minimo 6 caracteres </pan>";
    }else{
        document.getElementById("erroSenha").innerHTML= "<span style='color:#00FF00;'> Senha valida </span>";

    }
}