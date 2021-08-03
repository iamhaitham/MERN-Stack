import './App.css';
import Main from '../src/views/Main';
import Display from '../src/views/Display';
import {Router} from '@reach/router';
import Update from '../src/views/Update';

function App() {
  return (
    <div>
      <Router>
        <Display path="/"/>
        <Main path="/new"/>
        <Update path="/edit/:id"/>
      </Router>
    </div>
  );
}

export default App;
