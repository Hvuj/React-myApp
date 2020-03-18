import React, { Component } from "react";

class AddWitcher extends Component {
	state = {
		name: null,
		age: null,
		belt: null
	};
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		console.log("this is from the add witcher js");
		console.log(this.state);
		this.props.addWitcher(this.state);
	};
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="name">Name:</label>
					<input type="text" id="name" onChange={this.handleChange}></input>
					<label htmlFor="age">age:</label>
					<input type="text" id="age" onChange={this.handleChange}></input>
					<label htmlFor="belt">belt:</label>
					<input type="text" id="belt" onChange={this.handleChange}></input>
					<button>Submit</button>
				</form>
			</div>
		);
	}
}

export default AddWitcher;
