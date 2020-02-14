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
import ClientsComplete from './components/Clients/ClientsComplete'
import Blog from './components/Blog/Blog'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import ScrollToTop from './ScrollToTop'
import SelectPlans from './components/SelectPlans/SelectPlans'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Loader from 'react-loader-spinner'
import { addItemsToDB, getItemsFromDB, deleteItemsFromDB } from './action/Action';

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
    if (props.mealsItemReducerGET == undefined) {
      props.getItemsFromDb('https://andoghevian-chef-app.herokuapp.com/meals')
    }
    // props.deleteItemsFromDb('https://andoghevian-chef-app.herokuapp.com/meals/5e42a88dbfabf100177cfe8a')
  }, [])

  useEffect(() => {
    if (props.mealsItemReducerGET != undefined) {
      setIsSuccess(true)
    }
  }, [props.mealsItemReducerGET != undefined])

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
          <Switch>
            <Route path={`${process.env.PUBLIC_URL}/`} component={Dashboard} exact />
            <Route path={`${process.env.PUBLIC_URL}/meals`} component={SearchMealsDashboard} />
            <Route path={`${process.env.PUBLIC_URL}/blog`} component={Blog} />
            <Route path={`${process.env.PUBLIC_URL}/about`} component={About} />
            <Route path={`${process.env.PUBLIC_URL}/plans`} component={PlansComplete} />
            <Route path={`${process.env.PUBLIC_URL}/help`} component={Help} />
            <Route path={`${process.env.PUBLIC_URL}/login`} component={Login} />
            <Route path={`${process.env.PUBLIC_URL}/signup`} component={SignUp} />
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
    mealsItemReducerGET: state.mealsItemReducer.getMeals
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItemstoDb: (url, data) => dispatch(addItemsToDB(url, data)),
    getItemsFromDb: url => dispatch(getItemsFromDB(url)),
    deleteItemsFromDb: url => dispatch(deleteItemsFromDB(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
