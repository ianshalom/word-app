import React from "react";
// import classes from "./App.css";
import Home from "./components/Home/Home";
import Find from "./containers/Find/Find";
import MyWords from "./containers/MyWords/MyWords";
import Layout from "./components/Layout/Layout";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <Layout>
        <Switch>
          <Route path="/my-words" component={MyWords} />
          <Route path="/find-words" component={Find} />
          <Route path="/" component={Home} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
