const choices = ["Rock", "Scissors", "Paper"]
const PlayerDisplay = document.getElementById('PlayerDisplay')
const computerDisplay = document.getElementById('computerDisplay')
const resultDisplay = document.getElementById('resultDisplay')

const PlayerscoreDisplay = document.getElementById('PlayerscoreDisplay')
const ComputerScoreDisplay = document.getElementById('ComputerScoreDisplay')


let Playerscore = 0;
let ComputerScore = 0;


function playGame(playerchoice) {
    const computerchoice = choices[Math.floor(Math.random() * 3)]
    let result = ""
    if (playerchoice == computerchoice) {
        result = "IT'S A TIE"
    }

    else {
        switch (playerchoice) {
            case 'Rock':
                result = (computerchoice === 'Scissors') ? "IT'S A WIN" : "IT'S A LOSE"
                break;

            case 'Paper':
                result = (computerchoice === 'Rock') ? "IT'S A WIN" : "IT'S A LOSE"
                break;
                ;
            case 'Scissors':
                result = (computerchoice === 'Paper') ? "IT'S A WIN" : "IT'S A LOSE"
                break;

        }


    }

    //     else {
    //         if (computerchoice="Scissors" && playerchoice="Rock"){
    //             result= "It's a Lose"
    //         }
    //         if(computerchoice="Scissors" && playerchoice="Rock"){

    //         }
    //     }

    console.log("player choice is" + playerchoice)
    console.log("computer choice is " + computerchoice)
    console.log(result)
    PlayerDisplay.innerHTML = `<h3>Player choice: ${playerchoice}</h3>`
    computerDisplay.innerHTML = `<h3>Computer choice: ${computerchoice} </h3>`
    resultDisplay.innerHTML = result;
    resultDisplay.classList.remove("greentext", "redtext")







switch (result) {
    case ("IT'S A WIN"):
        Playerscore++;
        resultDisplay.classList.add("greenText")
        break;

    case ("IT'S A LOSE"):
        ComputerScore++;
        resultDisplay.classList.add("redText")
        break;


}
PlayerscoreDisplay.innerHTML = `Player Score: ${Playerscore}`;
    ComputerScoreDisplay.innerHTML = `Computer Score: ${ComputerScore}`;

}