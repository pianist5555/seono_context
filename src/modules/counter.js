import { createAction, handleActions } from 'redux-actions';

// 액션 타입을 정의한다.
const INCREASE = '/counter/INCREASE';
const DECREASE = '/counter/DECREASE'; /* 모듈 이름/액션 이름 */

// 액션 생성 함수를 만든다.
/*export const increase = () => ({ type:INCREASE }); --------------------redux-actions 모듈 사용 전 기존코드 
export const decrease = () => ({ type:DECREASE });*/
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 초기값을 설정한다.
const initialState = {
    number: 0
};

// 리듀서를 만든다.
/*function counter (state = initialState, action){ ---------------------redux-actions 모듈 사용 전 기존코드                               
    switch (action.type) {
        case INCREASE:
            console.log("8.리듀서 counter함수")
            return {
                number: state.number + 1
            };
        case DECREASE:
            return {
                number: state.number - 1
            };
        default:
            return state;
    }
}*/
const counter = handleActions(
    {
        [INCREASE]: (state, action) => ({ number: state.number + 1 }), // 액션 타입에 모듈 이름/액션 이름으로 되어있기 때문에 []로 감싸줘야함
        [DECREASE]: (state, action) => ({ number: state.number - 1 })
    },
    initialState
);

export default counter;