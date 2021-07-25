import './App.css';
import Form from './components/Form';
import Root from './components/Root';
import {Router} from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <Root path="/"/>
        <Form path="/:by/:id"/>
      </Router>
    </div>
  );
}

export default App;
