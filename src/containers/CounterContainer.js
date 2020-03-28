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