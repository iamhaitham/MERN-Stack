import './App.css';
import {Router} from '@reach/router';
import Root from '../src/views/Root';
import Create from '../src/views/Create';
import List from '../src/views/List';

function App() {
  return (
    <Router>
      <Root path="/"/>
      <Create path="/players/addplayer"/>
      <List path='/players/list'/>
    </Router>
  );
}

export default App;
