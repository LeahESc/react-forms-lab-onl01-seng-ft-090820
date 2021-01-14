import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  countMessage = () => {
    return <h2>{this.props.maxChars - this.state.message.length}</h2>
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message}/>
        {this.countMessage()}
      </div>
    );
  }
}

export default TwitterMessage;
