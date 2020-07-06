import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link, Redirect, Switch } from "react-router-dom";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Error = () => <div>Error: Invalid User</div>;

const Users = ({ match }) => {
  var validUsers = ["abc", "def"];
  if (!validUsers.includes(match.params.id)) return <Redirect to="/error" />;
  else return <div>Welcome: {match.params.id}</div>;
};
const DefaultRoute = () => <div>Default Route</div>;

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users/abc">Users: abc</Link>
        </li>
        <li>
          <Link to="/users/invalid user">Users: invalid user</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/users/:id" component={Users} />
        <Route path="/error" component={Error} />
        <Route component={DefaultRoute} />
      </Switch>
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));
