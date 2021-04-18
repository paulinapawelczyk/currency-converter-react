import React, { Component } from 'react';

class ExchangeForm extends Component {
  render() {
    return (
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
    );
  }
}

export default ExchangeForm;
