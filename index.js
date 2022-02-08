function computerPlay(){
    
    let selectedNum = Math.floor(Math.random() * 3);
    
    if (selectedNum === 0){
        return 'Rock'
    } else if (selectedNum === 1) {
        return 'Paper'
    } else if (selectedNum === 2) {
        return 'Scissor' 
    }

    
}


function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return 'tie'
    } else {
        return 'not tie'
    }

}


const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection)); 