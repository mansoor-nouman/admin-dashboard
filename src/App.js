import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar';
import Topbar from'./topbar';
import Dashboard from './dashboard';
import Listuser from './listUser';
import CreateUser from './createUser';
import EditUser from "./edituser";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
   <div id="wrapper">
          <Sidebar></Sidebar>
    <div id="content-wrapper" class="d-flex flex-column">
    <div id="content">
      <Topbar></Topbar>
      <div class="container-fluid">
      <Switch>
          <Route path="/" exact="true">
          <Dashboard></Dashboard>
          </Route>
          <Route path="/users" exact="true">
          <Listuser></Listuser>
          </Route>
          <Route path="/create-user" exact="true">
          <CreateUser></CreateUser>
          </Route>
          <Route path="/edit-user" exact="true">
          <EditUser></EditUser>
          </Route>
      </Switch>
      
      </div>
    </div>
    </div>
   </div>
   </Router>
  );
}

export default App;
