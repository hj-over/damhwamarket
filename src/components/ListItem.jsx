import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({
  item: {
    productSeq,
    thumbImg,
    productName,
    mainPrice,
    reviewGrade,
    reviewNumber,
    subName,
  },
}) => {
  return (
    <div className="mt-6 mb-14 w-imgwidth">
      <Link to={`/detail/${productSeq}`}>
        <div className="rounded-lg overflow-hidden">
          <img
            className="w-imgwidth rounded-lg hover:scale-110 ease-in duration-300"
            src={`http://192.168.0.203:8080${thumbImg}`}
            alt="상품이미지"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-neutral-700 font-extrabold mt-3 mb-3">
            {productName}
          </span>
          <span className="text-neutral-700 font-extrabold mb-2">
            {mainPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
          </span>
          <div className="flex items-center mb-2">
            <img className="w-3 h-3 mr-1" src="/images/star.png" alt="별" />
            <span className="text-neutral-700 font-extrabold text-sm mr-2">
              {reviewGrade ? reviewGrade.toFixed(1) : 0}
            </span>
            <span className="text-neutral-700 font-bold text-sm border-l pl-2">
              리뷰 {reviewNumber}
            </span>
          </div>
          <span className="text-neutral-700 text-sm border-t pt-2">
            #{subName}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ListItem;
