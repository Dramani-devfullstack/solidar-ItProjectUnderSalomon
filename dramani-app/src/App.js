import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Content from './ContentComponent/Content';
import Login from './LoginPage/Login'
import About from './AboutUser/About'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Router>
        <Switch>
          <Route path="/" exact component={Content} />
          <Route path="/login" exact component={Login} />
          <Route path="/about" exact component={About} />
        </Switch>
    </Router>
     
    </div>
  );
}


export default App;
