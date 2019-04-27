import React, { Component } from "react";
const WinLine = (winningLineIndex)=>{

//Based on the game winning index we can deduct what line we need to use.
/* index representation
0 = horizontal top  ht                  [0,1,2]
1 = horizontal middle  hm               [3,4,5]
2 = horizontal bottom  hb               [6,7,8]
3 = vertical left                       [0,3,6]
4 = vertical middle                     [1,4,7]
5 = vertical right                      [2,5,8]
6 = diagonal left top to borrom right   [0,4,8]
7 = diagonal left bottom to right top   [2,4,6]


*/
// creating a hash of the winning row to identify the line needed.

  switch(winningLineIndex){
    case 0:
    case 1:
    case 2:
      return (
        <svg className="strikeline">
         <line className="wl" x1="0" y1="49%" x2="100%" y2="49%"  />
        </svg>
      );
       break;
    case 3:
    case 4:
    case 5:
      return (
        <svg className="strikeline">
         <line className="wl" x1="48%" y1="0" x2="48%" y2="100%" />
        </svg>
      )
      break;
    case 6:
      return (
        <svg className="strikeline">
         <line x1="0" y1="0" x2="100%" y2="100%" />
        </svg>
      );
    case 7:
      return (
        <svg className="strikeline">
          <line x1="0" y1="100%" x2="100%" y2="0" />
       </svg>
        );
      break;
    default:
      return "";
      break;
  }

}

export default WinLine;
