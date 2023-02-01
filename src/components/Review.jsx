import React from "react";

const Review = ({
  review: { nickname, grade, content, regDt, optionName },
}) => {
  return (
    <li>
      <div className="flex justify-between bg-slate-100 rounded-lg py-3 px-6">
        {nickname}
        <div className="flex justify-between w-filterwidth">
          <span>
            {optionName.length < 15
              ? optionName
              : optionName.slice(0, 15) + "..."}
          </span>
          <span>{grade}</span>
          <span>{new Intl.DateTimeFormat("kr").format(new Date(regDt))}</span>
        </div>
      </div>
      <div className="py-6 px-7 mb-6 text-left">{content}</div>
    </li>
  );
};

export default Review;
