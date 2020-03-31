const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경함
const INSERT = 'todos/INSERT'; // 새로운 todo를 등록
const TOGGLE = 'todos/TOGGLE'; // todo를 체크/체크 해제함
const REMOVE = 'todos/REMOVE'; // todo를 제거함

export const changeInput = input => ({
    type: CHANGE_INPUT,
    input,
});

let id= 3;

export const insert = text => ({
    type: INSERT,
    todo: {
        id: id++,
        text,
        done: false
    }
});

export const toggle = id => ({
    type: TOGGLE,
    id
});

export const remove = id => ({
    type: REMOVE,
    id
});

const initialState = {
    input : '',
    todos: [
        {
            id: 1,
            text: '리덕스 기초 배우기',
            done: true
        },
        {
            id: 2,
            text: '리액트와 리덕스 사용하기',
            done : false
        }
    ]
};

function todos(state = initialState, action){
    switch (action.type) {
        case CHANGE_INPUT:
            return {
                state, // 객체 spread 연산자 사용하여 기존 객체의 값을 수정해서 새로운 객체로 인식하게 함(ES9)
                input : action.input
            };
        case INSERT:
            return {
                ...state, // https://sheldhe93.tistory.com/13 스프레드 연산자 설명 => 배열 상태를 분해함
                todos : state.todos.concat(action.todo)
            };
        case TOGGLE:
            return {
                ...state,
                todos : state.todos.map(todo =>
                todo.id === action.id ? {...todo, done: !todo.done}:todo)
            };
        case REMOVE:
            return {
                ...state,
                todos : state.todos.filter(todo =>todo.id !== action.id)
            };
        default:
            return state;
    }
}

export default todos;