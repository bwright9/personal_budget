import React from 'react'; 

class Bill extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    $.ajax({
      url: ``,  
      type: 'GET',
      dataType: 'JSON'
    }).done( bill => {
      this.setState({ bill });
    }).fail( data => {
      console.log(data);
    });
  }

  render() {
    return (
      <div>
        <div key={this.props.bill.id} className="col s12 m6">
          <div className="card grey lighten-3">
            <div className="card-content">
              <span className="card-title">{this.props.bill.name}</span>
            </div>
            <div className="card-action">
              <button className="btn red">Delete Bill</button>
            </div>
          </div>
        </div>
          
        <div>
          <form>
            <input ref='name' type='text' placeholder='Name' defaultValue={this.state.bill.name} /> 
            <input ref='amount' type='text' placeholder='Amount' defaultValue={this.state.bill.amount} /> 
            <input ref='due_date' type='text' placeholder='Due Date' defaultValue={this.state.bill.due_date} /> 
            <input type='submit' value='Update Bill' className='btn' />
            <button type='button' className='btn grey'>Back</button>
            <button className='btn'>Edit</button>
          </form>
        </div>
      </div>
    )
  }
} 

export default Bill; 