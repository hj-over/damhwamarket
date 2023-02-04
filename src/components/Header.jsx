import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { BsPersonCircle } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useCarts from "../hooks/useCarts";
const Header = () => {
    const { Authorization, user, setUser } = useAuthContext();
    const [text, setText] = useState("");
    const navigate = useNavigate();
    const handleChange = (e) => {
        setText(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`listing/${text}`);
        setText("");
    };

    const handleLogout = () => {
        const body = {};
        const header = {
            headers: {
                Authorization,
            },
        };
        axios
            .post(`http://192.168.0.203:8080/api/users/logout`, body, header)
            .then(() => setUser())
            .catch(() => console.log("로그아웃실패"));
    };

    // 비로그인시 비활성화
    const {
        cartsQuery: { data: carts },
    } = useCarts();

    return (
        <div className="border-b-2">
            <div className="flex justify-between items-center mt-5 py-2 max-w-7xl mx-auto ">
                <Link to="/" className="flex items-center mb-5">
                    <img
                        className="w-24 h-8 mr-2"
                        src="/images/main-logo.png"
                        alt="로고"
                    />
                    <h1 className="text-2xl">담화마켓</h1>
                </Link>
                <div className="flex items-center w-1/2 relative mb-5">
                    <form className="w-full" onSubmit={handleSubmit}>
                        <input
                            className="w-full h-8 pl-3 bg-slate-200 rounded focus:outline-none"
                            type="text"
                            value={text}
                            onChange={handleChange}
                        />
                        <GoSearch className="absolute right-10 top-2" />
                    </form>
                </div>
                <div className="relative flex items-center mb-5">
                    {user === undefined && (
                        <Link to="/login" className="mr-11 text-fs18">
                            로그인
                        </Link>
                    )}
                    {user === undefined && (
                        <Link to="/signup" className="mr-14 text-fs18">
                            회원가입
                        </Link>
                    )}
                    {user && (
                        <button
                            className="mr-5 text-fs18"
                            onClick={() => {
                                handleLogout();
                                navigate("/login");
                            }}
                        >
                            로그아웃
                        </button>
                    )}
                    {user && (
                        <Link to="/basket">
                            <img
                                className="relative w-10 h-10 mr-5"
                                src="/images/basketIcon.png"
                                alt="바구니"
                            />
                        </Link>
                    )}
                    {user && carts && (
                        <Link to="/basket">
                            <div className="absolute left-107px -top-1 w-7 h-7 bg-red-400 rounded-full text-center align-middle text-white font-extrabold text-sm pt-1">
                                {carts.length}
                            </div>
                        </Link>
                    )}
                    {user && (
                        <Link to="/mypage">
                            <div className="grid grid-cols-2">
                                <BsPersonCircle className="w-full h-8" />
                                {user && (
                                    <p className="w-full h-8 pt-1 ml-1 text-fs18">
                                        {user.nickname}
                                    </p>
                                )}
                            </div>
                        </Link>
                    )}
                    <Link
                        to="/members"
                        className="ml-2 text-xl text-center rounded-md h-7 w-32 hover:bg-amber-300 hover:text-white "
                    >
                        {" "}
                        MEMBERS
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Header;
