 import React from 'react';
 import Bill from './Bill';

 class Bills extends React.Component {
  constructor(props) {
    super(props)
    this.state = { bills: [] }
    this.displayBills = this.displayBills.bind(this)
  }

  componentWillMount() {
    $.ajax({
      url:`/api/users/${this.props.params.userId}/bills`,
      type: 'GET',
      dataType: 'JSON'
    }).done( bills => {
      this.setState({ bills })
    }).fail( data => {
      alert('Something went wrong')
    })
  }

  addBill(e) {
    e.preventDefault();
    let name = this.refs.name.value
    let amount = this.refs.amount.value
    let due_date = this.refs.due_date.value
    $.ajax({
      url: `/api/users/${this.props.params.userId}/bills`,
      type: 'POST',
      dataType: 'JSON',
      data: { bill: { name, amount } }
    }).done( bill => {
      this.setState({ bills: [
          {...bill},
          ...this.state.bills
        ]
      })
    })
    this.refs.addBillForm.reset()
  }

  deleteBill(id) {
    $.ajax({
      url: `/api/users/${this.props.params.userId}/bills/${id}`,
      type: 'DELETE',
      dataType: 'JSON'
    }).done( data => {
      let bills = this.state.bills
      let index = bills.findIndex( b => b.id === id)
      this.setState({
        bills: [
          ...bills.slice(0, index),
          ...bills.slice(index + 1, bills.length)
        ]
      })
    })
  }

  displayBills() {
    return this.state.bills.map( bill => {
      return (
        <Bill key={bill.id} bill={bill} deleteBill={this.deleteBill.bind(this)}/>
      )
    })
  }

  render() {
    if(this.state.bills){
      return(
        <div className='row'>
          <h1 className="center">Bills</h1>
          <div className="container">
            <h4>Add new Bill</h4>
            <form ref='addBillForm' onSubmit={this.addBill.bind(this)}>
              <input ref='name' placeholder='Name' />
              <input ref='amount' type='number' step='any' placeholder='Amount' />
              <input ref='due_date' placeholder='Due Date' />
              <button type='submit' className='btn'>Create Bill</button>
            </form>
          </div>
          {this.displayBills()}
        </div>
      )
    } else {
      return(<h1 className="center">Bills did not load.</h1>)
    }
  }
 }

 export default Bills 