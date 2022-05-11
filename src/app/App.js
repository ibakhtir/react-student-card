import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import StudentCard from "./layouts/studentCard";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/student/:type?" exact component={StudentCard} />
        <Redirect to="/student" />
      </Switch>
    </div>
  );
}

export default App;
