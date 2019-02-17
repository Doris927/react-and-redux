import store from '../Store';
import * as Actions from '../Actions';
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
    render() {
        const {caption, onIncrement, onDecrement, count} = this.props;

        return (
            <div>
                <button  onClick={onIncrement}>+</button>
                <button  onClick={onDecrement}>-</button>
                <span>{caption} count: {count}</span>
            </div>
        );
    }
}

Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired
};

Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
}

class CounterContainer extends Component{
    constructor(props){
        super(props);
        this.getOwnState = this.getOwnState.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onIncrementClickButton = this.onIncrementClickButton.bind(this);
        this.onDecrementClickButton = this.onDecrementClickButton.bind(this);
        this.state = this.getOwnState();
    }

    getOwnState() {
        return {
            count: store.getState()[this.props.caption]
        };
    }

    onChange(){
        this.setState(this.getOwnState());
    }

    componentDidMount(){
        store.subscribe(this.onChange);
    }

    componentWillUnmount(){
        store.unsubscribe(this.onChange);
    }

    onIncrementClickButton(){
        store.dispatch(Actions.increment(this.props.caption));
    }

    onDecrementClickButton(){
        store.dispatch(Actions.decrement(this.props.caption));
    }

    render(){
        const {caption} = this.props;
        return(
            <Counter caption={caption} count={this.state.count}
                     onIncrement={this.onIncrementClickButton}
                     onDecrement={this.onDecrementClickButton}/>
        );
    }
}

export default CounterContainer;