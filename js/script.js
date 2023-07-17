const gameBoard = (() => {
  const gameBoardarr = ["", "", "", "", "", "", "", "", ""];

  //this add each element of the array to the DOM and is responsive

  for (i = 0; i < gameBoardarr.length; i++) {
    gameBoardarr[i] = document.getElementById(i);
    //console.log(gameBoardarr[i].textContent.textContent);
  }

  let turn = "x";
  //criar um for each para todos os elements adicionando o click evento de mudar o conteudo do texto do quadrado
  gameBoardarr.forEach((elemento) => {
    elemento.addEventListener("click", function () {
      //aqui eu vou fazer ativar uma função "checkSquare" dai só vai ter ativar a função sempre que clicarmos
      //checkSquare(simbolP1, simbolP2, elemento);

      checkSquare(elemento);
      if (turn == "x") {
        console.log("hi");
        turn = "o";
      } else {
        turn = "x";
      }
      let simboloVencedor = checkCombination();
      roundPoint(simboloVencedor);
      /* scoreBoardP1.textContent = p1Score;
      scoreBoardP2.textContent = p2Score; */
      console.log(simboloVencedor);
    });
  });

  function checkSquare(elemento) {
    elemento.textContent = turn;
    elemento = turn;
  }

  /*
  função para verificar se alguém ganhou
  para ganhar a partida, 3 quadrados seguidos tem que estar com o mesmo simbolo
  */

  //scores
  let p1Score = 0;
  let p2Score = 0;

  let scoreBoardP1 = document.getElementById("scoreP1");
  let scoreBoardP2 = document.getElementById("scoreP2");
  scoreBoardP1.textContent = p1Score;
  scoreBoardP2.textContent = p2Score;

  function checkCombination() {
    if (
      gameBoardarr[0].textContent == gameBoardarr[1].textContent &&
      gameBoardarr[0].textContent == gameBoardarr[2].textContent &&
      gameBoardarr[0].textContent != ""
    ) {
      console.log("funcionou");

      return gameBoardarr[0].textContent;
    } else if (
      gameBoardarr[3].textContent == gameBoardarr[4].textContent &&
      gameBoardarr[3].textContent == gameBoardarr[5].textContent &&
      gameBoardarr[3].textContent != ""
    ) {
      return gameBoardarr[3].textContent;
    } else if (
      gameBoardarr[6].textContent == gameBoardarr[8].textContent &&
      gameBoardarr[6].textContent == gameBoardarr[7].textContent &&
      gameBoardarr[6].textContent != ""
    ) {
      console.log("funcionou");
      return gameBoardarr[6].textContent;
    } else if (
      gameBoardarr[0].textContent == gameBoardarr[4].textContent &&
      gameBoardarr[0].textContent == gameBoardarr[8].textContent &&
      gameBoardarr[0].textContent != ""
    ) {
      console.log("funcionou");
      return gameBoardarr[0].textContent;
    } else if (
      gameBoardarr[2].textContent == gameBoardarr[4].textContent &&
      gameBoardarr[2].textContent == gameBoardarr[6].textContent &&
      gameBoardarr[2].textContent != ""
    ) {
      console.log("funcionou");
      return gameBoardarr[2].textContent;
    } else if (
      gameBoardarr[0].textContent == gameBoardarr[3].textContent &&
      gameBoardarr[0].textContent == gameBoardarr[6].textContent &&
      gameBoardarr[0].textContent != ""
    ) {
      console.log("funcionou");
      return gameBoardarr[0].textContent;
    } else if (
      gameBoardarr[1].textContent == gameBoardarr[4].textContent &&
      gameBoardarr[1].textContent == gameBoardarr[7].textContent &&
      gameBoardarr[1].textContent != ""
    ) {
      console.log("funcionou");
      return gameBoardarr[1].textContent;
    } else if (
      gameBoardarr[2].textContent == gameBoardarr[5].textContent &&
      gameBoardarr[2].textContent == gameBoardarr[8].textContent &&
      gameBoardarr[2].textContent != ""
    ) {
      console.log("funcionou");
      return gameBoardarr[2].textContent;
    }
  }

  function roundPoint(simboloVencedor) {
    if (simbolP1 == simboloVencedor) {
      console.log(`Vencedor é Player1 com o simbolo ${simboloVencedor}`);
      simboloVencedor = "";
      p1Score += 1;
      scoreBoardP1.textContent = p1Score;
    } else if (simbolP2 == simboloVencedor) {
      console.log(`Vencedor é Player2 com o simbolo ${simboloVencedor}`);
      simboloVencedor = "";
      p2Score += 1;
      scoreBoardP2.textContent = p2Score;
    }
  }

  //function to restart the game after a round
  const restartRoundButton = document.getElementById("reRound");
  restartRoundButton.addEventListener("click", function () {
    restartRound();
  });
  function restartRound() {
    gameBoardarr.forEach((elemento) => {
      elemento.textContent = "";
      simbolP1 = "";
      simbolP2 = "";
      turn = "x";
    });
  }
  const restartMatchButton = document.getElementById("reMatch");
  restartMatchButton.addEventListener("click", function () {
    restartMatch();
  });

  function restartMatch() {
    restartRound();
    p1Score = 0;
    p2Score = 0;
    turn = "x";
  }

  //lógica para selecionar o simbolo do P1
  let simbolP1 = "";
  let botaoXP1 = document.getElementById("XplayerOne");
  let botaoOP1 = document.getElementById("OplayerOne");
  botaoXP1.addEventListener("click", function () {
    simbolP1 = "x";
    botaoXP2.style.backgroundColor = "red";
    botaoXP1.style.backgroundColor = "green";
    console.log(`P1 ${simbolP1}`);
    //botaoXP2 = 1; quando acabar o round isso vai ser desfeito
  });
  botaoOP1.addEventListener("click", function () {
    simbolP1 = "o";
    console.log(`P1 ${simbolP1}`);
    botaoOP2.style.backgroundColor = "red";
    botaoOP1.style.backgroundColor = "green";
  });

  //Lógica para selecionar o simbolo do P2
  let simbolP2 = "";
  let botaoXP2 = document.getElementById("XplayerTwo");
  let botaoOP2 = document.getElementById("OplayerTwo");
  botaoXP2.addEventListener("click", function () {
    simbolP2 = "x";
    console.log(`P2 ${simbolP2}`);
    botaoXP1.style.backgroundColor = "red";
    botaoXP2.style.backgroundColor = "green";
  });
  botaoOP2.addEventListener("click", function () {
    simbolP2 = "o";
    botaoOP1.style.backgroundColor = "red";
    botaoOP2.style.backgroundColor = "green";
    console.log(`P2 ${simbolP2}`);
  });

  return {
    gameBoardarr,
  };
})();

/* //lógica para selecionar o simbolo do P1
let simbolP1 = "";
let botaoXP1 = document.getElementById("XplayerOne");
let botaoOP1 = document.getElementById("OplayerOne");
botaoXP1.addEventListener("click", function () {
  simbolP1 = "x";
  console.log(simbolP1);
  //botaoXP2 = 1; quando acabar o round isso vai ser desfeito
});
botaoOP1.addEventListener("click", function () {
  simbolP1 = "o";
  console.log(simbolP1);
});

//Lógica para selecionar o simbolo do P2
let simbolP2 = "";
let botaoXP2 = document.getElementById("XplayerTwo");
let botaoOP2 = document.getElementById("OplayerTwo");
botaoXP2.addEventListener("click", function () {
  simbolP2 = "x";
  console.log(simbolP2);
});
botaoOP2.addEventListener("click", function () {
  simbolP2 = "o";
  console.log(simbolP2);
});
 */
