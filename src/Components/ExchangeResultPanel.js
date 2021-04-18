const ExchangeResultPanel = ({ result, ratio, currency }) => {
  return (
    <div className="output">
      <div className="rate">
        {result > 0 ? `1 ${currency} = ${ratio.toFixed(2)} PLN` : `------`}
      </div>
      <div className="exchangeResult">{result.toFixed(2)}</div>
      <p>PLN</p>
    </div>
  );
};

export default ExchangeResultPanel;
