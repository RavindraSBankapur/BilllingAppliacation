import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductList extends Component{

        constructor(props){
            super(props);
            this.state={
                selectedProduct:'',
                selectedQuantity:0,
                costOfProd:''
            }
        }
        onSelectProducts = (event) => {
            this.props.prodList.map(plist => {
           if(plist.id == event.target.value){
               this.setState({selectedProName:plist.name,selectedProPrice:plist.price})
           }
        })
        };
        onSelectQuantity = (event) => {
            if(event.target.value!=="object" && event.target.value!==null)
                this.setState({selectedQuantity : event.target.value});
            else
                this.setState({selectedQuantity : 0});
        }
        calculateProductCost = () => {
                let totalPrice = this.state.selectedProPrice * this.state.selectedQuantity;
                this.setState({costOfProd: totalPrice});
        }
        showProducts = (data) => {
        return(
            <div>
                <table align="center" className="productDisp">
                    <tbody>
                    <tr>
                        <th>Name of Product</th>
                        <th>Selected Quantities</th>
                        <th>Total Price</th>
                    </tr>
                    <tr>
                        <td>
                            <select onChange={this.onSelectProducts}>{
                                data.map((plist,index) => {
                                return(<option key={index} value={plist.id}>
                                        {plist.name + '/ ' + plist.price}
                                        </option>
                                )
                            })}
                            </select>
                        </td>
                        <td><input type={<textarea cols="30" rows="10" ></textarea>} placeholder="Please enter Required Quanity" onSelect={this.onSelectQuantity} /></td>
                        <td>
                            <button onClick={this.calculateProductCost} >Total</button>={this.state.costOfProd}Rs.
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
    render() {
        return (
            <div>
            {this.showProducts(this.props.prodList)}
            </div>
        );
    }
}
ProductList.propsTypes = {
    selectedProduct:PropTypes.string,
    selectedQuantity:PropTypes.number,
    costOfProd:PropTypes.number
}
ProductList.defaultProps = {
    selectedProduct:this.selectedProduct,
    selectedQuantity:this.selectedQuantity,
    costOfProd:this.costOfProd
}


export default ProductList;