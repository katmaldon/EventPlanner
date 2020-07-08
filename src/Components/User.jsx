import React from 'react';

class User extends React.Component {


    render() {
        return (
            <li className="user_card">
                <div className="card">
                    <img src={this.props.user.image_url} alt={this.props.user.name} className="card_image" />
                    <div className="card_content">
                        <div className="card_title">{this.props.user.name}</div>
                        <p> className="card_text">Age: {this.props.user.age}</p>

                        <div className="card_detail">
                            <p>{this.props.user.bio}</p>
                        </div>
                    </div>
                </div>
            </li>
        );
    }

}

export default User;
