function computerPlay(){
    let x= (Math.floor(Math.random()*100)%5);
    switch(x){
        case 0: return "rock"; break;
        case 1: return "paper"; break;
        case 2: return "scissor"; break;
        case 3: return "lizard"; break;
        case 4: return "spock"; break;
    }
}

function playRound(p1, p2){
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
}