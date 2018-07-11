import React, {Component} from 'react';
import '../App.css';

class Toolbar extends Component {
  render() {
    return (
      <div className="row toolbar">
  <div className="col-md-12">
    <p className="pull-right">
      <span className="badge badge">2</span>
      unread messages
    </p>

    <button className="btn btn-default" onClick={()=>this.props.handleBulkSelect(this.props.id)}>
      <i className="fa fa-check-square-o"></i>
    </button>

    <button className="btn btn-default" onClick={()=>this.props.markRead(this.props.id)}>
      Mark As Read
    </button>

    <button className="btn btn-default" onClick={()=>this.props.markUnead(this.props.id)}>
      Mark As Unread
    </button>

    <select className="form-control label-select" onClick={()=>this.props.addLabel(this.props.id)}>
      <option>Apply label</option>
      <option value="dev">dev</option>
      <option value="personal">personal</option>
      <option value="gschool">gschool</option>
    </select>

    <select className="form-control label-select" onClick={()=>this.props.removeLabel(this.props.id)}>
      <option>Remove label</option>
      <option value="dev">dev</option>
      <option value="personal">personal</option>
      <option value="gschool">gschool</option>
    </select>

    <button className="btn btn-default" onClick={()=>this.props.deleteMessage(this.props.id)}>
      <i className="fa fa-trash-o"></i>
    </button>
  </div>
</div>

    );
  }
}

export default Toolbar;
