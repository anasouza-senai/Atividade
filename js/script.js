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
    }else {
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
        contador++
    }
};


const exercicio6 = () => {
    let num = document.getElementById("num").value;
    let soma = 0;
    let resultado = document.getElementById("resultado");

    let cont = 0;
    while(cont <= num){
        if(cont % 2 == 0){
            soma += cont;
        }
        cont++;
    }

    resultado.innerText = `A soma dos números pares é: ${soma}`
};

const exercicio7 = () => {
    let num = document.getElementById("num").value;

}
