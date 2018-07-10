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
              <i className={`${this.props.starred ? "star fa fa-star" : "star fa fa-star-o"}`} onClick={()=>this.props.handleStar(this.props.id)}></i>
            </div>
          </div>
        </div>
        <div className={`col-xs-11`}>
           {this.props.labels.map((label,i) => <span  key={i} className="label label-warning">{label}</span>)}
          <a href="">
            {this.props.subject}
          </a>
        </div>
      </div>
    );
  }
}

export default Message;
