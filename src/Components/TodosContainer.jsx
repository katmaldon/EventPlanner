
import React from 'react';
import Todo from './Event'

const TodosContainer = (props) => {
    let todoCards = props.todosArray.map((todoPOJO) => {
        return (
            <Todo
                key={todoPOJO.id}
                todo={todoPOJO}
            />
        );
    });

    return (
        <ul className="cards">
            {todoCards}
        </ul>
    );
};

// render todos into list/table with dates and checkbox rather than on card

export default TodosContainer;
