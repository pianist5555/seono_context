import React from 'react';
import { connect } from 'react-redux'; //리덕스와 직접 연동하는 컨테이너 컴포트를 리덕스와 연동하기 위한 connect 임포트
import Counter from '../components/Counter.js'
import { increase, decrease } from '../modules/counter.js';

const CounterContainer = ({ number, increase, decrease }) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    );
};

// 현재 스토어가 지니고있는 state값을 파라미터로 받아옴
const mapStateToProps = state => ({
    number : state.counter.number
});
// 스토어의 내장 함수 dispatch를 파라미터로 받아옴
const mapDispatchToProps = dispatch => ({
    increase: () => {
        dispatch(increase());
    },
    decrease: () => {
        dispatch(decrease());
    },
});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CounterContainer);