const exercicio1 = () => {
  document.getElementById("resposta").innerHTML =
    "<h2> Resposta da Atividade</h2>";
  for (let i = 1; i <= 10; i++) {
    document.getElementById("resposta").innerHTML += `#${i}`;
  }
};

const exercicio2 = () => {
  for (let i = 0; i <= document.getElementById("num").value; i += 2) {
    document.getElementById("resposta").innerHTML += `#${i} `;
  }
};

const ex03 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");

  if (num <= 0) {
    error.innerText = `Informar número válido, o número ${num} não é positivo.`;
    result.innerText = "";
  } else {
    error.innerText = "";
    let primo = true; // declarei variavel para primo

    for (let i = 2; i < num; i++) {
      if (num % i == 0) primo = false; // % resto da divisão
    }

    primo
      ? (result.innerText = `O número ${num} é primo`)
      : (result.innerText = `O número ${num} não é primo`);
  }
};

const exercicio4 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  error.innerHTML = "";
  result.innerHTML = "";

  if (num < 0) {
    error.innerText = `Informar número válido`;
    result.innerText = "";
  } else {
    for (let i = 0; i <= 10; i++) {
      result.innerHTML += `${num} x ${i} = ${num * i}<br>`;
    }
  }
};

const exercicio5 = () => {
  let num = document.getElementById("num").value;
  let contador = 0;
  let resultado = document.getElementById("resultado");

  resultado.innerText = "";
  while (num >= contador) {
    if (contador % 2 !== 0) resultado.innerText += `${contador}. `;
    contador++;
  }
};

const exercicio6 = () => {
  let num = document.getElementById("num").value;
  let soma = 0;
  let resultado = document.getElementById("resultado");

  let cont = 0;
  while (cont <= num) {
    if (cont % 2 == 0) {
      soma += cont;
    }
    cont++;
  }

  resultado.innerText = `A soma dos números pares é: ${soma}`;
};

const exercicio7 = () => {
  let respost = document.getElementById("resposta");

  let i = 10;
  while (i >= 1) {
    respost.innerHTML += `#${i} `;
    i--;
  }
};

const exercicio8 = () => {
  let palavra = document.getElementById("palavra").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  error.innerText = "";
  result.innerText = "";

  let inversa = "";

  if (palavra == "") {
    error.innerText = "Favor informar uma palavra!";
  } else {
    for (let i = 1; i <= palavra.length; i++) {
      inversa += palavra.charAt(palavra.length - i);
    }

    palavra.toLowerCase() == inversa.toLowerCase()
      ? (result.innerText = "A palavra é um palíndromo!")
      : (error.innerText = "A palavra não é um palíndromo!");
  }
};

const exercicio9 = () => {
  let somar = 0;
  let resposta = document.getElementById("resposta");

  resposta.innerHTML = "<h2>Resposta da Atividade</h2>";

  for (let i = 1; i <= 100; i++) {
    somar += i;
  }

  resposta.innerHTML += `<p>O resultado da soma é: ${somar}</p>`;
};

const exercicio10 = () => {
  let num = document.getElementById("num").value;
  let soma = 0;
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  if (num <= 0) {
    resultado.innerHTML = "Informe um número válido.";
  } else {
    let i = 0;
    while (i <= num) {
      soma += i;
      i++;
    }

    resultado.innerHTML += `A soma é: ${soma}<br>`;
    resultado.innerHTML += `A média é: ${soma / num}`;
  }
};

const exercicio11 = () => {
  let resposta = document.getElementById("resposta");

  resposta.innerHTML = "";

  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
      resposta.innerHTML += `${i}<br /> `;
    }
  }
};

const exercicio12 = () => {
  let num = document.getElementById("num").value;
  let soma = 0;
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  for (let i = 0; i < num.length; i++) {
    soma += parseInt(num.charAt(i));
  }
  resposta.innerHTML += `A soma dos dígitos do número ${num} é ${soma} `;
};

const exercicio13 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let resultado = document.getElementById("resultado");

  resultado.innerText = "";

  for (let i = num1; i <= num2; i++) {
    let teste = verificaPrimo(i);
    if (teste) {
      resultado.innerText += ` ${i}`;
    }
  }
};

function verificaPrimo(num) {
  let primo = true; // declarei variavel para primo
  for (let i = 2; i < num; i++) {
    if (num % i == 0) primo = false; // % resto da divisão
  }
  return primo;
}

const exercicio14 = () => {
  let lado1 = document.getElementById("num1").value;
  let lado2 = document.getElementById("num2").value;
  let result = document.getElementById("resultado");
  let erro = document.getElementById("erro");

  let area = lado1 * lado2;

  result.innerText = `${area}`;
};
const exercicio15 = () => {
  let digitou = document.getElementById("palavra").value;
  let erro = document.getElementById("erro");
  let resultado = document.getElementById("resultado");
  let letra = "";
  resultado.innerHTML = "";
  for (let i = 0; i < digitou.length; i++) {
    letra = digitou[i];
    letra = letra.toUpperCase();
    if (
      letra == "A" ||
      letra == "E" ||
      letra == "I" ||
      letra == "O" ||
      letra == "U"
    ) {
      resultado.innerHTML += `A letra ${letra} é vogal <br>`;
    } else {
      resultado.innerHTML += `A letra ${letra} é consoante <br>`;
    }
  }
};

const exercicio16 = () => {
  let raio = document.getElementById("num1").value;
  let result = document.getElementById("resultado");
  let area = raio ** 2 * 3.14;

  result.innerHTML = area;
};

const exercicio17 = () => {
  let base = document.getElementById("num1").value;
  let altura = document.getElementById("num2").value;
  let result = document.getElementById("resultado");

  let area = base * altura;

  result.innerText = `${area}`;
};
const exercicio18 = () => {
  let baseMaior = document.getElementById("num1").value;
  let baseMenor = document.getElementById("num2").value;
  let altura = document.getElementById("num3").value;
  let result = document.getElementById("resultado");

  let area = baseMaior + (baseMenor * altura) / 2;

  result.innerText = `${area}`;
};

const exercicio19 = () => {
  let date = document.getElementById("data").value;
  let dataAtual = 2024;
  let result = document.getElementById("resultado");

  let ano = dataAtual - date;

  result.innerText = `${ano}`;
};

const exercicio20 = () => {
  let frase = document.getElementById("frase").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  error.innerText = "";
  result.innerText = "";

  let inversa = "";

  if (frase == "") {
    error.innerText = "Favor informar uma frase!";
  } else {
    for (let i = 1; i <= frase.length; i++) {
      inversa += frase.charAt(frase.length - i);
    }
  }
  result.innerHTML = inversa;
};

const exercicio21 = () => {
  let frase = document.getElementById("frase").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  error.innerText = "";
  result.innerText = "";
  let espacoBranco = frase.trim();

  if (frase.length > 1) {
    result.innerHTML = espacoBranco.replace(/\s/g, " ");
  }
};

const exercicio22 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");

  let soma = 0;
  result.innerHTML = "";

  soma += parseInt(num);
  while (soma <= 100) {
    let numero = parseInt(prompt("Informe mais um número"));
    if (isNaN(numero) || numero <= 0) {
      numero = parseInt(prompt("Número Invalido, Informe novamente"));
    } else {
      soma += numero;
    }
  }
  result.innerHTML = `${soma}`;
};

const exercicio23 = () => {
  let palavra = document.getElementById("palavra").value;
  let frase = document.getElementById("frase").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  let jogar = frase.split(" ");
  let contador = 0;
  error.innerHTML = "";
  result.innerHTML = "";

  for (let i = 0; i < jogar.length; i++) {
    if (jogar[i] === palavra) {
      contador++;
    }

    result.innerHTML = ` A palavra ${palavra} apareceu ${contador} vezes na frase`;
  }
};

const exercicio24 = () => {
  let frase = document.getElementById("frase").value;
  let result = document.getElementById("resultado");

  frase = frase.toLowerCase();
  let palavras = frase.split(" ");
  let qtdPalavras = palavras.length;
  let novaPalavra = [];

  for (let i = 0; i < qtdPalavras; i++) {
    novaPalavra[i] = palavras[i].charAt(0).toUpperCase() + palavras[i].slice(1);
  }

  let novaFrase = novaPalavra.join(" ");
  result.innerText = novaFrase;
};

const exercicio25 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let num3 = document.getElementById("num3").value;
  let result = document.getElementById("resultado");

  let vetor = [num1, num2, num3];
  vetor.sort((a, b) => a - b);

  for (let i = 0; i < vetor.length; i++) {
    result.innerText += ` ${vetor[i]}`;
  }
};
