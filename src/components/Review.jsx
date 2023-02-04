import React from "react";
import ReviewGradeStar from "./ReviewGradeStar";

const Review = ({
  review: { nickname, grade, content, regDt, optionName },
}) => {
  // console.log(grade);
  return (
    <li>
      <div className="flex gap-4 py-10 px-6 border-b-2">
        <img
          src="/images/person.jpg"
          alt="유저사진"
          className="w-8 h-8 rounded-full"
        />
        <div className="flex flex-col items-start">
          <span className="mb-2">
            <ReviewGradeStar star={grade} size={18} />
          </span>
          <div className="flex gap-4 mb-1">
            <p>{nickname}</p>
            <span>{new Intl.DateTimeFormat("kr").format(new Date(regDt))}</span>
          </div>
          <span className="mb-9 font-bold">
            {optionName.length < 41
              ? optionName
              : optionName.slice(0, 41) + "..."}
          </span>
          <div className="text-left">{content}</div>
        </div>
      </div>
    </li>
  );
};

export default Review;
