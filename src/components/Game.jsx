import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import { Button, Col, Row, Container, Card,
  CardTitle, CardSubtitle, CardText, CardImg,
  InputGroup, InputGroupAddon, InputGroupText, Input,
  CardBody} from 'reactstrap';
import Pieces from "./Pieces";
import WinLine from "./WinLine";



@observer
class Game extends React.Component {
  constructor(){
    super();
    this.barCollapsed = false;
  }

//returns the pieces on the board depending on turn and mode.
getCell(cellIndex){
  let pieceValue = this.props.store.board[cellIndex]
  return Pieces(pieceValue, this.props.store.gameMode, this.props.store.winningLine, cellIndex, this.props.store.winningLineIndex);

 }

 gameOver(){
   return this.props.store.isGameOver;
 }

toggleModeClick(){
  this.props.store.toggleMode();
}
resetGameClick(){
  this.props.store.resetGame();
}

boardClick(e){
  console.log("board clicked at", e.target.id )
  store.makeMove(e.target.id)
}

toggleNavbar(){
    this.barCollapsed = !this.barCollapsed;
}


  render() {
    return (
    <Container>


        <Row>
          <Col lg="8">
            <Card className="mt-4" >
            <Row>
              <Col lg="12" className=" m-3">
              Next turn:   <span className={(this.props.store.playerOneTurn)? 'player active':'player'} > Player 1: O </span>
            <span className={ (!this.props.store.playerOneTurn)? 'player active':'player'}> Player 2: X</span>
              </Col>
            </Row>
          </Card>

          <Card className="mt-4">
          <div className="wrapper">

            <div className="board" id="board" onClick={this.boardClick}>
              <div id="0" className="tic-cell blt btt">{this.getCell(0)}</div>
              <div id="1" className="tic-cell btt">{this.getCell(1)}
              </div>
              <div id="2" className="tic-cell btt brt">{this.getCell(2)}</div>
              <div id="3" className="tic-cell blt">{this.getCell(3)}
              </div>
              <div id="4" className="tic-cell">{this.getCell(4)}
              </div>
              <div id="5" className="tic-cell brt">{this.getCell(5)}</div>
              <div id="6" className="tic-cell blt bbt">{this.getCell(6)}
              </div>
              <div id="7" className="tic-cell bbt">{this.getCell(7)}</div>
              <div id="8" className="tic-cell bbt brt">{this.getCell(8)}</div>

          </div>
      </div>
      </Card>
  </Col>

  <Col md="4">

  <Card className="mt-4" >
        <CardBody >
          <CardTitle>Game options:  {this.props.store.isGameOver && <strong> {this.props.store.winner}</strong>}</CardTitle>



      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <Input addon type="checkbox" aria-label="Checkbox for following text input" onClick={()=>{this.toggleModeClick()}}/>
          </InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Zardoz Mode" disabled />


      </InputGroup>

     <Row className="pt-4">
      <Col xs="4">
         <Button color="primary" onClick={()=>{this.resetGameClick()}}> New game </Button>
      </Col>
        <Col xs="4">
        <Button color="secondary" disabled={!this.props.store.moveHistory.length} onClick={()=>{this.props.store.undoMove()}}> Undo Last</Button>
        </Col>
     </Row>


        </CardBody>
      </Card>

  </Col>


  </Row>
  </Container>

  )};

}//class

export default Game;
