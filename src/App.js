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
import AddReview from './components/Clients/AddReview'
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
import ChangePassword from './components/ChangePassword/ChangePassword'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Loader from 'react-loader-spinner'
import UserDropDown from './components/DropDowns/UserDropDown'
import MyAccount from './components/MyAccount/MyAccount'
import {
  getMealsFromDB,
  userInfo,
  getTestimonials
} from './action/Action';
import {
  USERSMEURL,
  GETMEALSURL,
  TESTIMONIALSURL
} from './const/ConstUrls'
let _ = require('lodash')

const App = props => {

  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    if (isAuth() && _.isEmpty(props.userReducer)) {
      props.infoUser(USERSMEURL)
    }
    if (props.mealsItemReducerMessage !== 'meals successfully retrived from db') {
      props.getMealsFromDB(`${GETMEALSURL}?limit=9&offset=0`)
    }
    if (props.testimonialsReducerMessage !== 'testimonials successfully retrived from db') {
      props.getTestimonial(`${TESTIMONIALSURL}?limit=6&offset=0`)
    }
  }, [])

  useEffect(() => {
    if (props.mealsItemReducerMessage === 'meals successfully retrived from db' &&
      props.testimonialsReducerMessage === 'testimonials successfully retrived from db') {
      setIsSuccess(true)
    }
    if (props.signinReducerLogOut != undefined) {
      localStorage.clear()
    }

    if (!_.isEmpty(props.userReducer)) {
      localStorage.setItem('userName', props.userReducer.user.local.name)
      localStorage.setItem('userId', props.userReducer.user._id)
      if (props.userReducer.user.local.pending == true) {
        localStorage.setItem('isPending', props.userReducer.user.local.pending)
      }
      else {
        localStorage.setItem('isPending', false)
      }
    }

  }, [props.mealsItemReducerMessage,
  props.signinReducerLogOut,
  props.userReducer,
  props.testimonialsReducerMessage
  ])

  if (!isSuccess) {
    return (
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
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
            <Route path={`${process.env.PUBLIC_URL}/myaccount`} component={MyAccount} />
            <Route path={`${process.env.PUBLIC_URL}/forgetpassword`} component={ForgetPassword} />
            <Route path={`${process.env.PUBLIC_URL}/password/forget/:token`} component={ChangePassword} />
            <Route path={`${process.env.PUBLIC_URL}/changepassword`} component={ChangePassword} />
            <Route path={`${process.env.PUBLIC_URL}/addreview`} component={AddReview} />
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
    mealsItemReducerMessage: state.mealsItemReducer.message,
    mealsItemReducerGET: state.mealsItemReducer.getMeals,
    testimonialsReducerMessage: state.testimonialsReducer.message,
    dropDownReducer: state.dropDownReducer.isDropDown,
    signinReducerLogOut: state.signinReducer.logOutUser,
    userReducer: state.userReducer.userInfo,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMealsFromDB: url => dispatch(getMealsFromDB(url)),
    infoUser: url => dispatch(userInfo(url)),
    getTestimonial: url => dispatch(getTestimonials(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
