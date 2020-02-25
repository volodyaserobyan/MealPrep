import React, { useEffect, useState } from 'react';
import PublicLayout from './components/PublicLayout/PublicLayout'
import Dashboard from './Dashboard'
import SearchMealsDashboard from './components/SearchMeals/Dashboard/SearchMealsDashboard'
import About from './components/About/About'
import Help from './components/Help/Help'
import PlansComplete from './components/Plans/PlansComplete'
import BlogComplete from './components/Blog/BlogComplete'
import ItemOrder from './components/Meals/ItemOrder'
import Terms from './components/Terms/Terms'
import Verify from './components/Verify/Verify'
import Confirm from './components/Confirm/Confirm'
import ClientsComplete from './components/Clients/ClientsComplete'
import Blog from './components/Blog/Blog'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import ScrollToTop from './ScrollToTop'
import SelectPlans from './components/SelectPlans/SelectPlans'
import { isAuth } from './components/helpers/Utilities'
import { connect } from 'react-redux'
import ForgetPassword from './components/ForgetPassword/ForgetPassword'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Loader from 'react-loader-spinner'
import UserDropDown from './components/DropDowns/UserDropDown'
import { addItemsToDB, getItemsFromDB, deleteItemsFromDB, UserInfo } from './action/Action';
let _ = require('lodash')

const App = props => {

  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    // let mealTypeArr = ['low carb', 'high carb', 'salads', 'budget friendly ooptions']
    // let cuisineTypeArr = ['American', 'British', 'Chinase', 'French', 'Italian', 'Mexican']
    // for (let i = 0; i <= 50; i++) {
    //   const item = {
    //     title: `food${i}`,
    //     desc: `food${i} desc`,
    //     servies: i,
    //     price: i * 10,
    //     ingredients: 'dsfd,sbfkhdsfbkldsfbsdjhk',
    //     summary: {
    //       ncarbs: i,
    //       "test summary": "fgdgf",
    //       calories: i + 2,
    //       fat: i + 3,
    //       protein: i + 12
    //     },
    //     filterTags: {
    //       selects: [
    //         {
    //           name: "meal type",
    //           values: [mealTypeArr[Math.floor(Math.random() * mealTypeArr.length)]]
    //         },
    //         {
    //           name: 'cuisine type',
    //           values: [cuisineTypeArr[Math.floor(Math.random() * cuisineTypeArr.length)]]
    //         }
    //       ],
    //       ranges: [
    //         {
    //           name: 'price',
    //           value: i * 15
    //         }
    //       ]
    //     }
    //   }
    //   props.addItemstoDb('https://andoghevian-chef-app.herokuapp.com/meals', item)
    // }
    // console.log(props)
    if (isAuth() && _.isEmpty(props.userReducer)) {
      props.userInfo('https://andoghevian-chef-app.herokuapp.com/users/me')
    }
    if (props.mealsItemReducerGET.length == 0) {
      props.getItemsFromDb('https://andoghevian-chef-app.herokuapp.com/meals?limit=9&offset=0')
    }

    // props.deleteItemsFromDb('https://andoghevian-chef-app.herokuapp.com/meals/5e42a88dbfabf100177cfe8a')
  }, [])

  useEffect(() => {
    if (props.mealsItemReducerGET.length != 0) {
      console.log(props.mealsItemReducerGET)
      setIsSuccess(true)
    }
    if (props.signinReducerLogOut != undefined) {
      localStorage.clear()
    }

    if (!_.isEmpty(props.userReducer)) {
      localStorage.setItem('isPending', props.userReducer.user.pending)
    }

  }, [props.mealsItemReducerGET.length != 0, props.signinReducerLogOut != undefined, props.userReducer])

  if (!isSuccess) {
    return (
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    );
  }

  return (
    <div className="App">
      <BrowserRouter basename="/projects/mealPrep/build">
        <PublicLayout>
          <ScrollToTop />
          {props.dropDownReducer &&
            <div className='App-Drop innerWrap'>
              <UserDropDown />
            </div>
          }
          <Switch>
            <Route path={`${process.env.PUBLIC_URL}/`} component={Dashboard} exact />
            <Route path={`${process.env.PUBLIC_URL}/meals`} component={SearchMealsDashboard} />
            <Route path={`${process.env.PUBLIC_URL}/verify/:token`} component={Verify} />
            <Route path={`${process.env.PUBLIC_URL}/blog`} component={Blog} />
            <Route path={`${process.env.PUBLIC_URL}/about`} component={About} />
            <Route path={`${process.env.PUBLIC_URL}/forgetpassword`} component={ForgetPassword} />
            <Route path={`${process.env.PUBLIC_URL}/plans`} component={PlansComplete} />
            <Route path={`${process.env.PUBLIC_URL}/help`} component={Help} />
            <Route path={`${process.env.PUBLIC_URL}/login`} component={Login} />
            <Route path={`${process.env.PUBLIC_URL}/signup`} component={SignUp} />
            <Route path={`${process.env.PUBLIC_URL}/confirm`} component={Confirm} />
            <Route path={`${process.env.PUBLIC_URL}/conditions`} component={Terms} />
            <Route path={`${process.env.PUBLIC_URL}/testimonials`} component={ClientsComplete} />
            <Route path={`${process.env.PUBLIC_URL}/item/:id/`} component={ItemOrder} />
            <Route path={`${process.env.PUBLIC_URL}/blogItem/:id/`} component={BlogComplete} />
            <Route path={`${process.env.PUBLIC_URL}/selectplans`} component={SelectPlans} />
          </Switch>
        </PublicLayout>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    mealsItemReducerGET: state.mealsItemReducer.getMeals,
    dropDownReducer: state.dropDownReducer.isDropDown,
    signinReducerLogOut: state.signinReducer.logOutUser,
    userReducer: state.userReducer.userInfo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItemstoDb: (url, data) => dispatch(addItemsToDB(url, data)),
    getItemsFromDb: url => dispatch(getItemsFromDB(url)),
    deleteItemsFromDb: url => dispatch(deleteItemsFromDB(url)),
    userInfo: url => dispatch(UserInfo(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
