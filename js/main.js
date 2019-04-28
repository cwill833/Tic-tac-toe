/*---- constants ----*/ 
const PLAYERS = {
    '1': 'X',
    '-1': 'O',
    '0': null,
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
    console.log(evt)
    const colIdx = parseInt(marker.id.slice(1,2));
    const rowIdx = parseInt(marker.id.slice(3));
    if(board[colIdx][rowIdx]) return;
    board[colIdx][rowIdx] = turn;
    console.log(colIdx);
    console.log(rowIdx);
    turn *= -1;
    render();
}





function render(){
    //display the board
    board.forEach((colARR, colIDX)=> {
        // access the correct div in the section
        colARR.forEach((cell,rowIDX) => {
            const div = document.getElementById(`c${colIDX}r${rowIDX}`)
            div.textContent= PLAYERS[cell]
        });
    });
    msgChange.textContent = `${PLAYERS[turn]}'s Turn`;
};

function init (){
    board = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];
    turn = 1;
    render();
}

function myButton(){
    location.reload();
};