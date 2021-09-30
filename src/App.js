import "./App.scss";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { Driver } from "./components/Driver/Driver";
import TME from "./components/TME/TME";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/driver/:_id">
          <Driver />
        </Route>
        <Route path="/">
          <div className="app">
            <TME />
            <section className="bg">
              <div className="wave wave1"></div>
              <div className="wave wave2"></div>
              <div className="wave wave3"></div>
              <div className="wave wave4"></div>
            </section>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
