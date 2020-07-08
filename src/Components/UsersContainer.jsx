import React from 'react';
import User from './User'


const UsersContainer = (props) => {
    let user = props.user((userPOJO)  => {
        return (
            <User
                key={userPOJO.id}
                event={userPOJO}
            />
        );
    });



    return (
        <ul className="cards">
            {user}
        </ul>
    );
};


export default UsersContainer;
