import React from "react";
import MainContainer from "./components/MainContainer.js";
import { render } from "react-dom";
import Header from './components/Header.js'
import './styles.css';

const App = () => (
  <div>
    <Header/>
    <MainContainer/>
  </div>
); 

export default App
