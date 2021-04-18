import React, { Component } from 'react';
import ExchangeResultPanel from './ExchangeResultPanel';
class ExchangeForm extends Component {
  state = {
    amount: '',
    fromCurrency: 'EUR',
    toCurrency: 'PLN',
    result: 0,
    currencies: [],
    ratio: 1,
  };

  fetchUrl = `https://api.nbp.pl/api/exchangerates/tables/a/last/`;

  componentDidMount() {
    const currencyTableApi = [];
    let currencyMap = [];

    fetch(this.fetchUrl)
      .then((result) => result.json())
      .then((response) => {
        for (const key in response[0].rates) {
          currencyTableApi.push(response[0].rates[key]);
          currencyMap = currencyTableApi.map((curr, index) => ({
            ...curr,
            index,
          }));
        }
        this.setState({ currencies: currencyMap });
      })
      .catch((err) => console.log(err));
  }

  handleSelectCurrency = (e) => {
    this.setState({
      fromCurrency: e.target.value,
    });
  };

  handleConvertExchange = (e) => {
    e.preventDefault();

    const ratio = this.state.currencies.find(
      (elem) => elem.code === this.state.fromCurrency,
    );

    this.setState({
      result: this.state.amount * ratio.mid,
      amount: 0,
    });
  };

  render() {
    return (
      <>
        <div className="forms">
          <p className="error-message"></p>
          <form className="amount-input">
            <input
              type="number"
              placeholder="Amount to convert"
              id="amount-value"
              value={this.state.amount}
              onChange={(e) => this.setState({ amount: e.target.value })}
            ></input>
            <select
              name="amount-from"
              id="amount-code"
              value={this.state.fromCurrency}
              onChange={(e) => this.handleSelectCurrency(e)}
            >
              {this.state.currencies.map((curr) => (
                <option key={curr.index}>{curr.code}</option>
              ))}
            </select>
            {this.state.fromCurrency ? (
              <button
                id="btnCount"
                type="submit"
                onClick={this.handleConvertExchange}
              >
                Count
              </button>
            ) : null}
          </form>
        </div>
        <div className="output">
          <div className="rate">-</div>
          <div className="exchangeResult">{this.state.result.toFixed(2)}</div>
          <p>PLN</p>
        </div>
      </>
    );
  }
}

export default ExchangeForm;
