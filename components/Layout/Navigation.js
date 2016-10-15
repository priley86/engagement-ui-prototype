import React from 'react';
import Link from '../Link';
import history from '../../core/history';
import PfBreakpoints from './PfBreakpoints';
import PfVerticalNavigation from './PfVerticalNavigation';

class Navigation extends React.Component {

  componentDidMount() {
    // Initialize the vertical navigation
    $().setupVerticalNavigation(true);
  }

  render() {
    let location = history.getCurrentLocation();
    return (
      <div className="nav-pf-vertical">
        <ul className="list-group">
          <li className={"list-group-item" + (location.pathname == '/home' ? ' active' : '')}>
            <Link to="/home">
              <span className="fa fa-rocket" data-toggle="tooltip" title="Topology"></span>
              <span className="list-group-item-value">Topology</span>
            </Link>
          </li>
          <li className={"list-group-item" + (location.pathname == '/apps' ? ' active' : '')}>
            <Link to="/apps">
              <span className="fa fa-pied-piper" data-toggle="tooltip" title="Apps"></span>
              <span className="list-group-item-value">Apps</span>
            </Link>
          </li>
          <li className={"list-group-item" + (location.pathname == '/users' ? ' active' : '')}>
            <Link to="/users">
              <span className="fa fa-users" data-toggle="tooltip" title="Users"></span>
              <span className="list-group-item-value">Users</span>
            </Link>

          </li>
        </ul>
      </div>
    );
  }

}

export default Navigation;
