import store from '../Store';
import * as Actions from '../Actions';
import React, {Component} from 'react';

class Counter extends Component{
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
        const count = this.state.count;
        return(
            <div>
                <button onClick={this.onIncrementClickButton}>+</button>
                <button onClick={this.onDecrementClickButton}>-</button>
                <span>{caption} count: {count}</span>
            </div>
        );
    }
}

export default Counter;