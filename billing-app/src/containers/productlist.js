import React, { Component } from 'react';
class ProductList extends Component{

    constructor(props){
        super(props);
        this.state={
            selectedProduct:'',
            selectedQuantity:0,
            costOfProd:''
        }
    }
    // showProducts(data){
    //    return(
    //        data.map((plist,index) => {
    //         return (
    //            <div>
    //             <table>
    //                 <tr>
    //                     <th>Product Name</th>
    //                     <th>Quantity </th>
    //                     <th>Price</th>
    //                 </tr>
    //
    //                 <tr>
    //                     <td key={index}>{plist.name}</td>
    //                     <td>3</td>
    //                     <td>30000</td>
    //                 </tr>
    //             </table>
    //                <br></br>
    //             <select>
    //                 <option key={index}>{plist.name}</option>
    //             </select>
    //             </div>
    //
    //         )
    //        })
    //    )
    // }

    onSelectProducts = (event) => {
        console.log('-----------------Sel Products', event.target.value);
       console.log('Resetted Object',this.props.prodList);
       this.props.prodList.map(plist => {
           console.log('in for loop', plist.id === event.target.value)
           if(plist.id == event.target.value)
           {
               this.setState({selectedProName:plist.name,selectedProPrice:plist.price})
           }
       })
    }
    onSelectQuantity = (event) => {
        console.log('-----------------Sel Quants');
        if(event.target.value!=='' && event.target.value!==null)
            this.setState({selectedQuantity : event.target.value});
        else
            this.setState({selectedQuantity : 0});
    }
    calculateProductCost=() => {
        console.log('********************************');

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
                    {/*<th>Price Of The Product</th>*/}
                    <th>Selected Quantities</th>
                    <th>Total Price</th>
                </tr>
                <tr>
                    <td>
                        <select onChange={this.onSelectProducts}>
                            {
                                data.map((plist,index) => {
                                return(
                                    <option key={index} value={plist.id} >
                                        {plist.name + '/ ' + plist.price}
                                        </option>
                                )
                            })}
                        </select>
                    </td>
                    <td><input type={<textarea cols="30" rows="10" ></textarea>} placeholder="Please enter Required Quanity" onSelect={this.onSelectQuantity} /></td>


                    {/*<td>*/}
                        {/*10000*/}
                    {/*</td>*/}

                    {/*<td>*/}
                        {/*<select >*/}
                        {/*{*/}
                            {/*data.map((plist) => {*/}
                                {/*console.log('_______________ : ', plist);*/}

                                {/*return plist.quantity.map((qty, index) => {*/}
                                    {/*return(*/}
                                        {/*<option key={index}>*/}
                                            {/*{qty}*/}
                                        {/*</option>*/}
                                    {/*)*/}
                                {/*})*/}

                            {/*})}*/}
                    {/*</select>*/}
                    {/*</td>*/}
                    <td>
                        <button onClick={this.calculateProductCost}>Total</button>
                        ={this.state.costOfProd}Rs.
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
        )
    }
    render() {
        console.log('props from list' ,this.props);
        return (
            <div>
            {this.showProducts(this.props.prodList)}
            </div>
        );
    }
}

export default ProductList;