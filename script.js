const playGame = (() => {

const tiles = document.querySelectorAll(".tiles");
const winner = document.querySelector("#winner");
const reset = document.querySelector("#reset");
const playerOneName = document.querySelector("#player1");
const playerTwoName = document.querySelector("#player2");
let players = []
let win = false;

const playerFactory = (name, mark, move) => {
    
    let playMove = (tile, playerName) =>  gameController(tile, mark, playerName);
    return{name, mark, move, playMove}
  
  };

const player1 = playerFactory('Player 1', 'x', true); 
const player2 = playerFactory('Player 2', 'o', false);

players.push(player1, player2)

const gameBoard = {
    "1":"",
    "2":"",
    "3":"",
    "4":"",
    "5":"",
    "6":"",
    "7":"",
    "8":"",
    "9":"",
}

playerOneName.addEventListener("keyup", function(e){
    let name = e.target.value;
    player1.name = name;
    players[0].name = name;
})

playerTwoName.addEventListener("keyup", function(e){
    let name = e.target.value;
    player2.name = name;
    players[1].name = name;
})

reset.addEventListener("click", function(){
    resetGameBoard();
})

for(let i = 0; i < tiles.length; i++){
    tiles[i].addEventListener("click", function(e){
        let tile = e.target.id;
        if(win === true){
            return;
        }else if(e.target.innerHTML != ""){
            return;
        }else{
            if(player1.move == true){
                player1.playMove(tile, player1.name); 
            }else if (player2.move == true){
                player2.playMove(tile, player2.name) 
        }
    }
    })
}

function resetGameBoard() {
    for(let i = 0; i < tiles.length; i++){
        tiles[i].innerHTML = "";
    }
        players[0].move = true;
        players[1].move = false;
        gameBoard["1"] = "";
        gameBoard["2"] = "";
        gameBoard["3"] = "";
        gameBoard["4"] = "";
        gameBoard["5"] = "";
        gameBoard["6"] = "";
        gameBoard["7"] = "";
        gameBoard["8"] = "";
        gameBoard["9"] = "";
        win = false;
        winner.innerHTML = ""

}

  const gameController = (tile, mark, name) => {

    gameBoard[tile] = mark
    document.getElementById(`${tile}`).innerHTML = mark;

    winCheck(mark, name)

    players.find((o, i) => {
        if (o.move === true) {
            players[i].move = false;
        }else if(o.move === false){
            players[i].move = true;
        }
    });

    return{win}

};

function winCheck(mark, player ){
    function isFull(obj) {
        for (var key in obj) {
            if (obj[key] == "")
                return false;
        }
        return true;
    }

    if(gameBoard['1']  == mark && gameBoard['2']  == mark && gameBoard['3'] == mark){
        winner.innerHTML = player + " Wins!";
        win = true;
    }else if(gameBoard['4']  == mark && gameBoard['5']  == mark && gameBoard['6'] == mark){
        winner.innerHTML = player + " Wins!";
        win = true;
    }else if(gameBoard['7']  == mark && gameBoard['8']  == mark && gameBoard['9'] == mark){
        winner.innerHTML = player + " Wins!";
        win = true;
    }else if(gameBoard['1']  == mark && gameBoard['4']  == mark && gameBoard['7'] == mark){
        winner.innerHTML = player + " Wins!";
        win = true;
    }else if(gameBoard['2']  == mark && gameBoard['5']  == mark && gameBoard['8'] == mark){
        winner.innerHTML = player + " Wins!";
        win = true;
    }else if(gameBoard['3']  == mark && gameBoard['6']  == mark && gameBoard['9'] == mark){
        winner.innerHTML = player + " Wins!";
        win = true;
    }else if(gameBoard['1']  == mark && gameBoard['5']  == mark && gameBoard['9'] == mark){
        winner.innerHTML = player + " Wins!";
        win = true;
    }else if(gameBoard['3']  == mark && gameBoard['5']  == mark && gameBoard['7'] == mark){
        winner.innerHTML = player + " Wins!";
        win = true;
    }else if (isFull(gameBoard) == true){
        winner.innerHTML = " DRAW!";
    }
}
    
})();