import React, {Component} from "react";
import PropTypes from 'prop-types';

class Counter extends Component{
    constructor(props){
        super(props);
        //this.onClickButton = this.onClickButton.bind(this);
        this.onIncrementClickButton = this.onIncrementClickButton.bind(this);
        this.onDecrementClickButton = this.onDecrementClickButton.bind(this);
        this.state = {
            count: this.props.initValue
        };
    }

    onClickButton(){
        this.setState({
            count: this.state.count + 1
        });
    }

    onIncrementClickButton(){
        this.updateCount(true);
    }

    onDecrementClickButton(){
        this.updateCount(false);
    }

    updateCount(isIncrement){
        const previousValue = this.state.count;
        const newValue = isIncrement? previousValue + 1 : previousValue - 1;
        this.setState({
            count: newValue
        });
        this.props.onUpdate(newValue, previousValue);
    }

    // componentWillMount(){
    //     console.log('enter componentWillMount:'+ this.props.caption);
    // }
    //
    // componentDidMount(){
    //     console.log('enter componentDidMount:' + this.props.caption);
    // }

    //this.setState() 不会引发该函数
    // componentWillReceiveProps(nextProps){
    //     console.log('enter componentWillReceiveProps:' + this.props.caption);
    // }
    //
    //
    // shouldComponentUpdate(nextProps, nextState){
    //     return (nextProps.caption !== this.props.caption) ||
    //         (nextState.count !== this.state.count);
    // }


    render(){
        //console.log('enter render:' + this.props.caption);
        return (
            <div>
                <button onClick={this.onIncrementClickButton}>+</button>
                <button onClick={this.onDecrementClickButton}>-</button>
                <span>{this.props.caption}:{this.state.count}</span>
            </div>
        );
    }
}

Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    initValue: PropTypes.number,
    onUpdate: PropTypes.func
}

Counter.defaultProps = {
    initValue:0,
    onUpdate: f => f //什么都不做的函数
}

export default Counter;