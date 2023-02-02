import React, { useState } from "react";
import MyPageOption from "../components/MyPageOption";
import OrderDetail from "../components/OrderDetail";
import UserInfo from "../components/UserInfo";

const MyPage = () => {
  const [pageToggle, setPageToggle] = useState(true);

  return (
    <div className="flex max-w-screen-xl mx-auto ">
      <MyPageOption changePage={setPageToggle} />
      {pageToggle && <UserInfo />}
      {pageToggle || <OrderDetail />}
    </div>
  );
};

export default MyPage;
