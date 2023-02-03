import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useAuthContext } from "../context/AuthContext";

const BasketCard = ({ cart, updateCartCount, deleteCartCount }) => {
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

  const handlePlus = async () => {
    const quantity = ++cart.quantity;
    // console.log("더하기");
    updateCartCount(quantity, cart.optionSeq);
    const body = {
      optionSeq,
      quantity,
    };
    const header = {
      headers: {
        Authorization,
      },
    };
    return axios
      .put("http://192.168.0.203:8080/api/carts", body, header)
      .then(() => {
        // console.log("더하기 : ", quantity, "옵션 구별 : ", optionSeq);
      });
  };

  const muHandlePlus = useMutation(() => handlePlus(), {
    onSuccess: () => {
      queryClinet.invalidateQueries(["carts", user && user.nickname]);
    },
  });

  const handleMinus = async () => {
    if (cart.quantity <= 1) {
      return alert(
        "최소 1개 이상을 구매하셔야 합니다. \n구매를 원치 않는 경우 삭제 버튼을 눌러주세요."
      );
    }
    const quantity = --cart.quantity;
    // console.log("빼기");
    updateCartCount(quantity, cart.optionSeq);
    const body = {
      optionSeq,
      quantity,
    };
    const header = {
      headers: {
        Authorization,
      },
    };
    return axios
      .put("http://192.168.0.203:8080/api/carts", body, header)
      .then(() => {
        // console.log("빼기 : ", quantity, "옵션 구별 : ", optionSeq);
      });
  };

  const muHandleMinus = useMutation(handleMinus, {
    onSuccess: () => {
      queryClinet.invalidateQueries(["carts", user && user.nickname]);
    },
  });

  const handleDelete = async () => {
    // 삭제
    deleteCartCount(optionSeq);
    const header = {
      headers: {
        Authorization,
      },
    };
    return axios
      .delete(`http://192.168.0.203:8080/api/carts?seq=${optionSeq}`, header)
      .then(() => alert("삭제되었습니다."));
  };

  const muHandleDelete = useMutation(handleDelete, {
    onSuccess: () => {
      queryClinet.invalidateQueries(["carts", user && user.nickname]);
    },
  });

  return (
    <div className="flex flex-col max-h-screen ">
      <div>
        <div className="grid grid-cols-1 w-full border-3 border-red-200 p-6 rounded-xl mb-6">
          <div className="flex mb-5">
            <img
              className="w-32 h-32"
              src={`http://192.168.0.203:8080${thumbImg}`}
              alt="제품이미지"
            />
            <div className="pl-6 pt-3 text-lg">
              <div className="flex mb-3">
                <p className="pr-16 font-bold">제품</p>
                <p>{productName}</p>
              </div>
              <div className="flex mb-3">
                <p className="pr-6 font-bold">선택 옵션</p>
                <p>
                  {optionName} {/* {optionSeq}번 */}
                </p>
              </div>
              <div className="flex mb-3">
                <p className="pr-16 font-bold">가격</p>
                <p>
                  {optionPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  원
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-14 justify-end items-center mr-6">
            <p className="font-extrabold text-xl">
              수량: {quantity}개 / {quantity * optionPrice}원
            </p>

            <div className="flex items-center justify-center h-11 border rounded-sm text-xs font-extrabold text-center leading-44">
              <div className="flex justify-center w-16">
                <img
                  src={
                    quantity === 1
                      ? "/images/icon-minus.png"
                      : "/images/icon-minus-active.png"
                  }
                  alt="마이너스"
                  className="w-6 h-6 cursor-pointer"
                  onClick={muHandleMinus.mutate}
                />
              </div>

              <div className="w-20 h-full text-center border-x text-fs14 text-zinc-600 focus:outline-none">
                {quantity}
              </div>

              <div className="flex justify-center w-16">
                <img
                  src="/images/icon-plus.png"
                  alt="플러스"
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => muHandlePlus.mutate()}
                />
              </div>
            </div>
            <button
              className="w-16 h-10 border"
              onClick={muHandleDelete.mutate}
            >
              삭제
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
