var valorUm = 10;
var valorDois = 10;

document.write("<h2>Operador de comparacao: igual a </h2>");
if(valorUm == valorDois){
    document.write(valorUm + " é igual a " + valorDois);
}else{
    document.write( valorUm + " é diferente de " + valorDois);
}

 valorUm = 10;
 valorDois = 9;

document.write("<h2>Operador de comparacao: diferente a </h2>");
if(valorUm != valorDois){
    document.write(valorUm + " é diferente de " + valorDois);
}else{
    document.write( valorUm + " é igual a " + valorDois);
}

 valorUm = 9;
 valorDois = 10;

document.write("<h2> OPerador de comparacao: menor que </h2>");
if(valorUm < valorDois){
    document.write(valorUm + " é menor que " + valorDois);
}else{
    document.write( valorUm + " não é menor que " + valorDois);
}

 valorUm = 10;
 valorDois = 9;

document.write("<h2> OPerador de comparacao: maior que </h2>");
if(valorUm > valorDois){
    document.write(valorUm + " é maior que " + valorDois);
}else{
    document.write( valorUm + " Não é maior que " + valorDois);
}

 valorUm = 9;
 valorDois = 9;

document.write("<h2>OPerador de comparacao: menor ou igual que </h2>");
if(valorUm <= valorDois){
    document.write(valorUm + " é menor que " + valorDois);
}else{
    document.write( valorUm + " é maior que " + valorDois);
}

 valorUm = 10;
 valorDois = 9;

document.write("<h2>OPerador de comparacao: maior e igual que </h2>");
if(valorUm >= valorDois){
    document.write(valorUm + " é maior ou igual a " + valorDois);
}else{
    document.write( valorUm + " não é maior ou igual a " + valorDois);
}