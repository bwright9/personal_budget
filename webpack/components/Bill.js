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
        )
      }
    }


    export default Bill; 