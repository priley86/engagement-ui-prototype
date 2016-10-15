import React, { PropTypes } from 'react';
import EmptyState from '../EmptyState/EmptyState';
import CreateAppForm from './CreateAppForm';


class CreateProjectForm extends React.Component {

  state = { createProjectView: true, createAppView: false, apps: [] };

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

  handleCreateApp = (event) => {
    event.preventDefault();
    this.setState({createProjectView: false, createAppView: true});
  };

  handleCreateAppSubmit = (event) => {
    event.preventDefault();
    this.setState({createProjectView: false, createAppView: true});
  };

  handleCreateAppCancel = (event) => {
    event.preventDefault();
    this.setState({createProjectView: true, createAppView: false});
  };

  render() {
    if(this.state.createProjectView) {
      return (
        <EmptyState title="Create Project">
          <form className="form-horizontal" role="form">
            <div className="form-group">
              <label htmlFor="input1" className="col-sm-2 control-label">Project Name</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="input1" required="" placeholder="project-name"/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="input2" className="col-sm-2 control-label">Apps</label>
              <div className="col-sm-10"></div>
              <div className="col-sm-12">
                <h4>Project contains no apps.</h4>
                <p>Create one or more apps to continue.</p>
                <button type="submit" className="btn btn-primary" onClick={this.handleCreateApp}>Create App</button>
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
    } else if (this.state.createAppView){
      return (
        <CreateAppForm handleSubmit={this.handleCreateAppSubmit.bind(this)}
                       handleCancel={this.handleCreateAppCancel.bind(this)}/>
      )
    }
  }
}

export default CreateProjectForm;
