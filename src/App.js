import React, { Component } from "react";
import "./App.css";
import Witcher from "./Witcher";
import AddWitcher from "./AddWitcher";

class App extends Component {
	state = {
		witchers: [
			{ name: "hvuj", age: "29", belt: "black", id: 1 },
			{ name: "hvuj", age: "291", belt: "black", id: 2 },
			{ name: "hvuj", age: "292", belt: "black", id: 3 }
		]
	};
	addWitcher = (witcher) => {
		console.log("this is from the app js");
		console.log(witcher);
		witcher.id = this.state.witchers[this.state.witchers.length - 1].id + 1;
		let witchers = [...this.state.witchers, witcher];
		this.setState({ witchers: witchers });
	};
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1>my first react app</h1>
					<p>welcome</p>
				</header>
				<Witcher witchers={this.state.witchers} />
				<AddWitcher addWitcher={this.addWitcher} />
			</div>
		);
	}
}

export default App;
