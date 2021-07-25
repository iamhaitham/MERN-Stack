import './App.css';
import {Router} from '@reach/router';
import Welcome from './components/Welcome';
import Variable from './components/Variable';

function App() {
  return (
    <div className="App">
      <Router>
          <Welcome path="/"/> 
          <Welcome path="/home"/> 
          <Variable path="/:variable"/>
          <Variable path="/:variable/:color1/:color2"/>
      </Router>
    </div>
  );
}

export default App;
