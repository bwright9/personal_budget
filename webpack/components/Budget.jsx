import React from 'react';

class Budget extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div key={this.props.budget.id} className="col s12 m6">
        <div className="card grey lighten-3">
          <div className="card-content">
            <span className="card-title">{this.props.budget.name}</span>
          </div>
          <div className="card-action">
            <button className="btn red">Delete Budget</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Budget
