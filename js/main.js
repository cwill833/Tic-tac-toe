/*---- constants ----*/ 
const PLAYERS = {
    '1': 'Images/Giottos-O.jpg',
    '-1': 'Images/Red-painted-X-300x250.jpg',
    '0': 'Images/red-click-here-button.gif'
};

/*----- app's state (variables) -----*/
let board;
let turn;
let winner;

/*----- cached element references -----*/ 
const msgChange = document.getElementById('turn');

/*----- event listeners -----*/
document.querySelector('section')
    .addEventListener('click', handleClick);

/*----- functions -----*/

init();

function handleClick (evt){
    const marker = evt.target;
    const colIdx = parseInt(marker.id.replace('col', ''));
    if (isNaN(colIdx)) return;
    const rowIdx = board[colIdx].indexOf(0);
    if(rowIdx === -1) return;
    board[colIdx][rowIdx] = turn;
    winner = getWinner();
    turn *= -1;
    render();
}

function checkCol(colIdx){
    return null;
}

function getWinner(){
    let winner = null;
    for(let colIdx = 0; colIdx < board.length; colIdx++){
        winner = checkCol(colIdx);
        if(winner) break;
    }
    return winner;
}

function render(){
    //display the board
    board.forEach((colARR, colIDX)=> {
        // access the correct div in the section
        colARR.forEach((cell,rowIDX) => {
            const div = document.getElementById(`c${colIDX}r${rowIDX}`);
            div.style.backgroundImage = url('PLAYERS[cell]');
        });
    });

    if (winner) {
        if (winner === 'T'){
            msgChange.textContent = "It's a Tie!"
        } else {

        }
    } else {
        msgChange.textContent = `${PLAYERS[turn]}'s Turn`;

    }
};

function init (){
    board = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];
    winner = null;
    turn = 1;
    render();
}