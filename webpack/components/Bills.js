import React from 'react'; 

class Bills extends React.Component {
  constructor(props) {
    super(props); 
    this.state = { bills: [] };   

  }

  componentWillMount() {
    $.ajax({
      url: `/api/users/${this.props.userId}/bills`, 
      type: 'GET', 
      dataType: 'JSON', 
    }).done ( bills => {
      this.setState({ bills }); 
    }).fail( data => {
      console.log(data); 
    }); 
  }


  displayBills() {
    return this.state.bills.map ( bill => {
      return (
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{bill.name}</span>
            </div>
            <div className="card-action">
            </div>
          </div>
        </div>
      ); 
    }); 
  }

  render() {
    return(
      <div className='row'>
        {this.displayBills.bind(this)()}
      </div>
    )
  }
}


export default Bills; 