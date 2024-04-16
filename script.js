let p1_box1 = document.getElementById("player1-box1");
let p1_box2 = document.getElementById("player1-box2");
let p1_box3 = document.getElementById("player1-box3");
let p1_box4 = document.getElementById("player1-box4");
let p1_box5 = document.getElementById("player1-box5");
let p1_box6 = document.getElementById("player1-box6");

let p2_box1 = document.getElementById("player2-box1");
let p2_box2 = document.getElementById("player2-box2");
let p2_box3 = document.getElementById("player2-box3");
let p2_box4 = document.getElementById("player2-box4");
let p2_box5 = document.getElementById("player2-box5");
let p2_box6 = document.getElementById("player2-box6");

let player_one_score_holder = document.getElementById("playonescore");
let player_second_score_holder = document.getElementById("playseconscore");

function resetMYgame(){
    p1_box1.innerHTML = "";
    p1_box2.innerHTML = "";
    p1_box3.innerHTML = "";
    p1_box4.innerHTML = "";
    p1_box5.innerHTML = "";
    p1_box6.innerHTML = "";
    p2_box1.innerHTML = "";
    p2_box2.innerHTML = "";
    p2_box3.innerHTML = "";
    p2_box4.innerHTML = "";
    p2_box5.innerHTML = "";
    p2_box6.innerHTML = "";
    x = 0;
    y= 0;
    player_one_count = 1;
    player_one_score = 0;
    player_second_count = 1;
    player_second_score = 0;
    player_one_score_holder.innerHTML = "";
    player_second_score_holder.innerHTML= "";

}

let x = 0;
let p = 0;
let player_one_count = 1;
let player_one_score = 0;
function playerOne(){
    x = Math.random() * 10;
    x = Math.ceil(x);
    if( x > 6){
        x = x-6;
    }

    if ( x == 5) {
         x -= 2;
    }
    switch(player_one_count){
        case 1 :     
        p1_box1.innerHTML = x;
        player_one_count++;
        player_one_score += x;
        player_one_score_holder.innerHTML = player_one_score;
        break;

        case 2 : 
        p1_box2.innerHTML= x;
        player_one_count++;
        player_one_score += x;
        player_one_score_holder.innerHTML = player_one_score;
        break;

        case 3 :
        p1_box3.innerHTML= x;
        player_one_count++;
        player_one_score += x;
        player_one_score_holder.innerHTML = player_one_score;
        break; 

        case 4 : 
        p1_box4.innerHTML= x;
        player_one_count++;
        player_one_score += x;
        player_one_score_holder.innerHTML = player_one_score;
        break;

        case 5 : 
        p1_box5.innerHTML = x;
        player_one_count++;
        player_one_score += x;
        player_one_score_holder.innerHTML = player_one_score;
        break;

        case 6 :
        p1_box6.innerHTML= x;
        player_one_count++;
        player_one_score += x;
        player_one_score_holder.innerHTML = player_one_score;
        break;
    }

    if(player_one_count > 6){
        alert(" Player Second Turn");
    }
}

let y = 0;
let player_second_count = 1;
let player_second_score = 0;
function playerSecond(){
    if(player_one_count < 6){
        alert(" firt player one complete the game");
       return;
    }

    y = Math.random() * 10;
    y = Math.ceil(y);
    if( y > 6){
        y = y-6;
    }
    if ( y == 5) {
         y -= 2;
    }
    switch(player_second_count){
        case 1 :     
        p2_box1.innerHTML = y;
        player_second_count++;
        player_second_score +=y;
        player_second_score_holder.innerHTML = player_second_score;
        break;

        case 2 : 
        p2_box2.innerHTML= y;
        player_second_count++;
        player_second_score +=y;
        player_second_score_holder.innerHTML = player_second_score;
        break;

        case 3 :
        p2_box3.innerHTML= y;
        player_second_count++;
        player_second_score +=y;
        player_second_score_holder.innerHTML = player_second_score;
        break; 

        case 4 : 
        p2_box4.innerHTML= y;
        player_second_count++;
        player_second_score +=y;
        player_second_score_holder.innerHTML = player_second_score;
        break;

        case 5 : 
        p2_box5.innerHTML = y;
        player_second_count++;
        player_second_score +=y;
        player_second_score_holder.innerHTML = player_second_score;
        break;

        case 6 :
        p2_box6.innerHTML= y;
        player_second_count++;
        player_second_score +=y;
        player_second_score_holder.innerHTML = player_second_score;
        break;

        default : console.log(" my fault");
    }

}

function checkwinner(){
    if(player_one_count >= 6 || player_second_count >= 6){
        if( player_one_score > player_second_score){
            alert(" Player one is winner");
        } else if(player_second_score > player_one_score){
            alert(" player second is winner") 
        } else {
            alert(" The game is tie");
        }
    } else {
        alert(" complete the game first");
    }
}