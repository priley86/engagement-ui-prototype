import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import EmptyState from '../../components/EmptyState/EmptyState';
import CreateTopologyForm from '../../components/Forms/CreateTopologyForm';
import Engagement from '../../data/engagement';
import history from '../../core/history';
import constants from '../../core/constants';

class WelcomePage extends React.Component {

  state = { createForm: false };

  componentDidMount() {
    document.title = constants.app_title;
  }

  handleCreate = (event) => {
    this.setState({createForm: true});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //Todo: handle engagement.saveTopology() here
    history.push('/home');
  };

  handleCancel = (event) => {
    event.preventDefault();
    this.setState({createForm: false});
  };
  
  componentWillMount(){
    let engagement = new Engagement();
    engagement.getTopology().then(topology => {
    });
  }

  render() {
    return (
      <Layout className="container-fluid">
        {(() => {
          if(this.state.createForm){
            return <CreateTopologyForm handleSubmit={this.handleSubmit.bind(this)} 
                                       handleCancel={this.handleCancel.bind(this)} />;
          } else {
            return <EmptyState>
              <div className="blank-slate-pf-icon">
                <i className="fa fa-rocket"></i>
              </div>
              <h1>Welcome to Red Hat Open Innovation Labs</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>To begin, create an application topology for your environment.</p>
              <div className="blank-slate-pf-main-action">
                <button className="btn btn-primary btn-lg" onClick={this.handleCreate}>
                  Create Topology
                </button>
              </div>
            </EmptyState>;
          }
        })()}
      </Layout>
    );
  }
}

export default WelcomePage;
