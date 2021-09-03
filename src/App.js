import Designer from "./components/desinger/designer";
import Navbar from "./components/navbar/navbar";
import Account from "./components/account/account";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Joinus from "./components/joinus/joinus";

function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>

        <Switch>
          <Route exact path="/">
            <Joinus />
          </Route>

          <Route path="/designer">
            <Designer />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
