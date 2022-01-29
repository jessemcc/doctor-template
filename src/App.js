import React from 'react';
import {NavBar} from "./components/navbar/navbar";
import {Hero} from "./components/hero/hero";
import {About} from "./components/about/about";
import {Services} from "./components/services/services";
import {Contact} from "./components/contact/contact";
import AppStyle from "./App.module.scss";

function App() {
  return (
    <div className={AppStyle.mainContainer}>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
