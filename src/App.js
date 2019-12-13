import React from 'react';
import PublicLayout from './components/PublicLayout/PublicLayout'
import Dashboard from './Dashboard'
import MealsDashboard from './MealsDashboard'
import ItemOrder from './components/Meals/ItemOrder'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="App">
      <PublicLayout>
        <BrowserRouter basename="/projects/mealPrep/build">
          <Switch>
            <Route path={`${process.env.PUBLIC_URL}/`} component={Dashboard} exact />
            <Route path={`${process.env.PUBLIC_URL}/meals`} component={MealsDashboard} />
            <Route path={`${process.env.PUBLIC_URL}/item/:id/`} component={ItemOrder} />
          </Switch>
          </BrowserRouter>
      </PublicLayout>
    </div>
      );
    }
    
    export default App;
