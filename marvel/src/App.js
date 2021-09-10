// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Characters from './pages/characters';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/characters">
          <Characters/>
        </Route>
        <Route exact path ='/'>

        </Route>
        <Route exact path='/not-found' />
       
        <Redirect to='/not-found'/>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
