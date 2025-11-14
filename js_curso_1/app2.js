// 1. Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log("Seja bem-vindo(a) ao exercício de JavaScript!");

// -----------------------------------------------------------------

// 2. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome = "William"; // Você pode trocar "Aline" pelo seu nome
console.log(`Olá, ${nome}!`);

// -----------------------------------------------------------------
/*
// 3. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
// (Vamos reutilizar a variável 'nome' da etapa anterior)
alert(`Olá, ${nome}!`);

// -----------------------------------------------------------------

// 4. Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let linguagemFavorita = prompt("Qual a linguagem de programação que você mais gosta?");
console.log(`Sua linguagem favorita é: ${linguagemFavorita}`);

// -----------------------------------------------------------------

// 5. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 15;
let valor2 = 10;
let resultadoSoma = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultadoSoma}.`);

// -----------------------------------------------------------------

// 6. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
// (Reutilizando 'valor1' e 'valor2' da etapa anterior para este exemplo)
let resultadoSubtracao = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultadoSubtracao}.`);

// -----------------------------------------------------------------

// 7. Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idadeInput = prompt("Digite sua idade:");
let idade = parseInt(idadeInput); // Converte o texto do prompt para um número inteiro

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

// -----------------------------------------------------------------

// 8. Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numeroInput = prompt("Digite um número (positivo, negativo ou zero):");
let numero = parseFloat(numeroInput); // Usamos parseFloat para aceitar números decimais

if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else if (numero === 0) {
    console.log("O número é zero.");
} else {
    console.log("Entrada inválida."); // Caso o usuário não digite um número
}

// -----------------------------------------------------------------

// 9. Use um loop while para imprimir os números de 1 a 10 no console.
console.log("Contagem de 1 a 10:");
let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++; // Incrementa o contador (o mesmo que contador = contador + 1)
}

// -----------------------------------------------------------------

// 10. Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = 8.5; // Valor de exemplo
console.log(`A nota é: ${nota}`);
if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// -----------------------------------------------------------------

// 11. Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
// (Math.random() gera um número decimal entre 0 (inclusivo) e 1 (exclusivo))
let numeroAleatorio = Math.random();
console.log(`Número aleatório gerado: ${numeroAleatorio}`);

// -----------------------------------------------------------------

// 12. Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
let aleatorio1a10 = Math.floor(Math.random() * 10) + 1;
console.log(`Número aleatório inteiro entre 1 e 10: ${aleatorio1a10}`);

// -----------------------------------------------------------------

// 13. Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let aleatorio1a1000 = Math.floor(Math.random() * 1000) + 1;
console.log(`Número aleatório inteiro entre 1 e 1000: ${aleatorio1a1000}`);

// -----------------------------------------------------------------
console.log("Fim do script!");
*/