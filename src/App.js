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
        user: {name: "Kat", age: 35, image_url: "https://i.imgur.com/ZuTBJfC.png", bio: "software engineer, quarantined but uncontained adventurer"},
        searchWord: "",
    };

    componentDidMount() {
        Promise.all([fetch('http://localhost:4000/events'), fetch('http://localhost:4000/todos')]) // change ports
            .then(([r1, r2]) => {
                return Promise.all([r1.json(), r2.json()])
            })
            .then(([events, todos]) => {
                //console.log(todos)
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

    returnSearchedArray = () => {
        let searchArr = this.state.eventsArray.filter((event) =>
          event.name.toLowerCase().includes(this.state.searchWord.toLowerCase())
        );
        return searchArr;
      };

      searchEvent = (search) => {
        this.setState({
          searchWord: search,
        });
      };


    render() {
        let eventsArray = this.returnEventsArray();
        let todosArray = this.returnTodosArray();
        return (
            <div>
                <Header />
                <Search
                    searchWord={this.state.searchWord}
                    searchEvent={this.searchEvent}
                />
                <UsersContainer
                    user={this.state.user}
                />
                <TodosContainer
                    todosArray={todosArray}
                />
                <EventsContainer
                    events={eventsArray}
                />
            </div>
        );
    }
}

export default App;
