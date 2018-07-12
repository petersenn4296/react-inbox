import React, {Component} from 'react';
import '../App.css';

class Toolbar extends Component {
  render() {
    return (<div className="row toolbar">
      <div className="col-md-12">
        <p className="pull-right count">
          <span className="badge">{this.props.isUnread()}</span>
          unread message{this.props.isUnread() !== 1 ? 's' : ''}
        </p>

        <button className="btn btn-default" onClick={() => this.props.handleBulkSelect(this.props.selected)}>
          <i className={`${this.props.selectAllButton()}`}></i>
        </button>

        <button className="btn btn-default" onClick={() => this.props.markRead(true)}>
          Mark As Read
        </button>

        <button className="btn btn-default" onClick={() => this.props.markRead(false)}>
          Mark As Unread
        </button>

        <select className="form-control label-select" onChange={(e) => this.props.addLabel(e.target.value)}>
          <option>Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <select className="form-control label-select" onChange={(e) => this.props.removeLabel(e.target.value)}>
          <option>Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <button className="btn btn-default" onClick={() => this.props.deleteMessage(this.props.id)}>
          <i className="fa fa-trash-o"></i>
        </button>
      </div>
    </div>
    );
  }
}

export default Toolbar;
