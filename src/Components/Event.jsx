import React from 'react';

class Event extends React.Component {


    // handleClick for toggle

    //console.log(this.props.Event)
    render() {
        return (
            <li className="cards_item">
                <div className="card">
                    <div className="card_title"><h3>{this.props.event.name}</h3></div>
                    <img src={this.props.event.image_url} alt={this.props.event.name} className="card_image" />
                    <div className="card_content">
                        <div className="card_detail">
                            <h4>Type of event: {this.props.event.event_type}</h4>
                            <p>Date & time: {this.props.event.date}, {this.props.event.time}</p>
                            <p>Event details: <a href={this.props.event.event_url}>{this.props.event.event_url}</a></p>
                        </div>
                    </div>
                </div>
                <br></br>
            </li>
        );
    }

}

export default Event;
