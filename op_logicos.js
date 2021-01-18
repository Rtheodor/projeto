
var  nota = 8;
var  falta =27;

//quando um é falso e o outro é verdadeiro

if((nota < 4) || (falta > 25)){
    document.write(" Reprovado: " + nota + " Faltas: " + falta + "<br>");
};

//Quando os dois são verdadeiro
nota = 8;
  falta = 27;

if((nota < 4) && (falta > 25)){
    document.write(" Reprovado: " + nota + " Faltas: " + falta + "<br>");
};

var situacao = !false;
document.write(" Situação: " + situacao + "<br>");