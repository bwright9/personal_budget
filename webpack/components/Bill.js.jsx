import React from 'react';
import { Link } from 'react-router'; 

class Bill extends React.Component {
    constructor(props) {
        super(props);
        this.state = { bill: null, editView: false }
        this.Edit = this.Edit.bind(this); 
    }

    componentWillMount() {
        $.ajax({
            url: `/api/bills/${this.props.params.id}`,
            type: 'GET',
            dataType: 'JSON'
        }).done( bill => {
            this.setState({ bill });
        }).fail( data => {
            console.log(data);
        });
    }

    Edit() {
      this.setState({ editView: !this.state.editView }); 

    }

    editControl(e) {
      e.preventDefault(); 
      let name = this.refs.name.value;
      let amount = this.refs.amount.value;
      let due_date = this.refs.due_date.value;

      $.ajax({
        url: `/api/bills/${this.state.bill.id}`, 
        type: 'PUT',
        data: { bill: { name, amount, due_date } }, 
        dataType: 'JSON'
      }).done( bill => {
        this.setState({ bill, editView: false }); 
      }).fail( data => {
        console.log(data); 
      }); 

    }

    render() {
        if(this.state.editView) {
          return(
            <div>
              <h3>Edit Bill: {this.state.bill.name}</h3>
              <form onSubmit={this.editControl.bind(this)}>
                <input ref='name' ty
                pe='text' placeholder='Name' defaultValue={this.state.bill.name} /> 
                <input ref='amount' type='text' placeholder='Amount' defaultValue={this.state.bill.amount} /> 
                <input ref='due_date' type='text' placeholder='Due Date' defaultValue={this.state.bill.due_date} /> 
                <input type='submit' value='Update Bill' className='btn' />
                <button type='button' onClick={this. Edit} className='btn grey'>Back</button> 
              </form>
            </div> 
        } else {
        if(this.state.bill) {
            return(
        <div className="col s12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{this.state.bill.name}</span>
              <div>
                  <label>Amount:</label>
                  <p>{this.state.bill.amount}</p>

                  <label>Due date:</label>
                  <p>{this.state.bill.due_date}</p>
                </div>
            </div>
            <div className="card-action">
             <Link to='/'>All Bills</Link> 
             <button className='btn' onClick={this.Edit}>Edit</button>
            </div>
          </div>
        </div>
            )
      } else {
          return(
              <h3 className='center'>Bill failed to update...</h3>
          )
        }
      }
}

export default Bill; 