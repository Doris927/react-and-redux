import React, {Component} from 'react';
import CounterContainer from './Counter.jsx';
import SummaryContainer from './Summary.jsx';

class CounterPanel extends Component{
    render(){
        return(
            <div>
                <CounterContainer caption='First'/>
                <CounterContainer caption='Second'/>
                <CounterContainer caption='Third'/>
                <hr/>
                <SummaryContainer/>
            </div>
        );
    }
}

export default CounterPanel;