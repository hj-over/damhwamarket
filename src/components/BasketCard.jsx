import axios from "axios";
import React from "react";
import { useAuthContext } from "../context/AuthContext";

const BasketCard = ({ cart }) => {
  console.log(cart);
  const { productName, optionSeq, optionName, quantity } = cart;
  const { Authorization } = useAuthContext();

  const handlePlus = (e) => {
    e.preventDefault();
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
  const handleMinus = (e) => {
    e.preventDefault();
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

  const handleDelete = (e) => {
    e.preventDefault();

    const header = {
      headers: {
        Authorization,
      },
    };
    axios
      .delete(`http://192.168.0.203:8080/api/carts?seq=${optionSeq}`, header)
      .then(() => console.log("삭제"));
  };

  return (
    <div className="flex flex-col max-h-screen ">
      <div>
        <div className="flex w-full border-3 border-red-200 p-6 rounded-xl mb-6">
          <img
            className="w-32 h-32"
            src="https://cdn.pixabay.com/photo/2022/12/26/11/44/squirrel-7678830_960_720.jpg"
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
              수량: {quantity}개 / 36,900 원
            </p>
            <div className="flex items-center justify-center w-full h-11 mb-6 border rounded-sm text-xs font-extrabold text-center leading-44">
              <div className="flex w-full items-center justify-center">
                <img
                  src="/images/icon-minus.png"
                  alt="마이너스"
                  className="w-6 h-6 cursor-pointer"
                  onClick={handleMinus}
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
                  onClick={handlePlus}
                />
              </div>
            </div>
            <button className="border" onClick={handleDelete}>
              삭제버튼
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
