import React from 'react';
import { connect } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos.js';
import Todos from '../components/Todos.js';

const TodosContainer = ({ // 이 곳은 단지 변수의 이름일 뿐
    test,
    input, // export default connect 함수의 todos안에 input
    todos, // export default connect 함수의 todos안에 todos
    changeInput,
    insert,
    toggle,
    remove,
}) => {
    return(
        <Todos
            test={test}
            input={input}
            todos={todos}
            onChangeInput={changeInput}
            onInsert={insert}
            onToggle={toggle}
            onRemove={remove}
        />
    );
};

export default connect(
    // 리덕스 connect를 이용해 todos.js(스토어)에 접근해서 state에 접근 => CounterContainer.js 참고
    // 비구조화 할당을 통해 todos를 분리하여 state.todos.input 대신 todos.input 사용
    ({todos}) => ({
        input: todos.input,
        todos: todos.todos,
        test:1
    }),
    {
        changeInput,
        insert,
        toggle,
        remove
    },
)(TodosContainer)