// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import api from './services/api'
// import hash from './services/hash'
function App() {
  // function handleButton(){
  //   fetch(api+'/characters'+hash).then(
  //     res => res.json()
  //   ).then(res => console.log(res.data.results))
  // }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/characters'>

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
