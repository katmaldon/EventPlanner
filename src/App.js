import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from './Components/Header'
import UsersContainer from './Components/UsersContainer'
import TodosContainer from './Components/TodosContainer'
import EventsContainer from './Components/EventsContainer'
import Search from './Components/Search'

class App extends React.Component {
    state = {
        eventsArray: [],
        todosArray: [],
        user: {name: "Kat", age: 35, image_url: "", bio: "The Crone"}
    };

    componentDidMount() {
        Promise.all([fetch('http://localhost:3000/events'), fetch('http://localhost:3000/todos')]) // change ports
            .then(([r1, r2]) => {
                return Promise.all([r1.json(), r2.json()])
            })
            .then(([events, todos]) => {
                // console.log(todos)
                this.setState({
                    eventsArray: events,
                    todosArray: todos
                });
            });
    }


    returnEventsArray = () => {
        let events = this.state.eventsArray;
        return events;
    };


    returnTodosArray = () => {
        let todos = this.state.todosArray;
        return todos;
    };

    render() {
        let eventsArray = this.returnEventsArray();
        let todosArray = this.returnTodosArray();
        return (
            <div>
                <Header />
                <UsersContainer
                    user={this.state.user}
                />
                <TodosContainer
                    todosArray={todosArray}
                />
                <Search />
                <EventsContainer
                    eventsArray={eventsArray}
                />
            </div>
        );
    }
}

export default App;
