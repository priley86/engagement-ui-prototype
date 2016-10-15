import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import AppListView from '../../components/ListView/AppListView';
import CreateAppForm from '../../components/Forms/CreateAppForm';
import Engagement from '../../data/engagement';
import constants from '../../core/constants';
import c from '../common.css';

class AppsPage extends React.Component {

  state = { apps: [], createAppView: false };

  componentDidMount() {
    document.title = 'Patternfly React Boiler | Apps';
  }

  componentWillMount() {
    this.getApps();
    this.getTopology();
  }

  getTopology(){
    let engagement = new Engagement();
    engagement.getTopology().then(topology => {
      this.setState({topologyName: topology.name});
    });
  }

  getApps() {
    let that = this;
    fetch(constants.get_apps_url).then(r => r.json())
      .then(data => {
        that.setState({apps : data})
      })
      .catch(e => console.log("Booo"));
  }

  handleCreate = (event) => {
    event.preventDefault();
    this.setState({createAppView : true})
  };

  handleCreateAppSubmit = (event) => {
    event.preventDefault();
    this.setState({createAppView: false});
  };

  handleCreateAppCancel = (event) => {
    event.preventDefault();
    this.setState({createAppView: false});
  };

  render() {
    return (
      <Layout className="container-fluid container-pf-nav-pf-vertical" nav={ true }>
        {(() => {
          if(this.state.createAppView){
            return <CreateAppForm handleSubmit={this.handleCreateAppSubmit.bind(this)}
                                  handleCancel={this.handleCreateAppCancel.bind(this)}/>;
          } else {
            let content = [];
            content.push(<div className="page-header">
                <h2> {this.state.topologyName} </h2>
              </div>
            );
            content.push(<h3>Applications
              <div className={c.float_right}>
                <button type="submit" className="btn btn-primary" onClick={this.handleCreate}>Create</button>
              </div>
            </h3>);

            if (this.state.apps.length) {
              content.push(<AppListView apps={ this.state.apps }/>);
            } else {
              content.push(<h4>No apps exist.</h4>);
              content.push(<p>Hit the create button to add apps to your application topology.</p>);
            }
            return content;
          }
        })()}
      </Layout>
    );
  }
}

export default AppsPage;
