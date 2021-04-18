import React, { Component } from 'react';
import ExchangeResultPanel from './ExchangeResultPanel';
class ExchangeForm extends Component {
  state = {
    amount: 0,
    fromCurrency: '',
    toCurrency: 'PLN',
    currencies: [],
    result: 0,
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
        console.log(currencyMap);
      })
      .catch((err) => console.log(err));
  }

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
            <button id="btnCount" type="submit">
              Count
            </button>
          </form>
        </div>
        <ExchangeResultPanel />
      </>
    );
  }
}

export default ExchangeForm;
