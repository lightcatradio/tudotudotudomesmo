// =-=-=-=-=-=-=-=-=-= Exercício 1 =-=-=-=-=-=-=-=-=-=

// let numero = window.prompt("Digite um número: ");
// numero % 2 == 0 ? window.alert("PAR!") : window.alert("IMPAR!");

// =-=-=-=-=-=-=-=-=-= Exercício 2 =-=-=-=-=-=-=-=-=-=

// let idade = window.prompt("Digite sua idade: ");
// idade >= 18 ? window.alert("MAIOR DE IDADE!") : window.alert("MENOR DE IDADE!");

// =-=-=-=-=-=-=-=-=-= Exercício 3 =-=-=-=-=-=-=-=-=-=

// let valor = window.prompt("Digite o valor da compra: ");
// let novoValor;
// valor > 100 ? (novoValor = valor - valor / 10) : (novoValor = valor);
// valor > 100
//   ? window.alert("Desconto aplicado! O novo valor é de " + novoValor)
//   : window.alert("Desconto não aplicado!");

// =-=-=-=-=-=-=-=-=-= Exercício 4 =-=-=-=-=-=-=-=-=-=

// let salario = window.prompt("Digite o valor do salário: ");
// let novoSalario;
// salario < 1500
//   ? (novoSalario = salario + salario / 5)
//   : (novoSalario = salario + salario / 10);
// salario < 1500
//   ? window.alert("Aumento de 20% aplicado! O novo salário é de " + novoSalario)
//   : window.alert("Aumento de 10% aplicado! O novo salário é de " + novoSalario);

// =-=-=-=-=-=-=-=-=-= Exercício 5 =-=-=-=-=-=-=-=-=-=

// let numero = window.prompt("Digite um número: ");
// numero == 0
//   ? window.alert("O número é zero!")
//   : numero > 0
//   ? window.alert("O número é positivo!")
//   : numero < 0
//   ? window.alert("O número é negativo!")
//   : null;

// =-=-=-=-=-=-=-=-=-= Exercício 6 =-=-=-=-=-=-=-=-=-=

// const notas = [
//   window.prompt("Digite a primeira nota: "),
//   window.prompt("Digite a segunda nota: "),
//   window.prompt("Digite a terceira nota: "),
// ];
// notas.reduce((soma, proximo) => soma + proximo) / 3 >= 7
//   ? window.alert("Você foi aprovado!")
//   : window.alert("Você não foi aprovado...");

// =-=-=-=-=-=-=-=-=-= Exercício 7 =-=-=-=-=-=-=-=-=-=

// let idade = window.prompt("Digite sua idade: ");
// idade > 120
//   ? window.alert("Você não existe!")
//   : 120 > idade && idade > 18
//   ? window.alert("Você é adulto!")
//   : 18 > idade && idade > 12
//   ? window.alert("Você é adolescente!")
//   : 12 > idade && idade > 0
//   ? window.alert("Você é criança!")
//   : window.alert("Você não existe!");

// =-=-=-=-=-=-=-=-=-= Exercício 8 =-=-=-=-=-=-=-=-=-=

// function calcular(numero1, numero2, sinal) {
//   return sinal === "+"
//     ? numero1 + numero2
//     : sinal === "-"
//     ? numero1 - numero2
//     : sinal === "/"
//     ? numero1 / numero2
//     : sinal === "*"
//     ? numero1 * numero2
//     : null;
// }

// window.alert(
//   calcular(
//     window.prompt("Digite um número: "),
//     window.prompt("Digite outro número: "),
//     window.prompt("Digite a operação (+, -, * ou /): ")
//   )
// );

// =-=-=-=-=-=-=-=-=-= Exercício 9 =-=-=-=-=-=-=-=-=-=

// function calcularIMC(peso, altura) {
//   let imc = peso / (altura * altura);
//   return imc <= 18.5
//     ? "Você está em BAIXO PESO"
//     : 18.6 <= imc && imc <= 24.9
//     ? "Você está em PESO NORMAL"
//     : 25 <= imc && imc <= 29.9
//     ? "Você está em SOBREPESO"
//     : 30 <= imc
//     ? "Você está em OBESIDADE"
//     : null;
// }

// window.alert(
//   calcularIMC(
//     window.prompt("Digite seu peso (kg):"),
//     window.prompt("Digite sua altura (m):")
//   )
// );

// =-=-=-=-=-=-=-=-=-= Exercício 10 =-=-=-=-=-=-=-=-=-=

// function calcularNota(nota) {
//   nota *= 10;
//   return 100 >= nota && nota >= 90
//     ? "Sua nota é A"
//     : 89 >= nota && nota >= 80
//     ? "Sua nota é B"
//     : 79 >= nota && nota >= 70
//     ? "Sua nota é C"
//     : 69 >= nota && nota >= 60
//     ? "Sua nota é D"
//     : 59 >= nota
//     ? "Sua nota é F"
//     : null;
// }

// window.alert(calcularNota(window.prompt("Digite sua nota (0-10): ")));

// =-=-=-=-=-=-=-=-=-= Exercício 11 =-=-=-=-=-=-=-=-=-=
