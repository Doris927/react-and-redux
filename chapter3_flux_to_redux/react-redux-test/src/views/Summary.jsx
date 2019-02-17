import React, {Component} from 'react';
import CounterContainer from "./Counter";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Summary extends Component {
    render() {
        const {sum} = this.props;
        return (
            <div>sum: {sum}</div>
        );
    }
}

function mapStateToProps(state) {
    let sum = 0;
    for (const key in state) {
        if (state.hasOwnProperty(key)) {
            sum += state[key];
        }
    }
    return {sum: sum};
}

export default connect(mapStateToProps)(Summary);