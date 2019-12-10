import React from 'react';
import PublicLayout from './components/PublicLayout/PublicLayout'
import Dashboard from './Dashboard'
import MealsDashboard from './MealsDashboard'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="App">
      <PublicLayout>
        <BrowserRouter>
          <Switch>
            <Route path='/' component={Dashboard} exact />
            <Route path='/meals' component={MealsDashboard} />
          </Switch>
          </BrowserRouter>
      </PublicLayout>
    </div>
      );
    }
    
    export default App;
