const exercicio1=() =>{
    document.getElementById("resposta").innerHTML = "<h2> Resposta da Atividade</h2>"
   for (let i = 1; i <= 10; i++) {
    document.getElementById("resposta").innerHTML += (`#${i}` ) 
   }
};

const exercicio2=() =>{
    for (let i = 0; i <= document.getElementById("num").value; i += 2) {
        document.getElementById("resposta").innerHTML += (`#${i} `) 
    }
};

const exercicio3=() =>{

}