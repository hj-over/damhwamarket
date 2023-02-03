import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BasketCard from "../components/BasketCard";
import Spinner from "../components/Spinner";
import { useAuthContext } from "../context/AuthContext";

const Basket = () => {
  const { Authorization, user } = useAuthContext();
  const [selectIndex, setSelectIndex] = useState();
  const queryClinet = useQueryClient();
  const navigate = useNavigate();
  const { data: coupons } = useQuery(
    ["coupons", user && user.nickname],
    async () => {
      const header = {
        headers: {
          Authorization,
        },
      };
      return axios
        .get("http://192.168.0.203:8080/api/coupons", header)
        .then((res) => res.data.data);
    }
  );
  const {
    isLoading,
    error,
    data: carts,
  } = useQuery(["carts", user ? user.nickname : ""], async () => {
    return axios
      .get(`http://192.168.0.203:8080/api/carts`, {
        headers: { Authorization },
      })
      .then((res) => res.data.data)
      .catch((err) => console.log(err));
  });

  const handlePay = async () => {
    const body = {
      couponSeq: coupons ? coupons[selectIndex].couponSeq : null,
      point: 0,
    };
    const header = {
      headers: {
        Authorization,
      },
    };
    return axios
      .post("http://192.168.0.203:8080/api/carts/order", body, header)
      .then(() => alert("결제되었습니다."));
    // .then(() => navigate("/"));
  };
  const muHandlePay = useMutation(handlePay, {
    onSuccess: () => {
      navigate("/mypage");
      queryClinet.invalidateQueries(["carts", user && user.nickname]);
    },
  });

  const [totalPrice, setTotalPrice] = useState(0);
  const [cartsOrigin, setCartOrigin] = useState(carts);
  // 전체금액 다시 계산
  const updateCartCount = (_count, _seqId) => {
    const tempArr = [...cartsOrigin];
    tempArr.forEach((item) => {
      if (item.optionSeq === _seqId) {
        item.quantity = _count;
      }
    });
    setCartOrigin(tempArr);
  };
  // 삭제 실행후 다시 계산
  const deleteCartCount = (_seqId) => {
    // console.log("삭제", _seqId);
    const tempArr = [...cartsOrigin];
    let newArr = [];
    newArr = tempArr.filter((item) => item.optionSeq !== _seqId);
    setCartOrigin(newArr);
  };

  useEffect(() => {
    let totalMoney = 0;
    cartsOrigin.forEach((item) => {
      totalMoney += item.quantity * item.optionPrice;
    });
    setTotalPrice(totalMoney);
  }, [cartsOrigin]);
  // console.log(coupons);

  return (
    <div className="flex max-w-screen-xl mx-auto pb-40">
      <div className="pl-56 w-5/6 min-h-1/2 ">
        <div>
          <p className="text-4xl font-bold text-amber-400 py-14">장바구니</p>
          {isLoading && <Spinner />}
          {error && <p>에러났어요</p>}
          {carts &&
            carts.map((cart) => (
              <BasketCard
                key={cart.optionSeq}
                cart={cart}
                updateCartCount={updateCartCount}
                deleteCartCount={deleteCartCount}
                // totalPrice={totalPrice}
                // setTotalPrice={setTotalPrice}
              />
            ))}
          <div className="pt-9 flex gap-7 justify-end">
            <select
              className="w-32 h-11 border rounded-sm text-lg text-center focus:outline-none cursor-pointer"
              onChange={(e) =>
                setSelectIndex(e.currentTarget.selectedIndex - 1)
              }
            >
              <option>쿠폰선택</option>
              {coupons ? (
                coupons.map((coupon) => (
                  <option key={coupon.couponSeq}>{coupon.couName}</option>
                ))
              ) : (
                <option>없음</option>
              )}
            </select>
            {carts && (
              <div className="flex gap-8 h-11 items-center">
                <p className="text-center font-extrabold text-2xl">
                  총 가격 : {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  원
                </p>
                <button
                  onClick={muHandlePay.mutate}
                  className="h-full px-4 border rounded-sm text-lg text-center hover:bg-gray-100 transition ease-in"
                >
                  구매하기
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
