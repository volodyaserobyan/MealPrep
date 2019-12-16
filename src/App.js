import React from 'react';
import PublicLayout from './components/PublicLayout/PublicLayout'
import Dashboard from './Dashboard'
import SearchMealsDashboard from './components/SearchMeals/Dashboard/SearchMealsDashboard'
import About from './components/About/About'
import ItemOrder from './components/Meals/ItemOrder'
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
            <Route path={`${process.env.PUBLIC_URL}/about`} component={About} />
            <Route path={`${process.env.PUBLIC_URL}/item/:id/`} component={ItemOrder} />
          </Switch>
        </PublicLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
