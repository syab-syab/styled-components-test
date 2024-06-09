import React from 'react';
// import logo from './logo.svg';
import './App.css';
import EasyInfo from './components/EasyInfo';
import Main from './components/Main';
import FixedMenu from './components/FixedMenu';

function App() {
  const textLightMode: string = `
    color: black;
  `

  const backgroundLightMode: string = `
    background: #FDFFE2;
  `



  return (
    <>
      <EasyInfo value={"-PatienceDay Clock-"} tag={true} />
      <Main
        fontColor={textLightMode}
        backgroundColor={backgroundLightMode}
      />
      <FixedMenu />
      <EasyInfo value={"©Swiss Army Apps"} tag={false} />

    </>
  );
}

export default App;
