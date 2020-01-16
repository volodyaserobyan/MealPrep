import React from 'react'
import Select from 'react-select'
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
            { value: 'chocolate', label: 'Chocolate' },
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
                            onChange={this.handleChangeSelect} />
                    </div>
                </div>
                <div className>

                </div>
            </section>
        )
    }
}

export default SelectPlansMenu