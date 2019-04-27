import React from "react";
import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import './index.scss';
import GameModel from "./models/GameModel";
import Game from "./components/Game";
import SiteNavBar from "./components/SiteNavBar";

const store = new GameModel();

render(
  <div>
    <SiteNavBar />
    <Game store={store} />
  </div>,
  document.getElementById("root")
);


// playing around in the console TODO: remove this
window.store = store;
