import React, { PropTypes } from 'react';
import EmptyState from '../EmptyState/EmptyState';

class CreateTopologyForm extends React.Component {

  static propTypes = {
    handleSubmit: React.PropTypes.func,
    handleCancel: React.PropTypes.func
  };

  handleSubmit = (event) => {
    this.props.handleSubmit(event);
  };

  handleCancel = (event) => {
    this.props.handleCancel(event);
  };
  
  render() {
    return (
      <EmptyState title="Create Topology">
        <form className="form-horizontal" role="form">
          <p className="fields-status-pf">All fields are required.</p>
          <div className="form-group">
            <label htmlFor="input1" className="col-sm-2 control-label">Topology Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="input1" required="" placeholder="topology-name"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="input2" className="col-sm-2 control-label">Description</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="input2" required="" placeholder="A short description."/>
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Create</button>
            &nbsp;&nbsp;
            <button type="submit" className="btn btn-default" onClick={this.handleCancel}>Cancel</button>
          </div>
        </form>
      </EmptyState>
    )
  }
}

export default CreateTopologyForm;
