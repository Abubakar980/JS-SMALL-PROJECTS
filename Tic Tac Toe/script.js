let boxes = document.querySelectorAll(".box");

let turn = "X";
let isGameOver = false;


//for running the game
boxes.forEach(e => {
    e.innerHTML = ""
    e.addEventListener("click", () => {
        if (!isGameOver && e.innerHTML === "") {
            e.innerHTML = turn //is sy har box my jis ki turn hogi woh letter show ho ga
            checkWin();
            checkDraw();
            changeTurn();
        }
    })
})


// if a player wins then what
function checkWin() {
    let winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    for (let i = 0; i < winConditions.length; i++) {
        let v0 = boxes[winConditions[i][0]].innerHTML;
        let v1 = boxes[winConditions[i][1]].innerHTML;
        let v2 = boxes[winConditions[i][2]].innerHTML;

        if (v0 != "" && v0 === v1 && v1 === v2) {
            isGameOver = true;
            document.querySelector("#results").innerHTML =` "${turn}"   Wins!`
            document.querySelector("#play_again").style.display = "inline"
            
            for (let j = 0; j < 3; j++) {
                boxes[winConditions[i][j]].style.backgroundColor = "#08D9D6"
                boxes[winConditions[i][j]].style.color = "#000"
            }
        }
    }
}


// checking if game is draw
function checkDraw() {
    if (!isGameOver) {
        let isDraw=true
        boxes.forEach(e=>{
            if(e.innerHTML==="")isDraw=false;
        })    
        
        if(isDraw){
            document.querySelector("#results").innerHTML =` Draw!  <br> Try again`
            document.querySelector("#play_again").style.display = "inline"
        }
    }
}


// changing person turn
function changeTurn() {
    if (turn === "X") {
        turn = "O"
        document.querySelector(".bg").style.left = "85px"
    }
    else {
        turn = "X"
        document.querySelector(".bg").style.left = ""
    }
}


// for restarting the game
document.querySelector("#play_again").addEventListener("click",()=>{
    isGameOver=false
    turn="X"
    document.querySelector(".bg").style.left="0"
    document.querySelector("#results").innerHTML=""
    document.querySelector("#play_again").style.display="none"

    boxes.forEach(e=>{
        e.innerHTML=""
        e.style.removeProperty("background-color")
        e.style.color="#fff"
    })
})
