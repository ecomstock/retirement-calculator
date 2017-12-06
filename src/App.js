import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Card, { CardHeader } from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
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
              label="You and your goals"
              href="/"
            />
            <Tab 
              label="Current holdings"
              href="/current-holdings"
            />
            <Tab 
              label="Future contributions"
              href="/future-contributions"
            />
            <Tab 
              label="Editable assumptions"
              href="/editable-assumptions"
            />
          </Tabs>
        </AppBar>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={User}/>
            <Route path="/current-holdings" component={Holdings}/>
            <Route path="/future-contributions" component={Contributions}/>
            <Route path="/editable-assumptions" component={Assumptions}/>
          </div>
        </BrowserRouter>
      </Card>
    );
  }
}

export default App;
