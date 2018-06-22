/*

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)

*/
var cscore, scores, activeplayer, activegame;
open();

//Roll Button
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(activegame===true)
        {
            
        
var dice1= Math.floor(Math.random()*6)+1;
var dice2= Math.floor(Math.random()*6)+1;
document.querySelector('#dice-1').style.display='block';
document.querySelector('#dice-2').style.display='block';
document.querySelector('#dice-1').src='dice-'+dice1+'.png';
document.querySelector('#dice-2').src='dice-'+dice2+'.png';
    if(dice1 === 1 || dice2 === 1)
        {
            togglenextplayer();
        }
    else
        {        
            cscore += dice1+dice2;
            document.getElementById('current-'+activeplayer).textContent=cscore;
            
        }
            }
})

//Hold Button
document.querySelector('.btn-hold').addEventListener('click', function(){
    if(activegame===true)
        {
           scores[activeplayer]+=cscore;
    document.getElementById('score-'+activeplayer).textContent=scores[activeplayer];
    //TextField FinalScore;
var limit= document.querySelector('.final-score').value;
if(limit>=10 && limit<1000)
    {
        var inputscore= limit;
    }
    else
    {
        inputscore=100;
    }
    
    if(scores[activeplayer]>inputscore)
        {
            document.getElementById('name-'+activeplayer).textContent= "Winner";
            document.getElementById('current-0').textContent= 0;
            document.getElementById('current-1').textContent= 0;
            activegame=false;
            
        }
    else
        {
            togglenextplayer();
        }
            }
    
});


//NewGame Button
document.querySelector('.btn-new').addEventListener('click', function(){
    document.getElementById('score-0').textContent= 0;
document.getElementById('score-1').textContent= 0;
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    scores= [0,0];
    cscore= 0;
    togglenextplayer();
});


function togglenextplayer()
{
            activeplayer === 0 ? activeplayer=1: activeplayer=0;
            cscore=0;
            document.getElementById('current-0').textContent=0;
            document.getElementById('current-1').textContent=0;
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
}

function open()
{
scores= [0,0];
cscore= 0;
activeplayer=0;
    activegame=true;
document.getElementById('score-0').textContent= 0;
document.getElementById('score-1').textContent= 0;
document.getElementById('current-0').textContent= 0;
document.getElementById('current-1').textContent= 0;
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('#dice-1').style.display= 'none';
document.querySelector('#dice-2').style.display= 'none';
}







/*
<div class="wrapper clearfix">
            <div class="player-0-panel active">
                <div class="player-name" id="name-0">Player 1</div>   
                <div class="player-score" id="score-0">43</div>
                <div class="player-current-box">
                    <div class="player-current-label">Current</div>
                    <div class="player-current-score" id="current-0">11</div>
                </div>
            </div>
            
            <div class="player-1-panel">
                <div class="player-name" id="name-1">Player 2</div>
                <div class="player-score" id="score-1">72</div>
                <div class="player-current-box">
                    <div class="player-current-label">Current</div>
                    <div class="player-current-score" id="current-1">0</div>
                </div>
            </div>
            
            <button class="btn-new"><i class="ion-ios-plus-outline"></i>New game</button>
            <button class="btn-roll"><i class="ion-ios-loop"></i>Roll dice</button>
            <button class="btn-hold"><i class="ion-ios-download-outline"></i>Hold</button>
            
            <input type="text" placeholder="Final score" class="final-score">
            
            <img src="dice-5.png" alt="Dice" class="dice" id="dice-1">
            <img src="dice-5.png" alt="Dice" class="dice" id="dice-2">
        </div>
*/