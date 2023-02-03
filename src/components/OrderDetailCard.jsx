import React from "react";
import OrderDetailPay from "./OrderDetailPay";

const OrderDetailCard = ({ orderDetail }) => {
  const { finalPrice, originalPrice, orderDt, paymentOption } = orderDetail;
  console.log(paymentOption);
  return (
    <div className="flex border-3 border-red-200 p-6 rounded-xl mb-6">
      <img
        className="w-32 h-32"
        src="https://cdn.pixabay.com/photo/2022/12/26/11/44/squirrel-7678830_960_720.jpg"
        alt="상품이미지"
      />
      <div className="pl-4">
        <div className="flex pb-12">
          <p className="pr-12">{orderDt}</p>
        </div>
        <ul>
          {paymentOption.map((item) => (
            <OrderDetailPay key={item.seq} paymentOption={item} />
          ))}
        </ul>
        <div className="flex">
          <p className="font-extrabold">할인가격{finalPrice}</p>
          <p className="font-extrabold">정가격{originalPrice}</p>
        </div>
      </div>
    </div>
  );
};
export default OrderDetailCard;
