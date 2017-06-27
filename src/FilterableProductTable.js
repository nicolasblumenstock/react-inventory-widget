import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


class FilterableProductTable extends Component {
	render(){
		return(
			<div className='productTable container'>
				<div className='row'>
					<div className='col-sm-3 col-sm-offset-4 table-contents'>
						<SearchBar />
						<ProductTable data = {this.props.data}/>
					</div>
				</div>
			</div>
		)
	}
}

export default FilterableProductTable;