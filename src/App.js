import React from 'react';
import {NavBar} from "./components/navbar/navbar";
import {Hero} from "./components/hero/hero";
import AppStyle from "./App.module.scss";

function App() {
  return (
    <div className={AppStyle.mainContainer}>
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
