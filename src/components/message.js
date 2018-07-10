import React, {Component} from 'react';
import '../App.css';

class Message extends Component {

  render() {
    return (
      <div className={`row message ${this.props.read ? "read" : "unread"} ${this.props.selected ? "selected" : "unselected"}`}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" defaultChecked={`${this.props.selected ? "checked" : ""}`} onChange={()=>this.props.handleCheckBox(this.props.id)}/>
            </div>
            <div className="col-xs-2">
              <i className={`star fa fa-star-o`}></i>
            </div>
          </div>
        </div>
        <div className={`col-xs-11`}>
          <a href="">
            {this.props.subject}
          </a>
        </div>
      </div>
    );
  }
}

export default Message;
