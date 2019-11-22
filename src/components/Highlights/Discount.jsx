import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyButton from "../utils/MyButton";

export default class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd: 30
  };

  porcentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.porcentage();
    }, 30);
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.porcentage()}>
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>

          <Slide right>
            <div className="discount_description">
              <h3>Purchase ticket before 20th December</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ducimus possimus aliquid delectus impedit ea quisquam reiciendis
                neque, veritatis alias consequatur voluptatum odit inventore
                nobis odio eaque doloremque? Magnam, ducimus distinctio
                molestias perferendis nostrum molestiae assumenda repellat iste,
                ipsam aut odit veritatis odio cupiditate nemo quo velit nam
                repellendus aspernatur deserunt?
              </p>
              <MyButton
                text="Purchse tickets"
                bck="#ffa800"
                color="#ffffff"
                link="http://google.com"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}
