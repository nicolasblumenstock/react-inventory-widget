import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilterableProductTable from './FilterableProductTable'
import data from './data.js';


class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>widget</h2>
				</div>
				<FilterableProductTable data = {data} />
			</div>
		);
	}
}

export default App;
