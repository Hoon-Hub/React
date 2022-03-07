import React from "react";
import CurrencyFormat from "react-currency-format";
import "./SumTotal.css";
const SumTotal = () => {
  return (
    <div className="sumtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              총액 ( 0 items ) : <strong>0원</strong>
            </p>
            <small className="sumtotal_gift">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">체크박스</label>
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        suffix={"원"}
      />
      <button>결제하기</button>
    </div>
  );
};

export default SumTotal;
