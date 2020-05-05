import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Analysis from "./components/analysis";
import Home from "./components/home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/analysis" component={Analysis} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
