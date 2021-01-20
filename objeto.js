
//criando primeiro objeto de forma literal

var cadeira = {
    cor: "preto",
    altura: 1.18,
    largura: 74,
    profundidade: 64, 
    peso: 17
};

document.write(" Cor da adeira: " + cadeira.cor + "<br>");
document.write(" Altura da adeira: " + cadeira.altura + "<br>");
document.write(" Largura da cadeira: " + cadeira.largura + "<br>");
document.write(" Profundidade da cadeira: " + cadeira.profundidade + "<br>");
document.write(" Peso da cadeira: " + cadeira.peso + "<br><hr>");

//criando segundo objeto
carro ={
    cor: "Branca",
    marca: "Ferrari",
    modelo: "F40",
    peso: 1.110,
    motor: "2,8 L V8 Bi- Turbo",
    velocidade: 330,
};

document.write(" Cor do carro: " + carro.cor + "<br>");
document.write(" Fabricante do carro: " + carro.marca + "<br>");
document.write(" Modelo do carro: " + carro.modelo + "<br>");
document.write(" Peso do carro: " + carro.peso + "<br>");
document.write(" Motor do carro: " + carro.motor + "<br>");
document.write(" Velocidade do carro: " + carro.velocidade + " Km/h " + "<br>");

// add propriedade valor do carro

carro.valor = "23 Milhões";
document.write(" Valor do carro é de: " + carro.valor + " de reais" + "<hr>"); 

//deletar propriedade

delete carro.cor;
document.write("Cor do carro: " + carro.cor + "<br>" + "<hr>")

//novo objeto

var mesa = new Object();
mesa.cor = "Amarela";
document.write(" Cor da mesa " + mesa.cor + "<br>");