import React, { Component } from 'react';
import Message from './components/message.js';
import MessageList from './components/messageList.js';
import Toolbar from './components/toolbar.js';
import './App.css';

const messages = [
  {
    "id": 1,
    "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
    "read": false,
    "starred": true,
    "labels": ["dev", "personal"]
  },
  {
    "id": 2,
    "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
    "read": false,
    "starred": false,
    "selected": true,
    "labels": []
  },
  {
    "id": 3,
    "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
    "read": false,
    "starred": true,
    "labels": ["dev"]
  },
  {
    "id": 4,
    "subject": "We need to program the primary TCP hard drive!",
    "read": true,
    "starred": false,
    "selected": true,
    "labels": []
  },
  {
    "id": 5,
    "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
    "read": false,
    "starred": false,
    "labels": ["personal"]
  },
  {
    "id": 6,
    "subject": "We need to back up the wireless GB driver!",
    "read": true,
    "starred": true,
    "labels": []
  },
  {
    "id": 7,
    "subject": "We need to index the mobile PCI bus!",
    "read": true,
    "starred": false,
    "labels": ["dev", "personal"]
  },
  {
    "id": 8,
    "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
    "read": true,
    "starred": true,
    "labels": []
  }
]

class App extends Component {
  constructor(props) {
  super(props)
  this.state = {
    messages: messages
  }
}

// handles messages being selected and unselected
handleCheckBox = (id) => {
  let message = this.state.messages.filter(messages => messages.id === id)[0]
  message.selected ? message.selected = false : message.selected = true
    this.setState({
      messages: this.state.messages
    })
}

// handles stars being selected and unselected
handleStar = (id) => {
  let star = this.state.messages.filter(messages => messages.id === id)[0]
  star.starred ? star.starred = false : star.starred = true
    this.setState({
      messages: this.state.messages
    })
}

  render() {
    return (
      <div>
        <Toolbar/>
        <MessageList
          messages = { messages }
          handleCheckBox ={this.handleCheckBox}
          handleStar={this.handleStar}
        />
      </div>
    );
  }
}

export default App;
