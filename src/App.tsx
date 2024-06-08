import React from 'react';
// import logo from './logo.svg';
import './App.css';
import EasyInfo from './components/EasyInfo';
import Main from './components/Main';

function App() {
  const textLightMode: string = `
    color: black;
  `

  const backgroundLightMode: string = `
    background: #FDFFE2;
  `



  return (
    <>
      <EasyInfo value={"-PatienceDay Clock-"} />
      <Main
        fontColor={textLightMode}
        backgroundColor={backgroundLightMode}
      />
      <EasyInfo value={"©Swiss Army Apps"} />

    </>
  );
}

export default App;
