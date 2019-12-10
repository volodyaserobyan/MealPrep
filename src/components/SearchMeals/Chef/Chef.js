import React from 'react'
import Checkbox from '../../Forms/CheckBox'
import './Chef.scss'

class Chef extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            checkedItemsMealType: new Map()
        };

        this.checkboxes = [
            {
                label: "morris-cooper",
                key: "checkBox1",
                name: "Morris Cooper"
            },
            {
                label: "diane-alexander",
                key: "checkBox2",
                name: "Diane Alexander"
            },
            {
                label: "harold-hawkins",
                key: "checkBox3",
                name: "Harold Hawkins"
            },
            {
                label: "tomothy-mccoy",
                key: "checkBox4",
                name: "Tomothy Mccoy"
            },
            {
                label: "annette-fisher",
                key: "checkBox5",
                name: "Annette Fisher"
            },
            {
                label: "brandie-lane",
                key: "checkBox6",
                name: "Brandie Lane"
            },
            {
                label: "brandie-lane",
                key: "checkBox6",
                name: "Brandie Lane"
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
            <div className="SearchMealsDashboard-Cont-Filters-Chef">
                <h2 className="Filters-Title">Chef</h2>
                <div className="Filters-Container">
                    {checkBoxesToRender}
                </div>
            </div>
        )
    }
}

export default Chef
