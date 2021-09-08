import logo from './logo.svg';
import './App.css';
// import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import api from './services/api'
import hash from './services/hash'
function App() {
  function handleButton(){
    fetch(api+'/characters'+hash).then(
      res => res.json()
    ).then(res => console.log(res.data.results))
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick ={handleButton}>Click me</button>
    </div>
  );
}

export default App;
