import React from "react";

const OrderDetailPay = ({ paymentOption }) => {
  const { optionName, price } = paymentOption;
  return (
    <li>
      <p className="w-full">{`이름:${optionName} 가격:${price}`}</p>
    </li>
  );
};
export default OrderDetailPay;
