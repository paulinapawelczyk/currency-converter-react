import './reset.css';
import './App.css';
import logo from './assets/logo.jpg';
import ExchangeForm from './Components/ExchangeForm';
import ExchangeResultPanel from './Components/ExchangeResultPanel';

function App() {
  return (
    <div className="container">
      <div className="app">
        <h1 className="header">Currency converter</h1>
        <div className="logo">
          <img className="logo" src={logo} alt="Converter logo"></img>
        </div>
        <ExchangeForm />
        <ExchangeResultPanel />
      </div>
    </div>
  );
}

export default App;
