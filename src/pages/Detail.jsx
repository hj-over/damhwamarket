import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Review from "../components/Review";
import Spinner from "../components/Spinner";

const Detail = () => {
  const [isShown, setIsShown] = useState(true);
  const [x, setX] = useState(1);

  const { productId } = useParams();
  // console.log(productId);
  const {
    isLoading,
    error,
    data: productDetail,
  } = useQuery(["products", "detail"], async () => {
    return axios
      .get(`http://192.168.0.203:8080/api/products/${productId}`)
      .then((res) => res.data.data)
      .catch((err) => console.log(err));
  });
  const { data: reviews } = useQuery(["products", "review"], async () => {
    return axios
      .get(`http://192.168.0.203:8080/api/reviews/${productId}`)
      .then((res) => res.data.data)
      .catch((err) => console.log(err));
  });
  // console.log(reviews);
  // console.log(productDetail);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  const handlePlus = () => setX(x + 1);
  const handleMinus = () => {
    if (x === 1) return;
    setX(x - 1);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      {error && <p>에러났어요</p>}
      {productDetail && (
        <div className="max-w-7xl pt-5 px-28 pb-64 m-auto text-center">
          <div className="w-leftwidth">
            <div className="flex gap-6 mb-24">
              <img
                className="w-72 h-96"
                src={`http://192.168.0.203:8080${productDetail.thumbImg}`}
                alt="상품이미지"
              />
              <div className="text-start">
                <p className="text-2xl font-extrabold text-zinc-600 mb-2">
                  {productDetail.productName}
                </p>
                <p className="font-extrabold text-zinc-400 mb-2">
                  {productDetail.subName}
                </p>
                <p className="mb-8">별점</p>
                <p className="text-sm font-extrabold text-zinc-600 mb-2">
                  주종: {productDetail.type}
                </p>
                <p className="text-sm font-extrabold text-zinc-600 mb-2">
                  도수: {productDetail.level.toFixed(2)}%
                </p>
                <p className="text-sm font-extrabold text-zinc-600 mb-2">
                  용량:{" "}
                  {productDetail &&
                    productDetail.options.map((option) => {
                      return option.name.length;
                    })}
                </p>
                <p className="text-sm font-extrabold text-zinc-400 mb-8">
                  배송기간: 2일 이내 배송
                </p>
                <p className="text-sm font-extrabold text-zinc-600 mb-2">
                  판매가격:
                </p>
                <p className="text-3xl font-extrabold text-zinc-600 mb-2">
                  {productDetail.options[0].price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  원
                </p>
                <p className="text-sm font-extrabold text-blue mb-2">
                  유통기한: 제품상세정보참조
                </p>
                <p className="text-sm font-extrabold text-blue mb-2">
                  보관방법: 제품상세정보참조
                </p>
              </div>
            </div>
            <div>
              <img
                className="w-full h-full mb-12"
                src={`http://192.168.0.203:8080${productDetail.detailImg}`}
                alt=""
              />
              <p className="mb-24 text-left">{productDetail.detailContent}</p>
            </div>
            <div className="flex">
              <button className="w-20 h-7 mb-9 text-xs text-white bg-blue rounded-lg">
                리뷰
              </button>
            </div>
            <ul>
              {reviews &&
                reviews.map((review, i) => <Review key={i} review={review} />)}
            </ul>
          </div>

          <div className="fixed right-1/4 top-28 w-rightwidth">
            <div
              className="flex flex-col py-7 px-2.5 items-start w-full border shadow-lg rounded-lg"
              style={{ height: isShown ? "585px" : "543px" }}
            >
              <label className="mb-2.5 text-fs15 font-extrabold">옵션</label>
              <select
                className="mb-6 w-full h-11 pr border rounded-sm text-xs text-center focus:outline-none"
                onChange={(e) => console.log(e.target.value)}
              >
                <option className="text-sm">어떤 옵션을 원하시나요?</option>
                {productDetail.options.map((option) => (
                  <option>{option.name}</option>
                ))}
              </select>

              <label className="mb-3 text-fs15 font-extrabold">수량</label>
              <div className="flex items-center justify-center w-full h-11 mb-6 border rounded-sm text-xs font-extrabold text-center leading-44">
                <div className="flex w-full items-center justify-center">
                  <img
                    src="/images/icon-minus.png"
                    alt="마이너스"
                    className="w-6 h-6 cursor-pointer"
                    onClick={handleMinus}
                  />
                </div>

                <input
                  value={x}
                  type="text"
                  className="w-full h-full text-center pl-7 pr-7 border-x text-sm text-zinc-600 focus:outline-none"
                />

                <div className="flex w-full items-center justify-center">
                  <img
                    src="/images/icon-plus.png"
                    alt="플러스"
                    className="w-6 h-6 cursor-pointer"
                    onClick={handlePlus}
                  />
                </div>
              </div>

              <label className="mb-3 text-fs15 font-extrabold">
                총 상품가격
              </label>
              <span className="w-full h-11 mb-6 border rounded-sm text-xs font-extrabold text-center leading-44">
                {productDetail.options[0].price *
                  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                원
              </span>

              <div
                className="flex gap-3 p-2 w-full h-12 rounded-sm bg-gray-100"
                style={{ marginBottom: isShown ? "62px" : "20px" }}
              >
                <img
                  src="/images/icon-truck.png"
                  alt="트럭"
                  className="w-5 h-4"
                />
                <div className="text-left text-xs font-extrabold text-zinc-500">
                  <p>(전국택배) 3,000원</p>
                  <p>(제주도 및 도서산간) 3,000원</p>
                </div>
              </div>

              <div className="flex mb-3">
                <button className="flex mr-2 items-center justify-center w-buttonwidth h-12 border-slate-300 border rounded-md text-lg font-extrabold text-zinc-600 text-center hover:bg-gray-100 transition ease-in">
                  <img
                    src="/images/icon-cart.png"
                    alt="장바구니"
                    className="w-6 h-6"
                  />
                  <p>장바구니</p>
                </button>

                <div className="relative">
                  <div
                    className="absolute right-0 -top-12 w-32 h-11 py-3 px-2 bg-gift-bg bg-contain bg-no-repeat"
                    style={{ display: isShown ? "block" : "none" }}
                  >
                    <p className="text-fs11 text-left font-extrabold text-zinc-500">
                      여러 명도 가능해요
                    </p>
                    <img
                      src="/images/tooltip-close.png"
                      alt="닫기"
                      className="absolute right-4 top-4 w-2 h-2 cursor-pointer"
                      onClick={handleClick}
                    />
                  </div>
                  <button className="flex items-center justify-center w-buttonwidth h-12 border-slate-300 border rounded-md text-lg font-extrabold text-zinc-600 text-center hover:bg-gray-100 transition ease-in">
                    <img
                      src="/images/icon-gift-box.png"
                      alt="선물하기"
                      className="w-6 h-6"
                    />
                    <p>선물하기</p>
                  </button>
                </div>
              </div>
              <button className="w-full h-12 text-center text-lg font-extrabold text-white bg-blue rounded-md hover:bg-sky-600 transition ease-in">
                바로구매하기
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
