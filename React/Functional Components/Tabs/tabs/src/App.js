import './App.css';
import Tab from './components/Tab';
import styles from './tabs.module.css';

function App() {
  const tabs=[{"label":"Tab 1","content":"Tab 1 content is showing here"},
  {"label":"Tab 2","content":"Tab 2 content is showing here"},
  {"label":"Tab 3","content":"Tab 3 content is showing here"}];

  return (
    <div className={styles.myContainer}>
      <Tab allTabs={tabs}/>
    </div>
  );
}

export default App;
