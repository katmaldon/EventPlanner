
import React from 'react';
import Todo from './Event'

const TodosContainer = (props) => {
    let todoCardsArr = props.todos.map((todoPOJO) => {
        return (
            <Todo
                key={todoPOJO.id}
                todo={todoPOJO}
            />
        );
    });

    return (
        <ul className="todo_cards">
            {todoCardsArr}
        </ul>
    );
};

// render todos into list/table with dates and checkbox rather than on card

export default TodosContainer;
