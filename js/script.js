const gameBoard = (() => {
  const gameBoardarr = ["", "", "", "", "", "", "", "", ""];

  //this add each element of the array to the DOM and is responsive

  for (i = 0; i < gameBoardarr.length; i++) {
    gameBoardarr[i] = document.getElementById(i);
    //console.log(gameBoardarr[i].textContent);
  }

  //criar um for each para todos os elements adicionando o click evento de mudar o conteudo do texto do quadrado
  gameBoardarr.forEach((elemento) => {
    elemento.addEventListener("click", function () {
      //aqui eu vou fazer ativar uma função "checkSquare" dai só vai ter ativar a função sempre que clicarmos
      checkSquare(simbolP1, simbolP2, elemento);

      checkRoundPoint();
      console.log(p1Score);
    });
  });

  function checkSquare(simbolP1, simbolP2, elemento) {
    if (elemento.textContent == "x" || elemento.textContent == "o")
      alert("ERROR-ERROR-ERROR THIS SQUARE IS ALREADY FILLED");
    else if (simbolP1 == "x") elemento.textContent = "x";
    else if (simbolP1 == "o") elemento.textContent = "o";
    else if (simbolP2 == "x") elemento.textContent = "x";
    else if (simbolP2 == "o") elemento.textContent = "o";
  }
  /*
  função para verificar se alguém ganhou
  para ganhar a partida, 3 quadrados seguidos tem que estar com o mesmo simbolo
  */
  //scores
  let p1Score = 0;
  let p2Score = 0;

  function checkRoundPoint() {
    if (
      gameBoardarr[0].textContent == gameBoardarr[1].textContent &&
      gameBoardarr[1].textContent == gameBoardarr[2].textContent &&
      gameBoardarr[0].textContent != ""
    ) {
      console.log("we have a winner");
      if (gameBoardarr[0].textContent == "x" && simbolP1 == "x") {
        console.log("Player 1 has Won with the X symbol");
        p1Score = p1Score + 1;

        return p1Score;
      } else if (gameBoardarr[0].textContent == "o" && simbolP1 == "o") {
        console.log("Player 1 has Won with the O symbol");
        p1Score = p1Score + 1;
        return p1Score;
      } else if (gameBoardarr[0].textContent == "x" && simbolP2 == "x") {
        console.log("Player 2 has Won with the X symbol");
      } else if (gameBoardarr[0].textContent == "o" && simbolP2 == "o") {
        console.log("Player 2 has Won with the O symbol");
      }
    } else if (
      gameBoardarr[3].textContent == gameBoardarr[4].textContent &&
      gameBoardarr[4].textContent == gameBoardarr[5].textContent &&
      gameBoardarr[3].textContent != ""
    ) {
      console.log("we have a winner");
      if (gameBoardarr[3].textContent == "x" && simbolP1 == "x") {
        console.log("Player 1 has Won with the X symbol");
        p1Score = p1Score + 1;
        return p1Score;
      } else if (gameBoardarr[3].textContent == "o" && simbolP1 == "o") {
        console.log("Player 1 has Won with the O symbol");
        p1Score = p1Score + 1;
        return p1Score;
      } else if (gameBoardarr[3].textContent == "x" && simbolP2 == "x") {
        console.log("Player 2 has Won with the X symbol");
      } else if (gameBoardarr[3].textContent == "o" && simbolP2 == "o") {
        console.log("Player 2 has Won with the O symbol");
      }
    } else if (
      gameBoardarr[6].textContent == gameBoardarr[7].textContent &&
      gameBoardarr[7].textContent == gameBoardarr[8].textContent &&
      gameBoardarr[6].textContent != ""
    ) {
      console.log("we have a winner");
      if (gameBoardarr[6].textContent == "x" && simbolP1 == "x") {
        console.log("Player 1 has Won with the X symbol");
        p1Score = p1Score + 1;
        return p1Score;
      } else if (gameBoardarr[6].textContent == "o" && simbolP1 == "o") {
        console.log("Player 1 has Won with the O symbol");
        p1Score = p1Score + 1;
        return p1Score;
      } else if (gameBoardarr[6].textContent == "x" && simbolP2 == "x") {
        console.log("Player 2 has Won with the X symbol");
      } else if (gameBoardarr[6].textContent == "o" && simbolP2 == "o") {
        console.log("Player 2 has Won with the O symbol");
      }
    } else if (
      gameBoardarr[0].textContent == gameBoardarr[3].textContent &&
      gameBoardarr[3].textContent == gameBoardarr[6].textContent &&
      gameBoardarr[0].textContent != ""
    ) {
      console.log("we have a winner");
      if (gameBoardarr[0].textContent == "x" && simbolP1 == "x") {
        console.log("Player 1 has Won with the X symbol");
        p1Score = p1Score + 1;
        return p1Score;
      } else if (gameBoardarr[0].textContent == "o" && simbolP1 == "o") {
        console.log("Player 1 has Won with the O symbol");
        p1Score = p1Score + 1;
        return p1Score;
      } else if (gameBoardarr[0].textContent == "x" && simbolP2 == "x") {
        console.log("Player 2 has Won with the X symbol");
      } else if (gameBoardarr[0].textContent == "o" && simbolP2 == "o") {
        console.log("Player 2 has Won with the O symbol");
      }
    } else if (
      gameBoardarr[1].textContent == gameBoardarr[4].textContent &&
      gameBoardarr[4].textContent == gameBoardarr[7].textContent &&
      gameBoardarr[1].textContent != ""
    ) {
      console.log("we have a winner");
      if (gameBoardarr[1].textContent == "x" && simbolP1 == "x") {
        console.log("Player 1 has Won with the X symbol");
        p1Score = p1Score + 1;
        return p1Score;
      } else if (gameBoardarr[1].textContent == "o" && simbolP1 == "o") {
        console.log("Player 1 has Won with the O symbol");
        p1Score = p1Score + 1;
        return p1Score;
      } else if (gameBoardarr[1].textContent == "x" && simbolP2 == "x") {
        console.log("Player 2 has Won with the X symbol");
      } else if (gameBoardarr[1].textContent == "o" && simbolP2 == "o") {
        console.log("Player 2 has Won with the O symbol");
      }
    } else if (
      gameBoardarr[2].textContent == gameBoardarr[5].textContent &&
      gameBoardarr[5].textContent == gameBoardarr[8].textContent &&
      gameBoardarr[2].textContent != ""
    ) {
      console.log("we have a winner");
      if (gameBoardarr[2].textContent == "x" && simbolP1 == "x") {
        console.log("Player 1 has Won with the X symbol");
        p1Score = p1Score + 1;
        return p1Score;
      } else if (gameBoardarr[2].textContent == "o" && simbolP1 == "o") {
        console.log("Player 1 has Won with the O symbol");
        p1Score = p1Score + 1;
        return p1Score;
      } else if (gameBoardarr[2].textContent == "x" && simbolP2 == "x") {
        console.log("Player 2 has Won with the X symbol");
      } else if (gameBoardarr[2].textContent == "o" && simbolP2 == "o") {
        console.log("Player 2 has Won with the O symbol");
      }
    } else if (
      gameBoardarr[0].textContent == gameBoardarr[4].textContent &&
      gameBoardarr[4].textContent == gameBoardarr[8].textContent &&
      gameBoardarr[0].textContent != ""
    ) {
      console.log("we have a winner");
      if (gameBoardarr[0].textContent == "x" && simbolP1 == "x") {
        console.log("Player 1 has Won with the X symbol");
        p1Score = p1Score + 1;
        return p1Score;
      } else if (gameBoardarr[0].textContent == "o" && simbolP1 == "o") {
        console.log("Player 1 has Won with the O symbol");
        p1Score = p1Score + 1;
        return p1Score;
      } else if (gameBoardarr[0].textContent == "x" && simbolP2 == "x") {
        console.log("Player 2 has Won with the X symbol");
      } else if (gameBoardarr[0].textContent == "o" && simbolP2 == "o") {
        console.log("Player 2 has Won with the O symbol");
      }
    } else if (
      gameBoardarr[2].textContent == gameBoardarr[4].textContent &&
      gameBoardarr[4].textContent == gameBoardarr[6].textContent &&
      gameBoardarr[2].textContent != ""
    ) {
      console.log("we have a winner");
      if (gameBoardarr[2].textContent == "x" && simbolP1 == "x") {
        console.log("Player 1 has Won with the X symbol");
        p1Score = p1Score + 1;
        return p1Score;
      } else if (gameBoardarr[2].textContent == "o" && simbolP1 == "o") {
        console.log("Player 1 has Won with the O symbol");
        p1Score = p1Score + 1;
        return p1Score;
      } else if (gameBoardarr[2].textContent == "x" && simbolP2 == "x") {
        console.log("Player 2 has Won with the X symbol");
      } else if (gameBoardarr[2].textContent == "o" && simbolP2 == "o") {
        console.log("Player 2 has Won with the O symbol");
      }
    }
  }

  return {
    gameBoardarr,
  };
})();

const Player = (name, simbol) => {
  const getName = () => name;

  const getSimbol = () => simbol;

  return { getName, getSimbol };
};

//lógica para selecionar o simbolo do P1
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

const Player1 = Player("Bruno", simbolP1);
const Player2 = Player("Chola", simbolP2);
console.log(Player2.getSimbol());
