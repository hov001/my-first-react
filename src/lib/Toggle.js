import React from "react";

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggle: true
        }

        this.setTog = this.setToggle.bind(this)
    }

    setToggle() {
       this.setState(prevState => ({
         isToggle: !prevState.isToggle
       }))
    }

    render() {
        return (
            <div>
                <p>{this.state.isToggle ? 'Opened' : 'Closed'}</p>
                <button onClick={this.setTog}>Toggle Btn</button>
            </div>
        )
    }
}

export default Toggle