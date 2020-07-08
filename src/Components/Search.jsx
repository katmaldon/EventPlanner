import React from 'react';

class Search extends React.Component {

    render() {
        return (
            <div className="search">
                <input
                    type="text"
                    placeholder={"Search for any event"}
                    onChange={(e) => this.props.handlesearch(e.target.value)}
                />
            </div>
        );
    }

}

export default Search;
