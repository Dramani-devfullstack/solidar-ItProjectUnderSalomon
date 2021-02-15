import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './HeaderComponent/Header';
import './App.css';
import Content from './ContentComponent/Content';
import Login from './LoginPage/Login'
import About from './AboutUser/About'
import Suscribe from './Suscribe/Suscribe'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Router>
        {/* <Header/>  */}
        <Switch>
          <Route path="/" exact component={Header} />
          <Route path="/content" component={Content} />
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/suscribe" component={Suscribe} />
        </Switch>
        
    </Router>
     
    </div>
  );
}


export default App;
