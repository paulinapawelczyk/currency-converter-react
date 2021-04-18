import './reset.css';
import './App.css';
import logo from './assets/logo.jpg';

function App() {
  return (
    <div className="container">
      <div className="app">
        <div className="header">
          <h1>Currency converter</h1>
        </div>
        <div className="logo">
          <img src={logo} alt="Converter logo"></img>
        </div>
        <div className="forms">
          <p className="error-message"></p>
          <form className="amount-input">
            <input
              type="number"
              placeholder="Amount to convert"
              id="amount-value"
            ></input>
            <select name="amount-from" id="amount-code">
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
              <option value="CHF">CHF</option>
            </select>
            <button id="btnCount" type="submit">
              Count
            </button>
          </form>
        </div>
        <div className="output">
          <div className="rate">------</div>
          <div className="exchangeResult">0</div>
          <p>PLN</p>
        </div>
      </div>
    </div>
  );
}

export default App;
