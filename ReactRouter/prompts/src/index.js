import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link, Prompt } from "react-router-dom";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Users = ({ match }) => <div>{match.url}</div>;

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
          <Link to="/users">Users</Link>
        </li>
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/users/:id" component={Users} />
      <Prompt message="Are you sure you want to leave?" />
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));
