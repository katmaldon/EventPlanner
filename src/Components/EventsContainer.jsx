import React from 'react';
import Event from './Event'

const EventsContainer = (props) => {
    let eventCardsArr = props.events.map((eventPOJO) => {
        return (
            <Event
                key={eventPOJO.id}
                event={eventPOJO}
            />
        );
    });

    return (
        <ul className="event_cards">
            {eventCardsArr}
        </ul>
    );
};

// render events here

export default EventsContainer;
