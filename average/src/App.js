import logo from './logo.svg';
import './App.css';
import AverageNumber from './components/AverageNumber';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width={100} />
        <AverageNumber />
      </header>
    </div>
  );
}

export default App;
