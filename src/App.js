import React, { Component } from 'react';
import MessageList from './components/messageList.js';
import Toolbar from './components/toolbar.js';
import './App.css';

const messages = [
  {
    "id": 1,
    "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
    "read": false,
    "starred": true,
    "selected": false,
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
    "selected": false,
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
    "selected": false,
    "labels": ["personal"]
  },
  {
    "id": 6,
    "subject": "We need to back up the wireless GB driver!",
    "read": true,
    "starred": true,
    "selected": false,
    "labels": []
  },
  {
    "id": 7,
    "subject": "We need to index the mobile PCI bus!",
    "read": true,
    "starred": false,
    "selected": false,
    "labels": ["dev", "personal"]
  },
  {
    "id": 8,
    "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
    "read": true,
    "starred": true,
    "selected": false,
    "labels": []
  }
]

class App extends Component {
  constructor(props) {
  super(props)
  this.state = {
    messages: messages,
    allSelected: false
  }
}

isUnread = () => {
  let unreadCount = this.state.messages
    .filter(message => message.read === false)
    return unreadCount.length
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


handleBulkSelect = () => {
  if(this.state.allSelected === false) {
    this.state.messages
      .forEach(message => message.selected = true)
      this.setState({
        messages: this.state.messages,
        allSelected: true
      })
  } else {
    this.state.messages
      .forEach(message => message.selected = false)
      this.setState({
        messages: this.state.messages,
        allSelected: false
      })
  }
}

markRead = (trueOrFalse) => {
  this.state.messages
    .filter(message => message.selected === true)
    .forEach(message => message.read = trueOrFalse)
  this.setState({
    messages: this.state.messages
  })
}

deleteMessage = () => {
  let noDelete =this.state.messages
    .filter(message => message.selected !== true)
    this.setState({
      messages: noDelete,
      allSelected: false
    })
}

addLabel = () => {
  console.log("made it in the add label");
}

removeLabel = () => {
  console.log("made it in the remove label");
}

  render() {
    return (
      <div className="container">
        <Toolbar
          handleBulkSelect={this.handleBulkSelect}
          markRead={this.markRead}
          markUnread={this.markUnread}
          deleteMessage={this.deleteMessage}
          addLabel={this.addLabel}
          removeLabel={this.removeLabel}
          isUnread={this.isUnread}
        />
        <MessageList
          messages = { this.state.messages }
          handleCheckBox ={this.handleCheckBox}
          handleStar={this.handleStar}

        />
      </div>
    );
  }
}

export default App;
