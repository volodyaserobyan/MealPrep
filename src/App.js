import React from 'react';
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
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/projects/mealPrep/build">
        <PublicLayout>
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
          </Switch>
        </PublicLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
