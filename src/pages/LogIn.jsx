import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import LoginDiv from "../style/loginCss";

const LogIn = () => {
    const { setUser } = useAuthContext();
    const navigate = useNavigate();
    const [loginUser, setLoginUser] = useState({});
    const handelChange = (e) => {
        const { name, value } = e.target;
        setLoginUser({ ...loginUser, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {
            email: loginUser.email,
            pwd: loginUser.pwd,
        };
        axios
            .post("http://192.168.0.203:8080/api/users/login", body)
            .then((res) => setUser(res.data))
            .then(alert("로그인 성공"))
            .then(navigate("/"));
    };

    return (
        <div className="p-6 m-6">
            <LoginDiv>
                <h1>담화마켓</h1>
                <form onSubmit={handleSubmit}>
                    <label>이메일</label>
                    <input
                        type="email"
                        name="email"
                        value={loginUser.email || ""}
                        onChange={handelChange}
                        required
                    />
                    <label>비밀번호</label>
                    <input
                        type="password"
                        name="pwd"
                        value={loginUser.password}
                        onChange={handelChange}
                        required
                    />
                    <button>로그인</button>
                    <button
                        onClick={(event) => {
                            event.preventDefault();
                            navigate("/signup");
                        }}
                    >
                        회원가입
                    </button>
                    <Link>아이디/비밀번호 찾기</Link>
                </form>
            </LoginDiv>
        </div>
    );
};
export default LogIn;
