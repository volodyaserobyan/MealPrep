import React from 'react'
import Checkbox from '../../Forms/CheckBox'
import './CuisineType.scss'

class CuisineType extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            checkedItemsMealType: new Map()
        };

        this.checkboxes = [
            {
                label: "american",
                key: "checkBox1",
                name: "American"
            },
            {
                label: "british",
                key: "checkBox2",
                name: "British"
            },
            {
                label: "chinese",
                key: "checkBox3",
                name: "Chinese"
            },
            {
                label: "french",
                key: "checkBox4",
                name: "French"
            },
            {
                label: "italian",
                key: "checkBox5",
                name: "Italian"
            },
            {
                label: "mexican",
                key: "checkBox6",
                name: "Mexican"
            },
            {
                label: "mexican",
                key: "checkBox6",
                name: "Mexican"
            },
            {
                label: "mexican",
                key: "checkBox6",
                name: "Mexican"
            }
        ];
    }

    handleChangeChk = (e) => {
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.setState(prevState => ({
            checkedItemsMealType: prevState.checkedItemsMealType.set(item, isChecked)
        }));
    }

    render() {
        const checkBoxesToRender = this.checkboxes.map(item => {
            return (
                <label key={item.key}>
                    <Checkbox
                        name={item.name}
                        checked={this.state.checkedItemsMealType.get(item.name)}
                        onChange={this.handleChangeChk}
                        value={this.state.checkedItemsMealType} />
                    <p>{item.name}</p>
                </label>
            )
        })

        return (
            <div className="SearchMealsDashboard-Cont-Filters-Cousine">
                <h2 className="Filters-Title">Cuisine Type</h2>
                <div className="Filters-Container">
                    {checkBoxesToRender}
                </div>
            </div>
        )
    }
}

export default CuisineType