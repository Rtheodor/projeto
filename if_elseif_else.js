var nota = 8;

if(nota >= 7){
    document.write(" Aprovado: " + nota + "<br>");
}else if((nota < 7) && (nota >=4)){
    document.write(" Recuperação: " + nota + "<br>");

}else {
    document.write(" Reprovado: " + nota + "<br>");
};

var sol = false;
var nublado = false;

if (sol){
    document.write("Vamos para a praia!");
}else if(nublado){
    document.write("Vamos para o parque! ");
}else{
    document.write("Vamos ficar em casa e aprender JavaScript! ");
};