import { Route, Switch } from "react-router-dom";
import "./App.css";
import CountryDetail from "./components/CountryDetail";
import CreateActivity from "./components/CreateActivity";
import EditActivity from "./components/EditActivity";

import Home from "./components/Home";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <Home />
      </Route>
      <Switch>
        <Route path="/main">
          <Main />
        </Route>
        <Route path="/detail/:id">
          <CountryDetail />
        </Route>
        <Route path="/edit/:id">
          <EditActivity />
        </Route>
        <Route path="/create">
          <CreateActivity />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
