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
                label: "budget-friendly-options",
                key: "checkBox4",
                name: "Budget Friendly Options"
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
        return (
            <div className="SearchMealsDashboard-Cont-Filters-Chef">
                <h2 className="Filters-Title">Chef</h2>
                <div className="Filters-Container">

                </div>
            </div>
        )
    }
}

export default Chef
