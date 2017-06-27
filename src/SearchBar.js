import React, { Component } from 'react';

class SearchBar extends Component {
	render(){
		return(
			<div className='search'>
				<form>
					<input className='searchbar' type='text' placeholder='Search' />
					<input type='checkbox' className='check'/> Only Show Products
				</form>	
			</div>			
		)
	}
}

export default SearchBar;