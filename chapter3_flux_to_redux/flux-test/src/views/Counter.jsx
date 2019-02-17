import React, {Component} from 'react';
import CounterStore from '../stores/CounterStore'
import * as Actions from '../Actions.js';

class Counter extends Component{
    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onIncrementClickButton = this.onIncrementClickButton.bind(this);
        this.onDecrementClickButton = this.onDecrementClickButton.bind(this);

        this.state = {
            count: CounterStore.getCounterValues()[props.caption]
        };
    }

    componentDidMount(){
        CounterStore.addChangeListener(this.onChange);
    }

    componentWillUnmount(){
        CounterStore.removeChangeListener(this.onChange);
    }

    onChange(){
        const newCount = CounterStore.getCounterValues()[this.props.caption];
        this.setState({count: newCount});
    }

    onIncrementClickButton(){
        Actions.increment(this.props.caption);
    }

    onDecrementClickButton(){
        Actions.decrement(this.props.caption);
    }

    render(){
        const {caption} = this.props;
        return (
            <div>
                <button onClick={this.onIncrementClickButton}>+</button>
                <button onClick={this.onDecrementClickButton}>-</button>
                <span>{caption} count: {this.state.count}</span>
            </div>
        );
    }
}

export default Counter;