import React from "react";

const Basket = () => {
  return (
    <div className="flex max-w-screen-xl mx-auto ">
      <div className="pl-56 w-5/6 min-h-1/2 ">
        <p className="text-4xl font-bold text-amber-400 py-14">장바구니</p>

        <div className="flex flex-col max-h-screen ">
          <div>
            <div className="flex border-3 border-red-200 p-6 rounded-xl mb-6">
              <img
                className="w-32 h-32"
                src="https://cdn.pixabay.com/photo/2022/12/26/11/44/squirrel-7678830_960_720.jpg"
                alt="z"
              />
              <div className="pl-14 pt-3 text-lg">
                <div className="flex mb-3">
                  <p className="pr-28 font-bold">제품</p>
                  <p>신년 다복 세트</p>
                </div>
                <div className="flex mb-3">
                  <p className="pr-20 font-bold">선택 옵션</p>
                  <p className="pr-80">다복세트 1</p>
                </div>
                <p className="font-extrabold text-right">
                  수량: 1개 / 36,900 원
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
