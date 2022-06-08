function computerPlay(){
    let x= (Math.floor(Math.random()*100)%5);
    console.log(x);
    switch(x){
        case 0: return "rock"; break;
        case 1: return "paper"; break;
        case 2: return "scissor"; break;
        case 3: return "lizard"; break;
        case 4: return "spock"; break;
    }
}
