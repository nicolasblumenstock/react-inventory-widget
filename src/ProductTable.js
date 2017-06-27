import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends Component {
	render(){
		var prodArray = [];
		var lastCat = '';
		var key = 0;
		this.props.data.map((prod,index)=>{
			if(prod.category !== lastCat){
				prodArray.push(<ProductCategoryRow prod={prod} key={key} />)
				lastCat = prod.category;
				key++;
			}
			prodArray.push(<ProductRow key={key} prod={prod} />)
			key++
			return 'tacos';
		})
		return (
			<table className='table-condensed'>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{prodArray}
				</tbody>
			</table>
		)
	}
}

export default ProductTable;