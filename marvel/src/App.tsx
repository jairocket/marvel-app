// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Characters from './pages/characters';
import  {LandingPage}  from './pages/LandingPage';
import  {CharactersDetails}  from './pages/CharactersDetails';
import { CharactersProvider } from './hooks/CharactersContext';

function App() {

  return (
    <CharactersProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path= "/characters/:id">
          <CharactersDetails/>         
        </Route>
        <Route exact path="/characters">
          <Characters/>
        </Route>
        <Route exact path ='/'>
          <LandingPage/>
        </Route>
        <Route exact path='/not-found' />
       
        <Redirect to='/not-found'/>
      </Switch>
    </BrowserRouter>
    </CharactersProvider>
  );
}

export default App;
