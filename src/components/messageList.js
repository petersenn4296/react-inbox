import React, { Component } from 'react';
import Message from './message'
import '../App.css';

class MessageList extends Component {
  render() {
    return (
      <div>
        {this.props.messages.map(message =>
          <Message
            key={message.id}
            id={message.id}
            subject={message.subject}
            read={message.read}
            starred={message.starred}
            selected={message.selected}
            labels={message.labels}
            handleCheckBox={this.props.handleCheckBox}
            handleStar={this.props.handleStar}
          />
        )}
      </div>
    );
  }
}


export default MessageList;
