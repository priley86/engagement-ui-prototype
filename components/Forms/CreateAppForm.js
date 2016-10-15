import React, { PropTypes } from 'react';
import EmptyState from '../EmptyState/EmptyState';

class CreateAppForm extends React.Component {

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
      <EmptyState title="Create App">
        <form className="form-horizontal" role="form">
          <div className="form-group">
            <label htmlFor="input1" className="col-sm-2 control-label">App Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="input1" required="" placeholder="app-name"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="input1" className="col-sm-2 control-label">SCM Url</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="input1" required="" placeholder="https://github.com/acme/UI.git"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="input1" className="col-sm-2 control-label">Base Image</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="input1" required="" placeholder="openshift/httpd:latest"/>
            </div>
          </div>
          <br/>
          <br/>
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

export default CreateAppForm;
