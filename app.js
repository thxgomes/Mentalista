function adivinhar(){
    var numeroSecreto = parseInt(Math.random() * 10)
    console.log(numeroSecreto)
    var tentativa = 3
    var chute = document.getElementById("number").value
    
    while (tentativa > 0){
        if (numeroSecreto == chute){
        alert ("Acertou.")
        var ponto = tentativa;
        tentativa = 0;
      } else if (chute > numeroSecreto){
        alert("O número secreto é menor, tente outra vez")
        chute = parseInt(prompt("Número"))
      } else if (chute < numeroSecreto){
        alert ("O numero secreto é maior")
        chute = parseInt(prompt("Número"))
      }
      tentativa = tentativa - 1 
    }
    if (chute != numeroSecreto){
      alert ("Suas tentativas acabaram!O número secreto era: " + numeroSecreto)
    }
    if (ponto==3){
      document.getElementById("pontuacao").innerHTML = "Você fez 10 pontos!";
    } else if (ponto==2){
      document.getElementById("pontuacao").innerHTML = "Você fez 5 pontos!";
    } else if (ponto==1){
      document.getElementById("pontuacao").innerHTML = "Você fez 3 pontos!";
    } else{
      document.getElementById("pontuacao").innerHTML = "Você não pontuou x.x";
    }
    
    }