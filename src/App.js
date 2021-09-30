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
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
