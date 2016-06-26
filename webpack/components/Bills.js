import React from 'react'; 
import Bill from './Bill'

class Bills extends React.Component {
  constructor(props) {
    super(props); 
    this.state = { bills: [] }; 
    this.displayBills = this.displayBills.bind(this);   

  }

  componentWillMount() {
    $.ajax({
      url: `/api/users/${this.props.params.userId}/bills`, 
      type: 'GET', 
      dataType: 'JSON', 
    }).done ( bills => {
      this.setState({ bills }); 
    }).fail( data => {
      console.log(data); 
    }); 
  }

  addBill(e) {
    e.preventDefault();
    let name = this.refs.name.value
    let amount = this.refs.amount.value
    $.ajax({
      url: `/api/users/${this.props.params.userId}/bills`, 
      type: 'POST', 
      dataType: 'JSON', 
      data: { bill: { name, amount } }
    }).done(bill => {
      this.refs.newBillForm.reset();
      this.setState({ bills: [ {...bill}, ...this.state.bills] })
    })
  }

  deleteBill(id) {
    $.ajax({
    }).done( data => {
      let bills = this.state.bills; 
      let index = bills.findIndex( b => b.id === id); 
      this.setState({
        bills: [
          ...bills.slice(0, index), 
          ...bills.slice(index + 1, bills.length)
        ]
      }); 
    }).fail( data => {
      console.log(data); 
    }); 
  }

  displayBills() {
    return this.state.bills.map ( bill => {
      return (
        <div key={`bill-${bill.id}`} className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{bill.name}</span>
              <p>Amount: ${bill.amount}</p>
            </div>
            <div className="card-action">
            </div>
          </div>
        </div>
      ); 
    }); 
  }

  render() {
    if(this.state.bills.length > 0){
      return(
        <div className='row'>
          <form ref="newBillForm" onSubmit={this.addBill.bind(this)}>
            <input ref="name" placeholder="Name" />
            <input ref="amount" type="number" step="any" placeholder="Amount" />
            <button type="subtmit" className="btn">Add New Bill</button>
          </form>
          {this.displayBills.bind(this)()}
        </div>
      )
    } else {
      return(<h1 className="center">Loading...</h1>)
    }
  }
}


export default Bills; 