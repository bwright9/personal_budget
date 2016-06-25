import React from 'react'; 

class BeerCards extends React.Component {
    constructor(props) {
        super(props);
        this.state = { bills: [] };
    }

    componentWillMount() {
    	$.ajax({
    		url: '/api/bills', 
    		type: 'GET', 
    		dataType: 'JSON'
    	}).done( bills => {
    		this.setState({ bills }); 
    	}).fail( data => {
    		console.log(data); 
    	}); 
    }