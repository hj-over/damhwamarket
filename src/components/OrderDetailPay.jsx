import React from "react";

const OrderDetailPay = ({ paymentOption }) => {
    const { optionName } = paymentOption;
    return (
        <li>
            <p className="w-full font-extrabold mt-2">
                선택옵션 : <span className="font-normal">{optionName}</span>
            </p>
        </li>
    );
};
export default OrderDetailPay;
