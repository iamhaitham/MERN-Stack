import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import SubContents from './Components/SubContents';
import Advertisement from './Components/Advertisement';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="MainNavigationContainer">
        <Navigation />
        <Main>
          <div className="SubContentsContainer">
            <SubContents />
            <SubContents />
            <SubContents />
          </div>
            <Advertisement />
        </Main>
        </div>
    </div>
  );
}

export default App;
