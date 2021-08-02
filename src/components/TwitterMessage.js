import React from "react";

class TwitterMessage extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      charsLeft: props.maxChars
    };
  }

  handleTyping = (event) => {
    const newContent = event.target.value
    this.setState({
      content: newContent,
      charsLeft: (this.props.maxChars - newContent.length)
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          onChange={this.handleTyping}
          name="message" 
          id="message" 
          value={this.state.content} 
        />
        <p>Characters Left: {this.state.charsLeft}/{this.props.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
