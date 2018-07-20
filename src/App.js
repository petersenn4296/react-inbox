import React, { Component } from 'react';
import MessageList from './components/messageList.js';
import Toolbar from './components/toolbar.js';
import './App.css';

class App extends Component {
  constructor(props) {
  super(props)
  this.state = {
    messages: [],
    allSelected: false
  }
}

async componentDidMount() {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/messages`)
  const json = await response.json()
  this.setState({
    messages: json,
    allSelected: false
  })
}

///////////////////////////////////////DRY Functions/////////////////////////////////////////
isUnread = () => {
  let unreadCount = this.state.messages
    .filter(message => message.read === false)
  return unreadCount.length
}

selectAllButton = () => {
  let square = `fa fa-minus-square-o`
  let selected = this.state.messages
    .filter(message => message.selected === true)
 if(selected.length === this.state.messages.length) {
    return "fa fa-check-square-o"
  } else if (selected.length === 0) {
    return "fa fa-square-o"
  }
  return square
}
////////////////////////////////////////DRY Functions////////////////////////////////////////
patchBlock = async (id, command, prop, value) => {
  let item = {
    messageIds: id,
    command: command,
    [prop]: value
  }
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/messages`, {
  method: 'PATCH',
  body: JSON.stringify(item),
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    }
  })
const message = await response.json()
this.setState({messages: message})
}




/////////////////////////////////////////Event Handlers///////////////////////////////////////

handleCheckBox = (id) => {
  let message = this.state.messages.filter(messages => messages.id === id)[0]
  let isSelected = message.selected ? message.selected = false : message.selected = true
  this.setState({
    allSelected: isSelected
  })
  this.patchBlock([id], "selected", "selected", isSelected)
}




handleStar = async (id) => {
  let star = this.state.messages.filter(messages => messages.id === id)[0]
  let isStarred = star.starred ? star.starred = false : star.starred = true
  this.patchBlock([id], "star", "starred", isStarred)
}




handleBulkSelect = () => {
  let select = this.state.allSelected ? false : true
  let messageId = this.state.messages
    .filter(message => message.selected !== select)
    .map(message => message.id)
  this.setState({allSelected: select})
  this.patchBlock(messageId, "selected", "selected", select)
}




markRead = async (trueOrFalse) => {

  let messageId = this.state.messages
    .filter(message => message.selected)
    .map(message => message.id)

  let isRead = this.state.messages
    .filter(message => message.selected === true)
    .forEach(message => message.read = trueOrFalse)

  this.patchBlock(messageId, "read", "read", trueOrFalse)
}




deleteMessage = () => {
  let messageId = this.state.messages
    .filter(message => message.selected)
    .map(message => message.id)
  let noDelete = this.state.messages
    .filter(message => message.selected !== true)
  this.setState({  allSelected: false })
  this.patchBlock(messageId, "delete")
}




label = (applyOrRemove, label) => {
  if(applyOrRemove === "apply") {
    console.log(applyOrRemove);
    this.state.messages
      .filter(message => message.selected === true && !message.labels.includes(label))
      .forEach(message => message.labels.push(label))
      let messageId = this.state.messages
        .filter(message => message.selected)
        .map(message => message.id)
      this.patchBlock(messageId, "addLabel", "label", label )
  } else {
    this.state.messages
      .filter(message => message.selected === true)
      .forEach(message => message.labels.splice(label, 1))
      let messageId = this.state.messages
        .filter(message => message.selected)
        .map(message => message.id)
      this.patchBlock(messageId, "removeLabel", "label", label)
  }
}




////////////////////////////////////////Event Handlers////////////////////////////////////////


  render() {
    return (
      <div className="container">
        <Toolbar
          handleBulkSelect={this.handleBulkSelect}
          markRead={this.markRead}
          markUnread={this.markUnread}
          deleteMessage={this.deleteMessage}
          label={this.label}
          isUnread={this.isUnread}
          isSelected={this.isSelected}
          selectAllButton={this.selectAllButton}
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
