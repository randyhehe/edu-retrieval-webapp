import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import SearchBox from './SearchBox.js';
import SearchList from './SearchList.js';
import 'typeface-roboto';

const styles = theme => ({
    searchbox: theme.mixins.gutters({
        marginTop: theme.spacing.unit,
        paddingLeft: 0,
        width: 600,
        display: 'inline-block'
    }),
    logoText: {
        display: 'inline-block',
        verticalAlign: 'middle',
        marginRight: 20,
        marginLeft: 20,
    }, 
    logoTextLink: {
        textDecoration: 'none',
        color: 'black'
    },
    header: {
        paddingTop: 15,
        paddingBottom: 25,
        backgroundColor: 'rgb(250,250,250)'
    }
});

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {searchText: this.getQueryString()};
    }

    onSearchChange = (event) => {
        this.setState({searchText: event.target.value});
    }
    
    onSearchSubmit = (event) => {
        // If search button is clicked or enter is pressed in the input textbox.
        if (event.key === undefined || event.key === 'Enter') {
            const path = encodeURI(`/search?query=${this.state.searchText}`);
            this.props.history.push(path);
            event.preventDefault();
        }
    }

    getQueryString = () => {
        const parameters = decodeURI(this.props.location.search);
        const query = parameters.split("=")[1];
        return query;
    };

    getSearchResults = () => {
        // mock results for now
        const results = [];
        for (let i = 0; i < 10; i++) {
            let newResult = {};
            newResult.title = `Article Number ${i}`;
            newResult.link = `https://testlink${i}.com`;
            results.push(newResult);
        }
        return results;
    }

    render() {
        const { classes } = this.props;

        return (
            <div className="Search">
                <div className={classes.header}>
                    <Typography variant="headline" noWrap={true} className={classes.logoText}>
                        <Link to="/" className={classes.logoTextLink} style={{ textDecoration: 'none' }}>ESE</Link>
                    </Typography>
                    <SearchBox className={classes.searchbox} value={this.state.searchText} onSearchChange={this.onSearchChange} onSearchSubmit={this.onSearchSubmit}/>
                </div>
                <Divider />
                <SearchList searchResults={this.getSearchResults()} className={classes.searchList} />
            </div>
        );
    }
}

Search.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Search);