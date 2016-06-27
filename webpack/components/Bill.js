import React from 'react';

class Bill extends React.Component {
  constructor(props) {
    super(props);
    this.state = { edit: false }
  }

  toggleEdit() {
    this.setState({ edit: !this.state.edit })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.toggleEdit();
  }

  render() {
    if(this.state.edit){
      return (
        <div key={this.props.bill.id} className="col s12 m6">
          <div className="card grey lighten-3">
            <div className="card-content">
              <form onSubmit={this.handleSubmit.bind(this)}>
                <input ref="name" placeholder="name" defaultValue={this.props.bill.name} />
                <input ref="amount" placeholder="Amount" defaultValue={this.props.bill.amount} />
                <input ref="due_date" placeholder="Due Date" defaultValue={this.props.bill.due_date} />
                <button type="submit" className="btn">Update</button>
                <button type="button" className="btn red" onClick={this.toggleEdit.bind(this)}>Cancel</button>
              </form>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div key={this.props.bill.id} className="col s12 m6">
          <div className="card grey lighten-3">
            <div className="card-content">
              <span className="card-title">{this.props.bill.name}</span>
              <p>Amount: {this.props.bill.amount}</p>
              <p>Due date: {this.props.bill.due_date}</p>
            </div>
            <div className="card-action">
              <button className="btn red" onClick={() => this.props.deleteBill(this.props.bill.id)}>Delete</button>
              <button className="btn blue-grey" onClick={this.toggleEdit.bind(this)}>Edit</button>
            </div>
          </div>
        </div>
      )
    }
            )
      } else {
          return(
              <h3 className='center'>Bill failed to update...</h3>
          )
        }
      }
  }
}

export default Bill
