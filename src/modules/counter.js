// 액션 타입을 정의한다.
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE'; /* 모듈 이름/액션 이름 */

// 액션 생성 함수를 만든다.
export const increase = () => ({ type:INCREASE });
export const decrease = () => ({ type:DECREASE });

// 초기값을 설정한다.
const initialState = {
    number: 0
};

// 리듀서를 만든다.
function counter (state = initialState, action){
    switch (action.type) {
        case INCREASE:
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
}

export default counter;