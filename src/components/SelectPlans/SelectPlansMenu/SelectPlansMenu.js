import React from 'react'
import Select from 'react-select'
import Item from '../../Meals/Item'
import './SelectPlansMenu.scss'

class SelectPlansMenu extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedOption: null
        }
    }

    handleChangeSelect = selectedOption => {
        this.setState({ selectedOption })
    }

    render() {
        const options = [
            { value: 'chocolate', label: 'Budget Friendly' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' },
        ];
        return (
            <section className="SelectPlansMenu">
                <div className="SelectPlansMenu-Title">
                    <h1>Meals For This Week</h1>
                    <div>
                        <p>Meal Type: </p>
                        <Select
                            value={this.state.selectedOption}
                            options={options}
                            onChange={this.handleChangeSelect}
                            className="Select"
                            placeholder="Budget Friendly" />
                    </div>
                </div>
                <div className="SelectPlansMenu-Table">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(id => <Item key={id} id={id} />)}
                </div>
                <button>LOAD MORE ITEMS</button>
            </section>
        )
    }
}

export default SelectPlansMenu