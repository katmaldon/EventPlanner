import React from 'react';

class Event extends React.Component {

    state = {
        ticket: true, // toggle ticket on event?
    };

    // handleClick for toggle

    render() {
        return (
            <li className="cards_item">
                <div className="card">
                    <img src={this.props.Event.picture_url} alt={this.props.Event.name} className="card_image" />
                    <div className="card_content">
                        <div className="card_title">{this.props.Event.name}</div>
                        <div className="card_detail">
                            <p>{this.props.Event.event_type}</p>
                            <p>{this.props.Event.event_url}</p>
                        </div>
                    </div>
                </div>
            </li>
        );
    }

}

export default Event;
