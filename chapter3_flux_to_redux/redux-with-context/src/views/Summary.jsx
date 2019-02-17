import React, {Component} from 'react';
import CounterContainer from "./Counter";
import PropTypes from 'prop-types';

class Summary extends Component{
    render(){
        const {sum} = this.props;
        return(
            <div>sum: {sum}</div>
        );
    }
}

class SummaryContainer extends Component{
    constructor(props,context){
        super(props,context);

        this.getOwnState = this.getOwnState.bind(this);
        this.onUpdate = this.onUpdate.bind(this);

        this.state = this.getOwnState();
    }

    getOwnState(){
        const state = this.context.store.getState();
        let sum = 0;
        for(const key in state){
            sum += state[key];
        }
        return {sum: sum};
    }

    onUpdate(){
        this.setState(this.getOwnState());
    }

    componentDidMount(){
        this.context.store.subscribe(this.onUpdate);
    }

    componentWillUnmount(){
        this.context.store.unsubscribe(this.onUpdate);
    }

    render(){
        return(
            <Summary sum={this.state.sum}/>
        );
    }
}

SummaryContainer.contextTypes = {
    store: PropTypes.object
};

export default SummaryContainer;