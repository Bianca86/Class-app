import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { data } from "./data/data";
import LoginPage from "./pages/LoginPage";
import "./style.css";
import Header from "./components/header/Header";
import Newsfeed from "./pages/Newsfeed";
import NewsfeedPage from "./pages/Newsfeed";

function App() {
  const [account, setAccount] = useState(data.account);

  function LogUserIn() {
    setAccount({
      ...account,
      loggedIn: TextTrackCue,
    });
  }

  return (
    <Router>
      <Switch>
        {!account.loggedIn ? (
          <Route path="/">
            <LoginPage LogUserIn={LogUserIn} />
          </Route>
        ) : (
          <>
            <Route exact path="/">
              <Header />
              <NewsfeedPage></NewsfeedPage>
            </Route>
            <Route path="/:userId">
              <h1>User page</h1>
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
