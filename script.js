// Challenge 1 : Your Age in Days

function your_age_in_days(){
var birthYear= prompt('What is your birth year');
var currentYear= prompt('What is this current year');
var ageInDays =(currentYear-birthYear)*365;
var h1 = document.createElement("h1");
var textAnswer= document.createTextNode('You are '+ ageInDays+'days old.');
h1.setAttribute('id','ageInDays');
h1.appendChild(textAnswer);
document.getElementById('flex-box-result').appendChild(h1);
}
function reset(){
    document.getElementById('ageInDays').remove();
}
// Challenge 2: Cat Generator
function generateCat(){
    var div = document.getElementById("flex-cat-gen");
    var Image = document.createElement("img");
    Image.src ="https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(Image);
}

// Challenge 3: Rock, Paper, Scissors
let userScoree =0;
let computerScoree =0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice,BotChoice;
    humanChoice = yourChoice.id;

    BotChoice = numberToChoice(randToRpsInt()) ;
    console.log('ComputerChoice: ',BotChoice);
    
    results = decideWinner(humanChoice,BotChoice); //[0,1] human lost | Bot won
    console.log(results);
    
    message = finalMessage(results,humanChoice); //{"message":'you won',"color":'green' }
    
    // rpsFrontEnd(yourChoice.id,BotChoice,message);
    console.log

}
function randToRpsInt(){
    return Math.floor(Math.random()*3);
}
function numberToChoice(number){
    return ['rock','paper','scissors'][number];
}
function decideWinner(yourChoice,computerChoice){
    var rpsDatabase ={
        'rock':{'scissors':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissors':0},
        'scissors':{'paper':1,'scissors':0.5,'rock':0},
    };
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
    return [yourScore,computerScore];

}
function finalMessage([yourScore,computerScore],yourChoice){
    if (yourScore===0){
        var message ={'message':'You lost!','color':'red'};
        computerScoree++;
        computerScore_span.innerHTML= computerScoree;
        const yourChoice_img = document.getElementById(yourChoice);
        yourChoice_img.classList.add("red-glow");
        setTimeout(() =>yourChoice_img.classList.remove('red-glow'),300);
        return message;

    }
    else if(yourScore===1){
        var message={'message':'You won!','color':'green'};
        userScoree++;
        userScore_span.innerHTML = userScoree;
        const yourChoice_img = document.getElementById(yourChoice);
        yourChoice_img.classList.add("green-glow");
        setTimeout(() =>yourChoice_img.classList.remove('green-glow'),300);
        return message;

    }
    else{
        var message={'message':'You teid!','color':'yellow'};
        const yourChoice_img = document.getElementById(yourChoice);
        yourChoice_img.classList.add("gray-glow");
        setTimeout(() =>yourChoice_img.classList.remove('gray-glow'),300);
        return message;
    }
}
// function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){
//     var imagesDatabase ={
//         'rock':document.getElementById('rock').src,
//         'paper':document.getElementById('paper').src ,
//         'scissors':document.getElementById('scissors').src ,
//     };
// // let's remove all the images
// document.getElementById('rock').remove();
// document.getElementById('paper').remove();
// document.getElementById('scissors').remove();

// var humanDiv = document.createElement('div');
// var botDiv = document.createElement('div');
// var messageDiv = document.createElement('div');

// humanDiv.innerHTML="<img src='" + imagesDatabase[humanImageChoice] +"' width='150' height='150' style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>";
// messageDiv.innerHTML="<h1 style='color:" + finalMessage['color'] + ";font-size:60px;padding:30px;'>" + finalMessage['message'] +"</h1>";
// botDiv.innerHTML="<img src='" + imagesDatabase[botImageChoice] +"' width='150' height='150' style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>";

// document.getElementById("flex-box-rps-div").appendChild(humanDiv);
// document.getElementById("flex-box-rps-div").appendChild(messageDiv);
// document.getElementById("flex-box-rps-div").appendChild(botDiv);
// }



// Challenge 4 : Change the Color of All Buttons!
let allButtons =[];
allButtons = document.getElementsByTagName("button");
// console.log(allButtons);

// console.log(allButtons.length);
var copyAllButtons =[];
// the error is in here
for(let i=0;i<allButtons.length;i++){
    copyAllButtons.push(allButtons[i].classList[1]);
}
console.log(copyAllButtons);
function buttonColorChange(buttonThingy){
    // console.log(buttonThingy.value);
    if(buttonThingy.value==='red'){
        buttonsRed();
    }
    else if(buttonThingy.value==='green'){
        buttonsGreen();
    }
    else if(buttonThingy.value==='reset'){
        buttonsReset();
    }
    else if(buttonThingy.value==='random'){
        randomColors();
    }
}

 function buttonsRed(){
    for(let i=0;i<allButtons.length;i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-danger');
    }
}
function buttonsGreen(){
    for(let i=0;i<allButtons.length;i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-success');
    }
}
function buttonsReset(){
    for(let i=0;i<allButtons.length;i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyAllButtons[i]);
    }
}
function randomColors(){
    let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];
    for(let i=0;i<allButtons.length;i++){
        let randomNumber = Math.floor(Math.random()*4);
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(choices[randomNumber]);
    }
}

// Challenge 5:Blackjack.
let blackjackGame={
    'you':{'scoreSpan':'#your-blackjack-result','div': '#your-box','score':0},
    'dealer':{'scoreSpan':'#dealer-blackjack-result','div': '#dealer-box','score':0},
    'cards':['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
    'cardsMap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'J':10,'Q':10,'A':[1,11]},
    'wins':0,
    'losses':0,
    'draws':0,
    'isStand':false,
    'turnsOver':false,
    'hitOver':false,
};
const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

const hitSound = new Audio('sounds/swish.m4a');
const winSound = new Audio('sounds/cash.mp3');
const looseSound = new Audio('sounds/aww.mp3');
document.querySelector("#blackjack-hit-button").addEventListener('click',blackjackHit);

document.querySelector("#blackjack-stand-button").addEventListener('click',dealerLogic);

document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackDeal);

function blackjackHit(){
    if (blackjackGame['isStand'] === false){
    let card = randomCard();
    // console.log(card);
    showCard(card,YOU);
    updateScore(card,YOU);
    console.log(YOU['score']);
    showScore(YOU);
    blackjackGame['hitOver'] = true;
    }
}

function randomCard(){
    let randomIndex = Math.floor(Math.random()*13);
    return blackjackGame['cards'][randomIndex];
}

function showCard(card,activePlayer){
    if(activePlayer['score']<= 21){
    let cardImage = document.createElement('img');
    cardImage.src = `images/${card}.png`;
    document.querySelector(activePlayer['div']).appendChild(cardImage);
    hitSound.play();
    }

}

function blackjackDeal(){
    if (blackjackGame['turnsOver'] === true){

        blackjackGame['isStand'] = false;

        // let winner =computWinner();
        // showResult(winner);
        // showResult(computWinner());
        let yourImages = document.querySelector('#your-box').querySelectorAll('img');
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
        for (let i=0;i<yourImages.length;i++){
            yourImages[i].remove();

        }
        for (let i=0;i<dealerImages.length;i++){
            dealerImages[i].remove();

        }
        YOU['score'] = 0;
        DEALER['score'] =0;

        document.querySelector('#your-blackjack-result').textContent = 0;
        document.querySelector('#dealer-blackjack-result').textContent = 0;
        
        document.querySelector('#your-blackjack-result').style.color = 'white';
        
        document.querySelector('#dealer-blackjack-result').style.color = 'white';

        document.querySelector('#blackjack-result').textContent = "Let's play";
        document.querySelector('#blackjack-result').style.color = 'black';
        
        blackjackGame['turnsOver'] = false;
        blackjackGame['hitOver'] = false;
    }
}

function updateScore(card,activePlayer){
    if(card === 'A'){
    // If adding 11 keeps me below 21, add 11. Otherwise,add 1
    if(activePlayer['score'] + blackjackGame['cardsMap'][card][1] <=21){
        activePlayer['score'] += blackjackGame['cardsMap'][card][1];
    }
    else{
        activePlayer['score'] += blackjackGame['cardsMap'][card][0];
    }
    }
    else{
    activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
}

function showScore(activePlayer){
    if(activePlayer['score'] > 21){
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    } else{
    document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
        
    }
}

function sleep (ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function dealerLogic(){
    if (blackjackGame['isStand'] === false && blackjackGame['hitOver'] === true){
    blackjackGame['isStand'] = true;

    while (DEALER['score']< 16 && blackjackGame['isStand'] === true){

    
        let card = randomCard();
        showCard(card,DEALER);
        updateScore(card,DEALER);
        showScore(DEALER);
        await sleep(1000);
    }

    blackjackGame['turnsOver'] = true;
    let winner =computWinner();
    showResult(winner); 
}


}

//  compute winner and return who just won
//  update the wins draws and losses
function computWinner(){
    let winner;
    if(YOU['score'] <= 21){
        // condition : higher score than or when dealer busts but you're 21 or under
        if(YOU['score']>DEALER['score'] || DEALER['score'] >21){
            blackjackGame['wins']++;
            winner = YOU;
        } else if (YOU['score'] < DEALER['score']){
            blackjackGame['losses']++;
            winner = DEALER;

        } else if(YOU['score'] === DEALER['score']){
            blackjackGame['draws']++;

        }
    }
    //  condition : when user busts but dealer doesn't
    else if(YOU['score']>21 && DEALER['score']<= 21){
        blackjackGame['losses']++;
        winner = DEALER;
    }
    //  condition : when you and the dealer busts
    else if(YOU['score'] >21&& DEALER['score']>21){
        blackjackGame['draws']++;
    }
    console.log("winner is ",winner);
    return winner;
}

function showResult(winner){
    let message,messageColor;

    if (blackjackGame['turnsOver'] === true){

    

        if (winner === YOU){
            document.querySelector('#wins').textContent = blackjackGame['wins'];
            message = 'You won!';
            messageColor = 'green';
            winSound.play();

        }else if(winner === DEALER){
            document.querySelector('#losses').textContent = blackjackGame['losses'];
            message = 'You lost!';
            messageColor = 'red';
            looseSound.play();
        }
        else{
            document.querySelector('#draws').textContent = blackjackGame['draws'];
            message = 'You drew!';
            messageColor = 'black';
        }
        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;
        
    }
}


// Challenge 6 : AJAX & API's with Javascript 
const url = 'https://randomuser.me/api/?results=10'; // Get 10 random users
fetch(url)
    .then(resp => resp.json())
    .then (data =>{
        let authors = data.results;
        console.log(authors);
        for (let i=0;i<authors.length;i++){
            let div = document.createElement('div');
            // let image = document.createElement('img');
            let p = document.createElement('p');
            p.appendChild(document.createTextNode(`${title(authors[i].name.first)} ${title(authors[i].name.last)}`));
            // image.src = authors[i].picture.large;
            // div.appendChild(image);
            div.appendChild(p);
            document.querySelector('.container-6 .flex-ajax-row-1').appendChild(div);
        }
    })

let title = str => str[0].toUpperCase() + str.slice(1);

function mustafa(){
    return '5';
}
mustafa();







































































