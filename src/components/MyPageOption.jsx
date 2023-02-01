import React, { useState } from "react";

const MyPageOption = ({ changePage }) => {
  const handleChangeOrderDetail = () => {
    changePage(true);
    setActive(true);
  };
  const handleChangeUserInfo = () => {
    changePage(false);
    setActive(false);
  };
  const [active, setActive] = useState(true);
  return (
    <div className="flex flex-col justify-center self-center w-40 text-center absolute top-96 left-48 h-28 p-4 mr-4 bg-zinc-100  text-blue text-lg">
      <p
        onClick={handleChangeOrderDetail}
        className={
          active ? "pb-1 mb-2 border-b-3 border-blue font-bold" : "pb-1 mb-2"
        }
      >
        회원정보
      </p>
      <p
        onClick={handleChangeUserInfo}
        className={
          active ? "pb-1 mb-2" : "pb-1 mb-2 border-b-3 border-blue font-bold"
        }
      >
        주문내역
      </p>
    </div>
  );
};

export default MyPageOption;
