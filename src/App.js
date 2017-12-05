import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Card, { CardHeader } from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import './App.css';

//App components
import YourGoals from "./YourGoals";

class App extends Component {
  render() {
    return (
      <Card raised className="card">
        <CardHeader className="card-header" title="Retirement Calculator" />
        <AppBar position="static">
          <Tabs>
            <Tab label="You and your goals" />
            <Tab label="Current holdings" />
            <Tab label="Future contributions" />
            <Tab label="Editable assumptions" />
          </Tabs>
        </AppBar>
        <BrowserRouter>
          <Route path="/" component={YourGoals}/>
        </BrowserRouter>
      </Card>
    );
  }
}

export default App;
