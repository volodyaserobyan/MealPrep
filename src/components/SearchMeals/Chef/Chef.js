import React from 'react'
import Checkbox from '../../Forms/CheckBox'
import './Chef.scss'
let _ = require('lodash')

class Chef extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            checkedItemsMealType: new Map(),
            checkedItemsArr: []
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
                key: "checkBox7",
                name: "Brandie Lane"
            }
        ];
    }

    componentWillReceiveProps(nextProps) {
        if (!_.isEqual(this.props, nextProps)) {
            this.setState( prevState => ({
                checkedItemsArr: this.removeItemfromArr(nextProps.currentDelete, this.state.checkedItemsArr),
                checkedItemsMealType: prevState.checkedItemsMealType.set(nextProps.currentDelete, false)
            }))
            setTimeout(() => {
                this.props.toggleChange({
                    chef: this.state.checkedItemsArr
                })
            }, 0);
        }
    }

    removeItemfromArr = (item, arr) => {
        let newArr = [...arr]
        let index = newArr.indexOf(item)
        if (index !== -1) {
            newArr.splice(index, 1)
        }
        return newArr
    }

    handleChangeChk = (e) => {
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.setState(prevState => ({
            checkedItemsMealType: prevState.checkedItemsMealType.set(item, isChecked),
        }));
        if (isChecked) {
            this.setState(prevState => ({
                checkedItemsArr: [...prevState.checkedItemsArr, item]
            }))
        }
        else {
            this.setState({
                checkedItemsArr: this.removeItemfromArr(item, this.state.checkedItemsArr)
            })
        }
        setTimeout(() => {
            this.props.toggleChange({
                chef: this.state.checkedItemsArr
            })
        }, 0);
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
