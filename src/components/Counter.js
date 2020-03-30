import React from 'react';
// CounterContainer.js 에서 modules/counter.js에 있는 액션 생성 함수 increase와 decrease를 각각 파라미터로 넣고 있음
const Counter = ({ number, onIncrease, onDecrease }) => {
    return(
        <div>
            <h1>{number}</h1>
            <div>
                {console.log("6&10.counter.js 컴포넌트")}
                {/*액션타입이 생성되는 함수가 실행되고 provider에 의해 리렌더링*/}
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    );
};

export default Counter;