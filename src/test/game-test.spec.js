
import React from 'react';
import renderer from 'react-test-renderer';
import Game from '../components/Game';
import GameModel from "../models/GameModel";

let store = new GameModel();
let component = renderer.create(
  <Game store={store} />
);

function resetGame(){
  store.resetGame();
}

function makeMoves(movesArray){
 movesArray.forEach((index)=>{
   store.makeMove(index);
 })
}


describe("Tic tac toe functional test", function() {

  afterEach(()=>{
    resetGame();
  });

  test('2 Snapshot test new game and with two moves', function() {
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    //make some moves to change component for next snapshot.
    store.makeMove(1)
    store.makeMove(3)

    // re-rendering for snapshot.
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

  });

  test('Snapshot test with win', function() {
    makeMoves([1,3,4,6,7]);
    // re-rendering for snapshot.
   let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

  });

  test("Play a full game", ()=>{

    //checks game is in progress
    expect(store.isGameOver).toEqual(false);

    //make moves to win the game.
    makeMoves([1,3,4,6,7]);
    //checks game is done
    expect(store.isGameOver).toEqual(true);

  })

  test("Undo last move after win", ()=>{
    //make moves to win the game.
    makeMoves([1,3,4,6,7]);
    //checks game is done
    expect(store.isGameOver).toEqual(true);

    store.undoMove();
    expect(store.isGameOver).toEqual(false);

  })

  test("Reset game", ()=>{
    //make moves to win the game.
    makeMoves([1,3,4,6,7]);
    //checks game is done
    expect(store.isGameOver).toEqual(true);

    store.undoMove();
    expect(store.isGameOver).toEqual(false);

  })

  test("Zardoz game mode", ()=>{
    //make some moves
    makeMoves([1,3,4]);
    //checks game is done
    expect(store.gameMode).toEqual('DEFAULT');

    store.toggleMode();
    expect(store.gameMode).toEqual('ZARDOZ');

    store.undoMove();
    expect(store.isGameOver).toEqual(false);

  })


});
