function computerPlay(){
    let x= (Math.floor(Math.random()*100)%5);
    switch(x){
        case 0: return "rock"; break;
        case 1: return "paper"; break;
        case 2: return "scissors"; break;
        case 3: return "lizard"; break;
        case 4: return "spock"; break;
    }
}

function evalRound(p1, p2){
    if(p1=="rock"){
        switch(p2){
            case "rock": return [-1,""]; break; 
            case "paper": return [1,"covers"]; break; 
            case "scissors": return [0,"crushes"]; break;
            case "lizard": return [0,"crushes"]; break; 
            case "spock": return [1,"vaporizes"]; break; 
        }
    }
    else if(p1=="paper"){
        switch(p2){
            case "rock": return [0,"covers"]; break; 
            case "paper": return [-1,""]; break; 
            case "scissors": return [1,"cuts"]; break;
            case "lizard": return [1,"eats"]; break; 
            case "spock": return [0,"disproves"]; break; 
        }
    }
    else if(p1=="scissors"){
        switch(p2){
            case "rock": return [1,"crushes"]; break; 
            case "paper": return [0,"cuts"]; break; 
            case "scissors": return [-1,""]; break;
            case "lizard": return [0,"decapitates"]; break; 
            case "spock": return [1,"smashes"]; break; 
        }
    }
    else if(p1=="lizard"){
        switch(p2){
            case "rock": return [1,"crushes"]; break; 
            case "paper": return [0,"eats"]; break; 
            case "scissors": return [1,"decapitates"]; break;
            case "lizard": return [-1,""]; break; 
            case "spock": return [0,"poisons"]; break; 
        }
    }
    else if(p1=="spock"){
        switch(p2){
            case "rock": return [0,"vaporises"]; break; 
            case "paper": return [1,"disproves"]; break; 
            case "scissors": return [0,"smashes"]; break;
            case "lizard": return [1,"poisons"]; break; 
            case "spock": return [-1,""]; break; 
        }
    }   
    else
        {
        console.log("invalid") ;
        return [-1];
    }
}
let p1Score;
let p2Score;
optionButtons = document.querySelectorAll(".option");
let resultText = document.querySelector(".result");
let userSel = document.querySelector(".userSel");
let compSel = document.querySelector(".compSel");
function playRound(selection){
    userSel.innerText = `You picked ${selection}`;
    let playerSelection = selection;
    let computerSelection = computerPlay();
    compSel.innerText = `Computer picked ${computerSelection}`;
    let roundResult = evalRound(playerSelection, computerSelection);
    console.log(playerSelection + " vs " + computerSelection);
    if(roundResult[0] == 0){
        p1Score+=1;
    }
    
    else if(roundResult[0] == 1){
        p2Score+=1;
    }
    else {
        console.log("Draw");
    }
    resultText.innerText = `${p1Score} - ${p2Score}`;
    if(p1Score==5 || p2Score==5)
        {   
            declareResult();
            optionButtons.forEach(button => {
                button.disabled = true;
            })
        }
}

function declareResult(){
    if(p1Score> p2Score){
        console.log("Player 1 wins the game");
    }
    else{
        console.log("Player 2 wins the game");
    }
}
function initialiseGame(){
    p1Score = 0;
    p2Score = 0;
    optionButtons.forEach(button =>{
        button.disabled=false;
        button.addEventListener('click',()=>{
            playRound(button.getAttribute('data-key'));});
    });

}


initialiseGame();