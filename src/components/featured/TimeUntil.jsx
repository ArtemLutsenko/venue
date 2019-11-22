import React, { Component } from "react";
import Slide from "react-reveal/Slide";

export default class TimeUntil extends Component {
    state = {
        deadline: '6, 25, 2020',
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0'
    }

    getTimeUntil(deadline){
        const time = Date.parse(deadline) - Date.parse(new Date())
       if(time < 0) {
       }else {
           const seconds = Math.floor((time/1000)%60)
           const minutes = Math.floor((time/1000/60)%60)
           const hours = Math.floor((time/(1000*60*60))%60)
           const days = Math.floor(time/(1000*60*60*24))
           this.setState({
            seconds, minutes, hours, days
           })
       }
    }

    componentDidMount(){
        setInterval(() => this.getTimeUntil(this.state.deadline), 1000)
    }
  render() {
      const {seconds, minutes, hours, days} = this.state
    return (
      <Slide left delay = {1000}>
        <div className="countdown_wrapper">
          <div className="countdown_top">Envent starts in</div>
          <div className="countdown_bottom">
            <div className="countdown_item">
    <div className="countdown_time">{days}</div>
              <div className="countdown_tag">days</div>
            </div>
            <div className="countdown_item">
    <div className="countdown_time">{hours}</div>
              <div className="countdown_tag">hs</div>
            </div>
            <div className="countdown_item">
    <div className="countdown_time">{minutes}</div>
              <div className="countdown_tag">Min</div>
            </div>
            <div className="countdown_item">
    <div className="countdown_time">{seconds}</div>
              <div className="countdown_tag">sec</div>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}
