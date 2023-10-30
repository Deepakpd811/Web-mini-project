const paraEl = document.getElementById("para");
const cardEl = document.getElementById("card-El");
const sumEl = document.getElementById("sum-El");
const startEl = document.getElementById("start-el");
const newcardEl = document.getElementById("newcard-el");





let cardsarr = []
let hasblackjacked = false;
let isalive = false;





function startgame(){
    
    let firstcard = Math.floor(Math.random()*13+1);
    let secondcard = Math.floor(Math.random()*13+1);
    cardsarr = [firstcard,secondcard]
    sum = firstcard + secondcard;
    
    rendergame();
}


function rendergame(){
    isalive = true
    hasblackjacked = false;
    cardEl.textContent = "cards:" ;
    
    
    for(let i=0; i<cardsarr.length; i++){
        cardEl.textContent += cardsarr[i] + " " ;
        
    }

    sumEl.textContent = "sum: " + sum;
    
    if(sum <21){
        paraEl.classList.add("black")
       paraEl.textContent= "you need to draw a card"
    }else if(sum === 21){
       paraEl.textContent = "you won  the game"
       
       paraEl.classList.remove("black")
       paraEl.classList.add("green")
       hasblackjacked = true;
    }else{
        paraEl.textContent= "you are out of the game"
        paraEl.classList.remove("black")
        paraEl.classList.add("red")
       isalive = false;
    }
}

function newcards(){
    if(isalive===true && hasblackjacked == false){

        let thirdcard = Math.floor(Math.random()*13+1);
        cardsarr.push(thirdcard);    
        sum += thirdcard;
        rendergame();
    }

}