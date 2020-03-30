import React from 'react';
import { connect } from 'react-redux'; //리덕스와 직접 연동하는 컨테이너 컴포트를 리덕스와 연동하기 위한 connect 임포트
import Counter from '../components/Counter.js'
import { increase, decrease } from '../modules/counter.js';

//modules/counter.js에 있는 액션 생성 함수 increase와 decrease를 각각 파라미터로 넣어 Counter의 props로 사용하고 있음
const CounterContainer = ({ number, increase, decrease }) => {
    console.log("5&9.CounterContainer 리턴")
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    );
};

// 중요 *mapStateToProps등은 반환하는 객체 내부의 값들을 컴포넌트의 props로 전달됨
// 현재 스토어(modules/counter.js)가 지니고있는 state(number)값을 파라미터로 받아옴
const mapStateToProps = state => ({
    number : state.counter.number
});
// 스토어의 내장 함수 dispatch를 파라미터로 받아옴
const mapDispatchToProps = dispatch => ({
    // 액션 생성함수를 해당 컴포넌트(CounterContainer)에 props로 전달하고 있음
    increase: () => {
        console.log("7.카운터컨테이너 인크리즈 디스패치")
        dispatch(increase()); // "{type:counter/INCREASE}"
    },
    decrease: () => {
        dispatch(decrease()); // "{type:counter/DECREASE}"
    },
});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CounterContainer);

/*
map... 함수들을 선언하지 않고 내보내기에서 간편하게 설정하는 코드
connect함수가 dispatch작업을 해주는 bindActionCreators함수 작업을 대신하게 해줌

export default connect(
    state => ({
        number: state.counter.number,
    }),
    {
        increase,
        decrease,
    },
)(CounterContainer)
*/