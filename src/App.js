import './App.css';
import {
BrowserRouter,
Switch,
Route
} from "react-router-dom";
import PutItIn from './components/PutItIn';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/'>
          <h1>Welcome</h1>
          </Route>
        <Switch>
          <Route exact path='/:input'>
            <PutItIn/>
          </Route>
          <Route exact path='/:input/:backColor'>
            <PutItIn/>
          </Route>
          <Route exact path='/:input/:backColor/:color'>
            <PutItIn/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
