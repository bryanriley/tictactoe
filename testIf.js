var r1 = ['x','o','x'];
var r2 = ['o','','x'];
var r3 = ['o','','x'];

var gameWinner = '';

/* Checking Rows */

if(!gameWinner && r1[1] === r1[2] && r1[1] === r1[3]) {
    gameWinner = r1[1];
} else if (!gameWinner && r2[1] === r2[2] && r2[1] === r2[3]) {
    gameWinner = r2[1];
} else if (!gameWinner && r3[1] === r3[2] && r3[1] === r3[3]) {
    gameWinner = r3[1];
}

/* Checking Columns */

if(!gameWinner && r1[1] === r2[1] && r1[1] === r3[1]) {
    gameWinner = r1[1];
} else if (!gameWinner && r1[2] === r2[2] && r1[2] === r3[2]) {
    gameWinner = r2[1];
} else if (!gameWinner && r1[3] === r2[3] && r1[3] === r3[3]) {
    gameWinner = r3[1];
}

/* Test */

if (gameWinner){
  console.log( 'true');
} else {
  console.log( 'false');
}
