import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Card, { CardHeader } from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import ReactTooltip from 'react-tooltip'
import './App.css';

//App components
import User from "./User";
import Holdings from "./Holdings";
import Contributions from "./Contributions";
import Assumptions from "./Assumptions";

class App extends Component {
  render() {
    return (
      <Card raised className="card">
        <CardHeader className="card-header" title="Retirement Calculator" />
        <AppBar position="static">
          <Tabs>
            <Tab 
              label="You and your accounts"
              href="/"
            />
            <Tab 
              label="Assumptions"
              href="/assumptions"
            />
            <Tab 
              label="View Report"
              href="/report"
            />
          </Tabs>
        </AppBar>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={User}/>
            <Route path="/assumptions" component={Assumptions}/>
          </div>
        </BrowserRouter>
      </Card>
    );
  }
}

export default App;
