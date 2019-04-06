import * as React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { AppWrapper } from "./containers/AppWrapper/AppWrapper";

import { Home } from "./containers/Home/Home";

import { Alm } from "./containers/Alm/Alm";
import { UncleFedor } from "./containers/UncleFedor/UncleFedor";

import { NotFound } from "./containers/NotFound/NotFound";

class App extends React.Component {
  public render() {
    return (

      <AppWrapper>
        <Router>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/alm" component={Alm} />
            <Route exact={true} path="/uncleFedor" component={UncleFedor} />

            <Route component={NotFound} />
          </Switch>
        </Router>
      </AppWrapper>
    );
  }
}

export default App;
