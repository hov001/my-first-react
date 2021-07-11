import React from "react";

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }

        this.getCalcNumber = this.getCalcNumber.bind(this, this.props)
    }

    getCalcNumber(props) {
        console.log(props)
    }
    getIncrement() {
        this.setState(prevState => ({
            count: ++prevState.count
        }))
    }

    getDecrement() {
        this.setState(prevState => ({
            count: --prevState.count
        }))
    }

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button data-calc='increment' onClick={this.getCalcNumber}>+</button>
                <button data-calc='decrement' onClick={this.getCalcNumber}>-</button>
            </div>
        )
    }
}

export default Calculator