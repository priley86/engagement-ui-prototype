import React, { PropTypes } from 'react';

class StagesView extends React.Component {

  componentDidMount() {
    //run matchHeight jquery plugin
    this.matchHeight();
  }

  matchHeight(){
    // matchHeight the contents of each .card-pf and then the .card-pf itself
    $(".row-cards-pf > [class*='col'] > .card-pf > .card-pf-body").matchHeight();
  }


  render() {
    return (
      <div className="row row-cards-pf">
        {this.props.stages.map((stage,i) =>
          <div className="col-xs-12 col-sm-3 col-md-2" key={i}>
            <div className="card-pf card-pf-view card-pf-view-xs">
              <div className="card-pf-body">
                <div className="card-pf-heading-kebab">
                  <div className="dropdown pull-right dropdown-kebab-pf">
                    <button className="btn btn-link dropdown-toggle" type="button" id="dropupKebabRight2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="fa fa-ellipsis-v"></span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropupKebabRight2">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li role="separator" className="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </div>

                  <h2 className="card-pf-title">
                    <span className="pficon pficon-cluster"></span> { stage.display_name }
                  </h2>

                  <ul className="list-unstyled">
                    <li><span className="pficon pficon-users"></span>  &nbsp; {stage.user_to_role.length } users </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default StagesView;