import React from "react";
import OrderDetailPay from "./OrderDetailPay";

const OrderDetailCard = ({ orderDetail }) => {
    const { finalPrice, originalPrice, orderDt, paymentOption } = orderDetail;
    // console.log(paymentOption);
    return (
        <div className="flex   border-3 border-red-200 p-6 rounded-xl mb-6">
            <div>
                <img
                    className="w-32 h-32  ml-4 mb-2"
                    src="https://cdn.pixabay.com/photo/2022/12/26/11/44/squirrel-7678830_960_720.jpg"
                    alt="상품이미지"
                />
                <p>{orderDt}</p>
            </div>

            <div className="pl-4 flex ">
                <div className="my-auto ">
                    <ul>
                        {paymentOption.map((item) => (
                            <OrderDetailPay
                                key={item.seq}
                                paymentOption={item}
                            />
                        ))}
                    </ul>
                    <div className="">
                        <p className="font-extrabold mt-2">{`정가 : ${originalPrice}`}</p>
                        <p className="font-extrabold mt-2 pr-6 text-red-400">{`할인가격 : ${finalPrice}`}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default OrderDetailCard;
