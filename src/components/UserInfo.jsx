import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import axios from "axios";
// import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import useMileage from "../hooks/useMileage";
import useCoupons from "../hooks/useCoupons";
import Spinner from "./Spinner";
import ErrorPage from "../pages/ErrorPage";
const UserInfo = () => {
    const { Authorization, setUser, user } = useAuthContext();
    const [loginUser, setLoginUser] = useState({});
    const navigate = useNavigate();
    const handelChange = (e) => {
        const { name, value } = e.target;
        setLoginUser({ ...loginUser, [name]: value });
    };
    const handleUpdate = async (e) => {
        e.preventDefault();
        const body = {
            pwd: loginUser.pwd,
            nickname: loginUser.nickname,
            address: loginUser.address,
        };
        const header = {
            headers: {
                Authorization,
            },
        };
        axios
            .put(
                "http://192.168.0.203:8080/api/users/login/update",
                body,
                header
            )
            .then((res) => console.log(res.data))
            .then(() => {
                const body = {};
                const header = {
                    headers: {
                        Authorization,
                    },
                };
                axios
                    .post(
                        `http://192.168.0.203:8080/api/users/logout`,
                        body,
                        header
                    )
                    .then(() => setUser());
            })
            .then(() => navigate("/login"))
            .catch((err) => console.log(err));
    };
    const {
        couponsQuery: { isLoading: couLoading, error: couError, data: coupons },
    } = useCoupons();
    // const { data: coupons } = useQuery(
    //     ["coupons", user && user.nickname],
    //     async () => {
    //         const header = {
    //             headers: {
    //                 Authorization,
    //             },
    //         };
    //         return axios
    //             .get("http://192.168.0.203:8080/api/coupons", header)
    //             .then((res) => res.data.data);
    //     }
    // );
    // console.log(coupons);
    const {
        mileageQuery: { isLoading, error, data: mileage },
    } = useMileage();
    // console.log(mileage);
    return (
        <>
            <div className="pl-56 w-5/6 min-h-1/2 mb-28">
                <p className="text-4xl font-bold text-amber-400 py-14 text-center">
                    회원정보 변경
                </p>
                <form
                    className="flex flex-col border-2 rounded-md p-8 text-center"
                    onSubmit={handleUpdate}
                >
                    <label className="w-full text-lg font-semibold text-center mb-3">
                        비밀번호
                    </label>
                    <input
                        className="bg-slate-100 rounded shadow-inner text-center h-10 mb-7"
                        name="pwd"
                        type="text"
                        onChange={handelChange}
                    />
                    <label className="w-full text-lg font-semibold text-center mb-3">
                        닉네임
                    </label>
                    <input
                        className="bg-slate-100 rounded shadow-inner text-center h-10 mb-7"
                        name="nickname"
                        type="text"
                        onChange={handelChange}
                    />
                    <label className="w-full text-lg font-semibold text-center mb-3">
                        주소
                    </label>
                    <input
                        className="bg-slate-100 rounded shadow-inner text-center h-10 mb-7"
                        name="address"
                        type="text"
                        onChange={handelChange}
                    />
                    <button className="border-2 border-indigo-400 bg-indigo-400 w-20 mx-auto text-center rounded text-white hover:bg-white hover:text-indigo-400 hover:border-2 ">
                        정보수정
                    </button>
                </form>
            </div>
            <div className="pl-56 w-5/6 min-h-1/2">
                <p className="text-4xl font-bold text-amber-400  py-14 text-center">
                    회원정보
                </p>
                <div className="flex flex-col border-2 rounded-md p-8">
                    <p className="w-full text-lg font-bold mb-3">
                        쿠폰&#32;&#32;&#124;
                    </p>
                    <ul>
                        {couLoading && <Spinner/>}
                        {couError && <ErrorPage/>}
                        {coupons &&
                            coupons.map((coupon) => (
                                <li key={coupon.couponSeq}>
                                    <p>{coupon.couName}</p>
                                </li>
                            ))}
                    </ul>
                    <p className="w-full text-lg font-bold my-3">
                        마일리지&#32;&#32;&#124;
                    </p>
                    <p>
                        {isLoading && <Spinner/>}
                        {error && <ErrorPage/>}
                        {mileage && mileage[0].mpPrice}
                    </p>
                </div>
            </div>
        </>
    );
};
export default UserInfo;
