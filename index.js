//left dice
setTimeout(() => {
    
    var randomNumber1 = Math.floor(Math.random()*6)+1;
    var randomImageSrc ="images/dice"+randomNumber1+".png";  //images/dice1.png-images/dice6.png
     document.querySelector("img").setAttribute("src", randomImageSrc);
    
    var randomNumber2 = Math.floor(Math.random()*6)+1;
    var randomImageSrc2 = "images/dice"+randomNumber2+".png";
    
    document.querySelector(".img2").setAttribute("src", randomImageSrc2);
    // winning player annocement  
    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML="🚩Player 1 Wins";
    }
    else if(randomNumber2>randomNumber1){
        document.querySelector("h1").innerHTML="Player 2 Wins 🚩";
    }
    else{
        document.querySelector("h1").innerHTML="Its a Draw!";
    }
}, 500);
