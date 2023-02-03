import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import OrderDetailCard from "./OrderDetailCard";

const OrderDetail = () => {
    const navigate = useNavigate();
    const { Authorization, user } = useAuthContext();
    const { data: orderDetails } = useQuery(
        ["orderDetail", user && user.nickname],
        async () => {
            const header = {
                headers: {
                    Authorization,
                },
            };
            return axios
                .get("http://192.168.0.203:8080/api/paymentInfo", header)
                .then((res) => res.data.payList);
        }
    );
    // console.log(orderDetails);
    return (
        <div className="pl-56 w-5/6 min-h-1/2 ">
            <p className="text-4xl font-bold text-amber-400 py-14">주문내역</p>
            <div className="flex flex-col max-h-screen ">
                <div>
                    {orderDetails &&
                        orderDetails.map((orderDetail) => (
                            <OrderDetailCard
                                orderDetail={orderDetail}
                                key={orderDetail.seq}
                            />
                        ))}
                    <div className="border-dotted border-3 rounded-xl p-6 border-red-200 mt-10 text-center ">
                        <p className="pb-10 text-2xl text-center">
                            담화를 나누러 가요 -.{"<"}
                        </p>
                        <button
                            onClick={() => navigate("/")}
                            className="bg-pink-300 rounded text-white text-lg font-md px-8 py-4 hover:bg-pink-400 cursor-pointer"
                        >
                            둘러보기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default OrderDetail;
