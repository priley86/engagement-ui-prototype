import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import TableView from '../../components/TableView/TableView';
import CreateUserForm from '../../components/Forms/CreateUserForm';
import Engagement from '../../data/engagement';
import constants from '../../core/constants';
import c from '../common.css'

class UsersPage extends React.Component {

  state = { users: [], createUserView: false };

  componentDidMount() {
    document.title = constants.app_title;
  }

  componentWillMount() {
    this.getUsers();
    this.getTopology();
  }

  getTopology(){
    let engagement = new Engagement();
    engagement.getTopology().then(topology => {
      this.setState({topologyName: topology.name});
    });
  }

  getUsers() {
    let that = this;
    fetch(constants.get_users_url).then(r => r.json())
      .then(data => {
        that.setState({users : data})
      })
      .catch(e => console.log(e));
  }

  handleRowClick = (event, item) => {
    alert(item.firstname + ' clicked');
  };

  handleCreate = (event) => {
    this.setState({createUserView : true})
  };

  handleCreateUserSubmit = (event) => {
    event.preventDefault();
    this.setState({createUserView: false});
  };

  handleCreateUserCancel = (event) => {
    event.preventDefault();
    this.setState({createUserView: false});
  };

  render() {
    let columns = [
      {
        'field': 'username',
        'displayName':'Username'
      },
      {
        'field': 'email',
        'displayName':'Email'
      },
      {
        'field': 'firstname',
        'displayName':'FirstName'
      },
      {
        'field': 'lastname',
        'displayName':'LastName'
      }
    ];

    return (
      <Layout className="container-fluid container-pf-nav-pf-vertical" nav= { true }>
        {(() => {
          if(this.state.createUserView){
            return <CreateUserForm handleSubmit={this.handleCreateUserSubmit.bind(this)}
                                  handleCancel={this.handleCreateUserCancel.bind(this)}/>;
          } else {
            let content = [];
            content.push(<div className="page-header">
                <h2>{this.state.topologyName}</h2>
              </div>
            );
            content.push(<h3> Users
              <div className={c.float_right}>
                <button type="submit" className="btn btn-primary" onClick={this.handleCreate}>Create</button>
              </div>
            </h3>);
            content.push(<br/>);

            if (this.state.users.length) {
              content.push(<TableView columns={ columns } data ={ this.state.users } handleRowClick={this.handleRowClick}/>);
            } else {
              content.push(<h4>No users exist.</h4>);
              content.push(<p>Hit the create button to add users.</p>);
            }
            return content;
          }
        })()}
      </Layout>
    );
  }
}

export default UsersPage;
