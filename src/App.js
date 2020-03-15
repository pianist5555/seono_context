import React from 'react';
import ColorBox from './components/ColorBox.js';
// Provider를 사용하기위해 context를 임포트 사용했다면 기본값을 넣어주어야 오류가 나지 않음
// import ColorContext from './contexts/color.js';

import { ColorProvider } from './contexts/color.js'

function App() {
  return (
    //레거시 : <ColorContext.Provider value={{color:'green'}}>
    <ColorProvider>
      <div>
        <ColorBox></ColorBox>
      </div>
    </ColorProvider>
    //레거시 : </ColorContext.Provider>
  );
}

export default App;
