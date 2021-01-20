var frutas = ["Abacate", "abacaxi", "morango", "açai", "cereja", "tomate"];

//Contar a quantidade de itens no array

console.log("Quantidade de tipo de frutas: " + frutas.length );

//Acessar primeiro item do Array

console.log("Primeiro tipo de fruta " + frutas[0]);

//Acessar um item do Array
console.log("Primeiro tipo de fruta " + frutas[5]);

//Acessar o último item do Array
console.log("Primeiro tipo de fruta " + frutas[frutas.length-1]);

//Adicionar um item ao final do Array
frutas.push("limao");

//Adicionar no inicio do Array
frutas.unshift("manga");

// Remover um item do final do Array
frutas.pop();

//Remover um item do inicio do Array 
frutas.shift();

//Remover um item pela pósição do indice
//frutas.splice(posição, n);
//A partir da posição (pos) em direção ao fim do array
//(n) define o número de itens a se remover
frutas.splice(3, 2);

// Ler o array completo
frutas.forEach(function(item, indice, array){
console.log(item, indice);
});

