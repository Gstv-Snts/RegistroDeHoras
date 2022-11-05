import React from "react";
import Login from "./components/Login";
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    float: left;
    font-family: "Montserrat";
  }
  html{
    width: 100%;
    height: 100%;
  }
  body{
    width: 100%;
    height: 100%;
  }
  #root{
    width: 100%;
    height: 100%;
  }
  .App{
    width: 100%;
    height: 100%;
  }
`

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Login />
    </div>
  );
}

export default App;
