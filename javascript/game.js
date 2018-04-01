
// Click events for the crystals 

var userScore = 0;
var crystals = [];
var wins = 0;
var loses = 0;

var crystal1 = {
    setNum: [], 
    randomNum: function(){
        return Math.floor(Math.random()*12 + 1);
    }
}

var crystal2 = {
    setNum: [], 
    randomNum: function(){
        return Math.floor(Math.random()*12 + 1);
    }
}

var crystal3 = {
    setNum: [], 
    randomNum: function(){
        return Math.floor(Math.random()*12 + 1);
    }
}

var crystal4 = {
    setNum: [], 
    randomNum: function(){
        return Math.floor(Math.random()*12 + 1);
    }
}

// Computer Random Number

var computerGuess = Math.floor(Math.random() * (120 - +19) +19);

var crystalArr = Array.from(document.querySelectorAll(".crystal-img"));

    crystalArr.forEach(function(crystal){

        crystal.addEventListener("click", function(event){
            var crystalTarget = event.target.id;
            if (crystalTarget === "crystal-1"){

                if (crystal1.setNum.length === 0){
                    crystal1.setNum.push(crystal1.randomNum());
                    userScore += crystal1.setNum[0];
                }else {
                    userScore += crystal1.setNum[0];
                    console.log(userScore);
                }
                document.getElementById("userscore").textContent= userScore;

            }else if(crystalTarget === "crystal-2"){

                if (crystal2.setNum.length === 0){
                    crystal2.setNum.push(crystal2.randomNum());
                    userScore += crystal2.setNum[0];
                }else {
                    userScore += crystal2.setNum[0];
                    console.log(userScore);
                    
                }
                document.getElementById("userscore").textContent= userScore;

            }else if(crystalTarget === "crystal-3"){

                if (crystal3.setNum.length === 0){
                    crystal3.setNum.push(crystal3.randomNum());
                    userScore += crystal3.setNum[0];
                }else {
                    userScore += crystal3.setNum[0];
                    console.log(userScore);
                    
                }
                document.getElementById("userscore").textContent= userScore;

            }else if(crystalTarget === "crystal-4"){
                
                if (crystal4.setNum.length === 0){
                    crystal4.setNum.push(crystal4.randomNum());
                    userScore += crystal4.setNum[0];
                }else {
                    userScore += crystal4.setNum[0];
                    console.log(userScore);
                    
                }
                document.getElementById("userscore").textContent= userScore;

            }

         // Wins and Loses

            // check if userscore is less than computerguess
            
            // if less than computerguess return

            // if equal increment win

            // if greater than increment loss

            if ((computerGuess === userScore)){
                wins++;

                document.getElementById("wins").textContent= wins;
                console.log( 'WIN' );

                // reset game
                userScore = 0;
                computerGuess = Math.floor(Math.random() * (120 - +19) +19);

                // update to user
                document.getElementById('userscore').textContent= userScore;
                document.getElementById('computerguess').textContent= computerGuess;

            } else if ((userScore > computerGuess)){
                loses++;
    
                document.getElementById("loses").textContent= loses;
                console.log( 'LOSE' );
            
                // reset game
                userScore = 0;
                computerGuess = Math.floor(Math.random() * (120 - +19) +19);
                
                // update to user
                document.getElementById('userscore').textContent= userScore;
                document.getElementById('computerguess').textContent= computerGuess;

            }
        });
    });



// Html

document.getElementById("computerguess").textContent= computerGuess;
        

