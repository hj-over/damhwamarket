import React, { useState } from "react";
import MyPageOption from "../components/MyPageOption";
import OrderDtail from "../components/OrderDtail";
import UserInfo from "../components/UserInfo";

const MyPage = () => {
    const [pageToggle, setPageToggle] = useState(true);

    return (
        <div className="flex max-w-screen-xl mx-auto ">
            <MyPageOption changePage={setPageToggle} />
            {pageToggle && <UserInfo />}
            {pageToggle || <OrderDtail />}
        </div>
    );
};

export default MyPage;
