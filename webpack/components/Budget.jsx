import React from 'react';

class Budget extends React.Component {
  constructor(props) {
    super(props);
    this.state = { edit: false }
  }

  toggleEdit() {
    this.setState({ edit: !this.state.edit })
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger
    this.toggleEdit();
  }

  render() {
    if(this.state.edit){
      return (
        <div key={this.props.budget.id} className="col s12 m6">
          <div className="card grey lighten-3">
            <div className="card-content">
              <form onSubmit={this.handleSubmit.bind(this)}>
                <input ref="name" placeholder="name" defaultValue={this.props.budget.name} />
                <input ref="amount" placeholder="Alloted Amount per Month" defaultValue={this.props.budget.amount} />
                <button type="submit" className="btn">Update</button>
                <button type="button" className="btn red" onClick={this.toggleEdit.bind(this)}>Cancel</button>
              </form>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div key={this.props.budget.id} className="col s12 m6">
          <div className="card grey lighten-3">
            <div className="card-content">
              <span className="card-title">{this.props.budget.name}</span>
              <p>Spending allowed per month: {this.props.budget.amount}</p>
            </div>
            <div className="card-action">
              <button className="btn red" onClick={() => this.props.deleteBudget(this.props.budget.id)}>Delete Budget</button>
              <button className="btn grey" onClick={this.toggleEdit.bind(this)}>Edit</button>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Budget
