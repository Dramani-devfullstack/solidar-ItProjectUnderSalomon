import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './HeaderComponent/Header';
import './App.css';
import Content from './ContentComponent/Content';
import Login from './LoginPage/Login'
import About from './AboutUser/About'
function App() {
  return (
    <div className="App">
      <Header /> 
      <Content/>
       {/* <Login/>
      <About/> */}
    </div>
  );
}


export default App;
