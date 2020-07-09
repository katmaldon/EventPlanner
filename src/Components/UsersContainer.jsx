import React from 'react';
import User from './User'


const UsersContainer = (props) => {

    return (
        <ul className="cards">
            <User
                key={1}
                user={props.user}
            />
        </ul>
    );
};


export default UsersContainer;
