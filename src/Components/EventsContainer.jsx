import React from 'react';
import Event from './Event'

const EventsContainer = (props) => {
    let eventCards = props.eventsArray.map((eventPOJO) => {
        return (
            <Event
                key={eventPOJO.id}
                event={eventPOJO}
            />
        );
    });

    return (
        <ul className="cards">
            {eventCards}
        </ul>
    );
};

// render filtered events here

export default EventsContainer;
