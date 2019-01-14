import React, { Component } from 'react'
import './LightSwitch.css';

export default class LightSwitch extends Component {
  state = { active: true }

  toggle = () => {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    return (
      <div>
        <p>The light switch is <b>{ this.state.active ? 'on' : 'off' }</b></p>
        <img className="lightbulb" src={ this.state.active ? "https://openclipart.org/image/800px/svg_to_png/269989/Anthropomorphic-Cartoon-Light-Bulb.png" : 'https://openclipart.org/image/800px/svg_to_png/270125/Anthropomorphic-Cartoon-Dark-Bulb.png'} alt="Lightbulb" />
        <button onClick={this.toggle}>Click the Switch</button>
      </div>
    )
  }
}
