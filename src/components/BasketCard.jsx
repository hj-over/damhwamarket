import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";

const BasketCard = ({ cart, setTotalPrice }) => {
  // console.log(cart);
  const {
    productName,
    optionSeq,
    optionName,
    quantity,
    thumbImg,
    optionPrice,
  } = cart;
  const { Authorization, user } = useAuthContext();
  const queryClinet = useQueryClient();

  const handlePlus = () => {
    const quantity = ++cart.quantity;
    const body = {
      optionSeq,
      quantity,
    };
    const header = {
      headers: {
        Authorization,
      },
    };
    axios
      .put("http://192.168.0.203:8080/api/carts", body, header)
      .then(() => console.log("더하기"));
  };

  const muHandlePlus = useMutation(() => handlePlus(), {
    onSuccess: () => {
      queryClinet.invalidateQueries(["carts", user && user.nickname]);
    },
  });

  const handleMinus = () => {
    const quantity = --cart.quantity;
    const body = {
      optionSeq,
      quantity,
    };
    const header = {
      headers: {
        Authorization,
      },
    };
    axios
      .put("http://192.168.0.203:8080/api/carts", body, header)
      .then(() => console.log("빼기"));
  };

  const muHandleMinus = useMutation(handleMinus, {
    onSuccess: () => {
      queryClinet.invalidateQueries(["carts", user && user.nickname]);
    },
  });

  const handleDelete = () => {
    const header = {
      headers: {
        Authorization,
      },
    };
    axios
      .delete(`http://192.168.0.203:8080/api/carts?seq=${optionSeq}`, header)
      .then(() => console.log("삭제"));
  };

  const muHandleDelete = useMutation(handleDelete, {
    onSuccess: () => {
      queryClinet.invalidateQueries(["carts", user && user.nickname]);
    },
  });

  // 장바구니 총 가격, 상위 컴포넌트 : Basket
  useEffect(() => {
    setTotalPrice((prev) => prev + quantity * optionPrice);
  }, [cart]);

  return (
    <div className="flex flex-col max-h-screen ">
      <div>
        <div className="flex w-full border-3 border-red-200 p-6 rounded-xl mb-6">
          <img
            className="w-32 h-32"
            src={`http://192.168.0.203:8080${thumbImg}`}
            alt="제품이미지"
          />
          <div className="pl-6 pt-3 text-lg">
            <div className="flex mb-3">
              <p className="pr-14 font-bold">제품</p>
              <p>{productName}</p>
            </div>
            <div className="flex mb-3">
              <p className="pr-4 font-bold">선택 옵션</p>
              <p>
                {optionName}
                {optionSeq}번
              </p>
            </div>
            <p className="font-extrabold text-right">
              수량: {quantity}개 / {quantity * optionPrice}원
            </p>
            <div className="flex items-center justify-center w-full h-11 mb-6 border rounded-sm text-xs font-extrabold text-center leading-44">
              <div className="flex w-full items-center justify-center">
                <img
                  src="/images/icon-minus.png"
                  alt="마이너스"
                  className="w-6 h-6 cursor-pointer"
                  onClick={muHandleMinus.mutate}
                />
              </div>

              <div className="w-full h-full text-center pl-7 pr-7 border-x text-fs14 text-zinc-600 focus:outline-none">
                {quantity}
              </div>

              <div className="flex w-full items-center justify-center">
                <img
                  src="/images/icon-plus.png"
                  alt="플러스"
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => muHandlePlus.mutate()}
                />
              </div>
            </div>
            <button className="border" onClick={muHandleDelete.mutate}>
              삭제버튼
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
