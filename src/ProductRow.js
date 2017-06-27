import React, { Component } from 'react';

class ProductRow extends Component {

	render(){
		var prodClass = '';
		if(this.props.prod.inStock === true){
			prodClass = 'avail'
		}else{
			prodClass = 'unavail'
		}

		return(
			<tr className = {prodClass}>
				<td>{this.props.prod.name}</td>
				<td>{this.props.prod.price}</td>
			</tr>
		)
	}
}

export default ProductRow;