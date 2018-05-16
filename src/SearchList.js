import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import 'typeface-roboto';

const styles = theme => ({
    list: {
        listStyleType: 'none',
        fontFamily: 'roboto',
        marginTop: 30,
        paddingLeft: 100
    },
    item: {
        marginBottom: 25,
        
    },
    titleText: {
        textDecoration: 'none',
        color: '#0000EE',
        fontSize: 18
    },
    linkText: {
        color: 'rgb(44,99,43)',
        fontSize: 16
    }
});

class SearchList extends Component {
    constructor(props) {
        // used with api calls in the future
        super(props);
    }
    
    generateList() {
        const { classes } = this.props;

        const results = this.props.searchResults;
        const listItems = [];
        for (let i = 0; i < results.length; i++) {
            const item = 
            <li className={classes.item}>
                <div><a href="" className={classes.titleText}>{results[i].title}</a></div>
                <div className={classes.linkText}>{results[i].link}</div>
            </li>
            listItems.push(item);
        }
        return <ul className={classes.list}>{listItems}</ul>
    }

    render() {
        return ( // wait on optimizing this
            this.generateList()
        );
    }
}


SearchList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchList);