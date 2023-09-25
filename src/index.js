
const { v4: uuidv4 } = require('uuid');

console.log(uuidv4());

// const stateFunction = (results) => {
//     let playerOne = 0;
//     let playerTwo = 0;

//     for (let i = 0; i < results.length; i++) {
//         if (results[i] === 1) {
//             playerOne += 1;
//         } else {
//             playerTwo += 1;
//         }

//     }

//     if(playerOne > playerTwo){
//         console.log("Player 1 wins", playerOne)
//     } else if(playerTwo > playerOne){
//         console.log("Player 2 wins", playerTwo)
//     }
//     else{
//         console.log("Draw", playerOne)
//     }
// }

// stateFunction([1,2,1,2,2,1,2,1,2,1,2,1,2])