import React from "react";

const OrderDetailCard = ({ orderDetail }) => {
  console.log(orderDetail);
  const { finalPrice, originalPrice, orderDt } = orderDetail;
  return (
    <div className="flex border-3 border-red-200 p-6 rounded-xl mb-6">
      <img
        className="w-32 h-32"
        src="https://cdn.pixabay.com/photo/2022/12/26/11/44/squirrel-7678830_960_720.jpg"
        alt="z"
      />
      <div className="pl-4">
        <div className="flex pb-12">
          <p className="pr-12">{orderDt}</p>
          <p className="font-bold underline underline-offset-4">배송중</p>
        </div>
        <div className="flex">
          <p className="pr-28 font-bold">제품</p>
          <p>신년 다복 세트</p>
        </div>
        <div className="flex">
          <p className="pr-20 font-bold">선택 옵션</p>
          <p className="pr-80">다복세트 1</p>
          <p className="font-extrabold">할인가격{finalPrice}</p>
          <p className="font-extrabold">정가격{originalPrice}</p>
        </div>
      </div>
    </div>
  );
};
export default OrderDetailCard;
