import React from "react";
import './CheckBox.scss'

class Checkbox extends React.Component {

    render() {
        return (
            <input
                type='checkbox'
                id="checkbox1"
                className="Checkbox"
                name={this.props.name}
                checked={this.props.checked}
                onChange={this.props.onChange}
                value={this.props.value}
            />
        );
    }
}

export default Checkbox;