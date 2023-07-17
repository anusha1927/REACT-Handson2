import React, { Component } from 'react';
import './styles.css';

class FormsClass extends Component {
	state = {
		Name: '',
		Dept: '',
		Ratings: '',
		EmpData: [],
	};
	onType = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	onSubmit = (e) => {
		e.preventDefault();
		let newObj = {
			name: this.state.Name,
			dept: this.state.Dept,
			rating: this.state.Ratings,
		};
		this.state.EmpData.push(newObj);
		this.setState({ [e.target.name]: e.target.value });
		//console.log(this.state.EmpData);
	};
	render() {
		return (
			<>
				<h1>EMPLOYEE FEEDBACK FORM</h1>
				<div>
					<div>
						<label htmlFor="name">Name : </label>
						<input
							type="text"
							id="name"
							name="Name"
							value={this.state.Name}
							onChange={this.onType}
						/>
					</div>
					<div>
						<label htmlFor="dept">Department : </label>
						<input
							type="text"
							id="dept"
							name="Dept"
							value={this.state.Dept}
							onChange={this.onType}
						/>
					</div>
					<div>
						<label htmlFor="rating">Rating : </label>
						<input
							type="text"
							id="rating"
							name="Ratings"
							value={this.state.Ratings}
							onChange={this.onType}
						/>
					</div>
					<div>
						<button onClick={this.onSubmit}>Submit</button>
					</div>
				</div>
				<div className="container">
					{this.state.EmpData.map((item, index) => {
						return (
							<div key={index} className="box">
								<div>
									Name: {item.name} | Department: {item.dept} | Rating:{' '}
									{item.rating}
								</div>
							</div>
						);
					})}
				</div>
			</>
		);
	}
}

export default FormsClass;
