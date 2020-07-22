import React from 'react';
import './App.css';

import { Provider } from "react-redux";
import store from "./store"

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

class App extends Component {
  rendeR() {
    return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing}/>
          <Route exact path="/register" compnent={Register} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    </Provider>
    );
  }
}

export default App;
