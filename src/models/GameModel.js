import { observable, computed, action } from "mobx";


export default class GameModel {

  constructor(){
    this.allPossibleLines = [[0,1,2], [3,4,5], [6,7,8],
                         [0,3,6], [1,4,7], [2,5,8],
                         [0,4,8], [2,4,6]];

                         /* index representation
                         0 = horizontal top
                         1 = horizontal middle
                         2 = horizontal bottom
                         3 = vertical left
                         4 = vertical middle
                         5 = vertical right
                         6 = diagonal left top to borrom right
                         7 = diagonal left bottom to right top
                        */


    this.playerOneTurn = true;
    this.pieceNames = {0: "Circles", 1: "Crosses"};
    this.winner = "";
  }

  @observable board = Array(9).fill(null);
  @observable gameMode = "DEFAULT" //or ZARDOZ
  @observable gameOver = false;
  @observable winningLine = [];
  @observable winningLineIndex = null;
  @observable moveHistory = []; // arr of move obj.

  @computed
  get isGameOver() {
    let gameOver = this.gameOver == true || !this.board.some( x => x == null )
    if(gameOver && this.winner == ""){
      this.winner = "Draw"

    }

    return gameOver
  }

  isLine(num){
    let isLine = false;
    this.allPossibleLines.forEach((lineIndices, index)=>{
      if (lineIndices.every( index => this.board[index] === num )){
        isLine = true;
        this.winningLine = lineIndices;
        this.winningLineIndex = index;

        return true;
      }
   });

   return isLine;
  }

  @action
  toggleMode(){
    this.gameMode =   this.gameMode == "DEFAULT" ? "ZARDOZ" : "DEFAULT";
  }

  @action
  resetGame(){
    this.board = Array(9).fill(null);
    this.gameOver = false;
    this.winner = "";
    this.winningLine = [];
    this.winningLineIndex = null;
    this.moveHistory = [];
  }

  @action
  undoMove(){

    if(this.moveHistory.length){
      this.gameOver = false;
      this.winner = "";
      this.winningLine = [];
      this.winningLineIndex = null;

      let lastMove = this.moveHistory.pop();
      this.board[lastMove.boardIndex] = null;
      this.playerOneTurn = !this.playerOneTurn;
    }
    //remove from history.


  }

  @action
  makeMove(boardIndex) {

    if(this.isGameOver){console.log("game over"); return}

    let isWinningMove = false;

    if(this.board[boardIndex] === null && boardIndex){
      this.board[boardIndex] = this.playerOneTurn ? 0: 1;

      this.moveHistory.push({
        boardIndex: boardIndex,
        playerTurn: this.board[boardIndex]
      })

      isWinningMove = this.isLine(this.board[boardIndex]);

      if(isWinningMove){
        this.gameOver = true;
        this.winner = this.pieceNames[this.board[boardIndex]] + " win!";
      }
      this.playerOneTurn = !this.playerOneTurn;
    }
  }
}
