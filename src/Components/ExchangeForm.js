import React, { Component } from 'react';
import ExchangeResultPanel from './ExchangeResultPanel';
class ExchangeForm extends Component {
  state = {
    amount: '',
    fromCurrency: 'EUR',
    toCurrency: 'PLN',
    result: 0,
    currencies: [],
    ratio: 0,
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
      ratio: 0,
    });
  };

  handleConvertExchange = (e) => {
    const { currencies, amount, fromCurrency } = this.state;
    e.preventDefault();

    const ratio = currencies.find((elem) => elem.code === fromCurrency);

    this.setState({
      result: amount * ratio.mid,
      ratio: ratio.mid,
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
            {this.state.amount >= 0 ? (
              <button
                id="btnCount"
                type="submit"
                onClick={this.handleConvertExchange}
              >
                Count
              </button>
            ) : (
              `Value shouldn't be negative!`
            )}
          </form>
        </div>
        <ExchangeResultPanel
          result={this.state.result}
          ratio={this.state.ratio}
          currency={this.state.fromCurrency}
        />
      </>
    );
  }
}

export default ExchangeForm;
