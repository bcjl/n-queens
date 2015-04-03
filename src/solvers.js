/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
// board.set(n, x) takes in target row, x is what to replace row with
// board.get(n) retrieves the target row
// board.rows() retrieves entire board

// board.hasAnyRowConflicts() checks current state of the board
//  for horizontal issues
// board.hasAnyColConflicts() checks current state of board for column conflicts

window.playsGen = function(n){
  plays = [];
  for(var i = 0; i < n; i++){
    plays.push([]);
    for(var o = 0; o < n; o++){
      plays[i].push(0);
      if(i === o){
        plays[i][o] = 1;
      }
    }
  }
  return plays;
};

window.emptyRow = function(n){
  if(n === 0){
    return 0;
  }

  empty = [];
  for(var i = 0; i < n; i++){
    empty.push([]);
    for(var o = 0; o < n; o++){
      empty[i].push(0);
    }
  }
  return empty;
};

window.findNRooksSolution = function(n) {
  var solution;
  var boardObj = new Board({'n': n});
  var successSol = [];
  // var rowLength = n;
  // var plays = window.playsGen(n);

  // var empty = window.emptyRow(n);
  // console.dir(empty);

  var algorithm = function(queensLeft){

        for(var i = 0; i < n; i++){
          // board.set(rowLength - queensLeft, plays[i])
          boardObj.togglePiece(n - queensLeft, i);
          // if(!board.hasAnyRooksConflicts()){
            if(!boardObj.hasAnyRooksConflicts()){
              if(queensLeft > 1){
                return algorithm(queensLeft - 1);
              } else{
                return boardObj.rows();
                board.togglePiece(rowLength - queensLeft, i);
              }
            }
            boardObj.togglePiece(n - queensLeft, i);
        }
      }
  var ans = algorithm(n);
  return ans;
  // solution = successSol[0];
  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  // return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
// // Initialization
//   var solutionCount;
//   var board = new Board({'n': n});
//   var successSol = [];
//   var rowLength = n;
//   var plays = window.playsGen(n);

//   var empty = window.emptyRow(n);
//   console.dir(empty);

// // Filling up all possible solutions
//   var algorithm = function(queensLeft){
//     if(queensLeft === 0){
//         successSol.push(board.rows());
//         board.set(n-1,empty)
//     } else{
//         for(var i = 0; i < plays.length; i++){
//           board.set(rowLength - queensLeft, plays[i])
//           if(!board.hasAnyRooksConflicts()){
//             algorithm(queensLeft - 1);
//             board.set(rowLength - queensLeft, empty);
//           }
//         }
//       }
//   }
//   algorithm(n);

// // Solution calculation
//   solutionCount = successSol.length;
//   console.log(successSol);
//   // return successSol;
//   console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
//   return solutionCount;



  // var solutionCount = 0;
  // var boardObj = new Board({'n': n});

  // var algorithm = function(queensLeft){
  //       for(var i = 0; i < n; i++){
  //         boardObj.togglePiece(n - queensLeft, i);

  //           if(!boardObj.hasAnyRooksConflicts()){
  //             if(queensLeft > 1){
  //               algorithm(queensLeft - 1);
  //             } else{
  //               solutionCount++;
  //               // boardObj.togglePiece(rowLength - queensLeft, i);
  //             }
  //           }
  //         boardObj.togglePiece(n - queensLeft, i);
  //       }
  //     }
  // algorithm(n);
  // console.log("Finished for size: " + n + "count at: " + solutionCount);
  // return solutionCount;

   //START OVER

};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  if(n === 0){
    console.log("returning 0");
    return [];
  }
  var solution;
  var boardObj = new Board({'n': n});
  if(n === 2 || n === 3){
    return boardObj.rows();
  }
  var successSol = [];
  // var rowLength = n;
  // var plays = window.playsGen(n);

  // var empty = window.emptyRow(n);
  // console.dir(empty);

  var algorithm = function(queensLeft){

        for(var i = 0; i < n; i++){
          // board.set(rowLength - queensLeft, plays[i])
          boardObj.togglePiece(n - queensLeft, i);
          // if(!board.hasAnyRooksConflicts()){
            if(!boardObj.hasAnyQueensConflicts()){
              if(queensLeft > 1){
                return algorithm(queensLeft - 1);
              } else{
                return boardObj.rows();
                board.togglePiece(rowLength - queensLeft, i);
              }
            }
            boardObj.togglePiece(n - queensLeft, i);
        }
      }
  var ans = algorithm(n);
  return ans;

  // console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  // return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
