import React, { Component, Fragment } from "react";
import WinLine from './WinLine';

const Pieces = (pieceValue, mode = "DEFAULT", winningLine = [], cellIndex, winningLineIndex) => {
let cellContent = '';


  switch(mode){
    case 'DEFAULT':
      if(pieceValue == 0){
        cellContent = (
         <svg className="circle piece">
           <circle cx="50%" cy="50%" r="45%" stroke="#5a5a5a" strokeWidth="3" fill="none" />
         </svg> )
      } else if(pieceValue == 1){
        cellContent = (
          <Fragment>
          <svg className="cross piece">
           <line x1="0%" x2="100%" y1="0" y2="100%" stroke="#f47521" strokeWidth="5"/>
           <line x1="0" y1="100%" x2="100%" y2="0" stroke="#f47521" strokeWidth="5"/>
         </svg>
      </Fragment>)
       }
       break;
    case 'ZARDOZ':
      if(pieceValue == 0){
        cellContent =  (
          <div id="circleWrapper">
              <div className="circleclass"></div>
          </div> )
      } else if( pieceValue == 1){
        cellContent = (
          <svg className="square piece">
            <rect width="100%" height="100%" stroke="#f47521" strokeWidth="3" fill="none" />
          </svg> )
       }
      break;
    default:
      cellContent = "";
      break;
  }

  if(winningLine.includes(cellIndex)){
    cellContent = <Fragment>
      {cellContent}
      {WinLine(winningLineIndex)}
    </Fragment>
  }

  return cellContent;

}

export default Pieces;
