import React, {Component} from 'react';
import store from '../Store';

class Summary extends Component{
    constructor(props){
        super(props);

        this.getOwnState = this.getOwnState.bind(this);
        this.onUpdate = this.onUpdate.bind(this);

        this.state = this.getOwnState();
    }

    getOwnState(){
        const state = store.getState();
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
        store.subscribe(this.onUpdate);
    }

    componentWillUnmount(){
        store.unsubscribe(this.onUpdate);
    }

    render(){
        return(
            <div>sum: {this.state.sum}</div>
        );
    }
}

export default Summary;