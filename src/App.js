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
    };

    componentDidMount() {
        fetch('http://localhost:3000/events') // change port?
            .then((r) => r.json())
            .then((events) => {
                this.setState({
                    eventsArray: events,
                });
            });
    }

    returnEventsArray = () => {
        let events = this.state.eventsArray;
        return events;
    };

    render() {
        let eventsArray = this.returnEventsArray();
        return (
            <div>
                <Header />
                <UsersContainer />
                <TodosContainer />
                <Search />
                <EventsContainer
                    eventsArray={eventsArray}
                />
            </div>
        );
    }

}

export default App;
