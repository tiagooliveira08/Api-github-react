import React from "react";

class Timer extends React.Component {
    constructor(){
        super();
        this.state = {
            timer: 0,
            toggle:true
        }
        this.Mytimer;
    }

componentDidMount(){
    this.Mytimer = setInterval(() =>{
        this.setState({time: this.state.timer += 1})
    },1000)
}
componentWillUnmount(){
    clearInterval(this.Mytimer);
}

render(){
    return(
        <div>
        {this.state.timer}<br />
        </div>
    )
}    


}

export default Timer;