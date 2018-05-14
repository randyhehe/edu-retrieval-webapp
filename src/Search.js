import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        console.log(this);
    }

    getQuery = () => {
        const parameters = decodeURI(this.props.location.search);
        const query = parameters.split("=")[1];
        return query;
    };

    render() {
        return (
            <div className="Search">
                Searching for {this.getQuery()}
            </div>
        );
    }
}

export default Search;