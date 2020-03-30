import React from 'react';
//import Counter from './components/Counter.js'
import CounterContainer from './containers/CounterContainer';
import Todos from './components/Todos.js'
/*
import ColorBox from './components/ColorBox.js';
Provider를 사용하기위해 context를 임포트 사용했다면 기본값을 넣어주어야 오류가 나지 않음
import ColorContext from './contexts/color.js';
import { ColorProvider } from './contexts/color.js'
import SelectColors from './components/SelectColors.js';
*/

function App() {
  return (
    <div>
      <CounterContainer />
      {console.log("4.App.js")}
      <hr />
      <Todos />
    </div>
    /*
    레거시 : <ColorContext.Provider value={{color:'green'}}>
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox></ColorBox>
      </div>
    </ColorProvider>
    레거시 : </ColorContext.Provider>
    */
  );
}

export default App;
