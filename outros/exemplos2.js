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

let idade = window.prompt("Digite sua idade: ");
idade > 120
  ? window.alert("Você não existe!")
  : 120 > idade && idade > 18
  ? window.alert("Você é adulto!")
  : 18 > idade && idade > 12
  ? window.alert("Você é adolescente!")
  : 12 > idade && idade > 0
  ? window.alert("Você é criança!")
  : window.alert("Você não existe!");
