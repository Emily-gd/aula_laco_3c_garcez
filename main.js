function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Qual os melhor comida?");

    
    if (respostaTime.toLowerCase() === "Batata frita") {
      alert("Isso mesmo! Batata frita é o melhor comida!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
  }
}