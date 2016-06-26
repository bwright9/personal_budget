import React from 'react';
import { Link } from 'react-router';

//Show budget names
//Show Monthly Amount
//Show Amount Remaining

const DashBudgets = ({ budgets, expenditures, userId }) => {
	let categories = {}
	for(let expenditure of expenditures){
		categories[expenditure.category] ? categories[expenditure.category] += parseFloat(expenditure.amount) : categories[expenditure.category] = parseFloat(expenditure.amount)
	}

	let budgetArr = budgets.map( budget => {
		let amountSpent = categories[budget.name] ? categories[budget.name] : 0
		return(
			<div key={`budget-${budget.id}`}>
				<h5>{budget.name}</h5>
				<p>Amount: {budget.amount} | Amount Spent: {amountSpent} | Amount Remaining: {budget.amount - amountSpent}</p>
			</div>
		)
	})

	return(
		<div>
			<h4><Link to={`/budgets/${userId}`}>Monthly Budgets</Link></h4>
			{budgetArr}
		</div>
	)
}


export default DashBudgets