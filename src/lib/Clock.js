import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.dateID = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.dateID)
    }

    render() {
        return (
            <div>
                <h1>Time of {this.props.name}!!</h1>
                <h2>Time: {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default Clock