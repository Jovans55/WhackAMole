
// Gets all of the elements needed for it to work from HTML
let images = document.querySelectorAll("img");
let invasionBtn = document.querySelector("#invasion");
let score = document.querySelector("#score");
let title = document.querySelector("#title");
let section = document.querySelector("section");
let timer = document.querySelector("#timer");

//Creating new elements for use

//creats a reload button to be set to reload the page when people win or fail
let reload = document.createElement("button");
//newScore is used to add points then set them equal to scores text
let newScore = 0
// used to create random number to move alien
let mover;
//used to save old number so no repeats and alien doesn't move each click
let oldMover;
//sets the time left for the user to get an alien
let timeLeft = 5;

// sets and creates invasion mode
let invasion = false;

//a loop to be able to set i to a number than use that to see each image
for (let i = 0; i < images.length; i++) {
    //this turns on a function when an image is clicked
  images[i].addEventListener("click", function() {
      console.log("you checked for aliens"); //for testing
      // An if statement checks if the score is 100 and tells the player they won!
      if (newScore >=100) {
        score.textContent = 'YOU WON!'
        score.style.fontSize = '100px'
        document.body.style.backgroundColor = 'gold';
        score.append(reload);
        reload.textContent = 'Play Again?'
        timeLeft = 9999;
        // an else if statement checks if it is an alien also checks if invasion was set on then sets score and moves alien
        }else if (images[i].getAttribute("src") === "images/alienS.png" && !invasion) {
          console.log("you found the alien"); //for testing
          images[i].src = "images/space.png"
          // CHANGES THIS IF YOU WANNA CHEAT!!!!!!!
          newScore ++
          score.textContent = newScore
          moveAlien()
          timeLeft = 5;
          // invasion mode makes aliens swarm the user when one is clicked
        } else if (images[i].getAttribute("src") === "images/alienS.png" && invasion){
            console.log("you found the alien"); //for testing
            images[i].src = "images/space.png"
            newScore++
            score.textContent = newScore
            moveAlien()
            moveAlien()
            // TIME IS LESS IN INVASION MODE
            timeLeft = 3;
        }
    }); 
}

/* this funciton creates a random number than uses that number to move the alien to it, also checks if the alien is already there with oldMover so it doesn't get stuck */
function moveAlien() {
    mover = Math.floor(Math.random() * 9);
    console.log(mover) //for testing
    if(mover === oldMover){
        mover = Math.floor(Math.random() * 9)
        images[mover].src = "images/alienS.png";
        oldMover = mover;
    } else {
        images[mover].src = "images/alienS.png";
        oldMover = mover;
    }
}

//function that counts down if user doesn't get an alien they lose;
const countdownTimer = setInterval(() => {
  timer.textContent = `You have ${timeLeft} seconds to catch one`
  timeLeft--;
  if (timeLeft < 0) {
    score.textContent = 'YOU FAILED'
    score.style.fontSize = '100px'
    document.body.style.backgroundColor = 'gray';
    score.append(reload);
    reload.textContent = 'Retry?'
    images[0].src = "images/space.png"
    images[1].src = "images/space.png"
    images[2].src = "images/space.png"
    images[3].src = "images/space.png"
    images[4].src = "images/space.png"
    images[5].src = "images/space.png"
    images[6].src = "images/space.png"
    images[7].src = "images/space.png"
    images[8].src = "images/space.png"
    clearInterval(countdownTimer);
  }
}, 1000);

// The invasion button when clicked will turn on invasion mode changes colors and how aliens work see line 33
invasionBtn.addEventListener("click", function(){
    if(!invasion){
        invasion = true;
        invasionBtn.textContent = 'CLICK TO STOP INVASION MODE';
        title.textContent = 'YOU ARE BEING INVADED';
        document.body.style.backgroundColor = 'darkred';
        section.style.border = "25px solid red";
        console.log("you turned on invasion"); //for testing 
        // Turns off invasion mode resets everything back
    } else {
        invasion = false;
        invasionBtn.textContent = 'CLICK TO START INVASION MODE';
        title.textContent = 'YOU STOPPED THE INVASION';
        document.body.style.backgroundColor = '#01C772';
        section.style.border = "15px solid #6BEC01";
        console.log("you turned off invasion"); //for testing
        //resets all the the images back to their orignally value feel like this could've been done better
        images[0].src = "images/alienS.png"
        images[1].src = "images/space.png"
        images[2].src = "images/space.png"
        images[3].src = "images/space.png"
        images[4].src = "images/space.png"
        images[5].src = "images/space.png"
        images[6].src = "images/space.png"
        images[7].src = "images/space.png"
        images[8].src = "images/space.png"
    }
})

//reloads the page if you failed once the timer hit 0
reload.addEventListener("click", function(){
    // yes I had to googled this
    window.location.reload();
})