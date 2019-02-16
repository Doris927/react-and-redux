import React, {Component} from "react";
import Counter from './Counter.jsx'


class ControlPanel extends Component {
    constructor(props) {
        super(props);

        this.onCounterUpdate = this.onCounterUpdate.bind(this);
        this.initValues = [0,0,0];
        const initSum = this.initValues.reduce((a,b) => a+b,0);
        this.state = {
            sum: initSum
        }
    }

    onCounterUpdate(newValue, previousValue){
        const changeValue = newValue - previousValue;
        this.setState({
            sum: this.state.sum + changeValue
        });
    }

    render() {
        return (
            <div>
                <Counter caption="one" initValue={this.initValues[0]} onUpdate={this.onCounterUpdate}></Counter>
                <Counter caption="two" initValue={this.initValues[1]} onUpdate={this.onCounterUpdate}></Counter>
                <Counter caption="three" initValue={this.initValues[2]} onUpdate={this.onCounterUpdate}></Counter>
                {/*<button onClick={()=> this.forceUpdate() }>Click to repaint</button>*/}
                <div>sum: {this.state.sum}</div>
            </div>
        );
    }
}

export default ControlPanel;