import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

class DropdownDemo extends Component
{
    render()
    {
        return(
            <div>
                <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
            </div>
        )
    }
}
export default DropdownDemo