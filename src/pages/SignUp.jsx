import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpDiv from "../style/signUpCss";
const SignUp = () => {
  const navigate = useNavigate();
  const [signUpUser, setSignUpUser] = useState({});
  const handelChange = (e) => {
    const { name, value } = e.target;
    setSignUpUser({ ...signUpUser, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      name: signUpUser.name,
      email: signUpUser.email,
      pwd: signUpUser.pwd,
      nickname: signUpUser.nickname,
      birth: signUpUser.birth,
      phone: signUpUser.phone,
      address: signUpUser.address,
    };
    axios
      .post("http://192.168.0.203:8080/api/users/join", body)
      .then((res) => res.data)
      .then(navigate("/login"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="p-6 m-6">
      <SignUpDiv>
        <h1>회원가입</h1>
        <form onSubmit={handleSubmit}>
          <label>이름</label>
          <input
            type="text"
            name="name"
            value={signUpUser.name || ""}
            onChange={handelChange}
            required
          />
          <label>이메일</label>
          <input
            type="email"
            name="email"
            value={signUpUser.email || ""}
            onChange={handelChange}
            required
          />
          <label>비밀번호</label>
          <p className="text-sm">
            8~20자리 이상 &#40;영문+숫자+특수문자가 포함 되도록&#41; 작성해
            주십시오.
          </p>
          <input
            type="password"
            name="pwd"
            value={signUpUser.pwd || ""}
            onChange={handelChange}
            required
          />
          <label>닉네임</label>
          <input
            type="text"
            name="nickname"
            value={signUpUser.nickname || ""}
            onChange={handelChange}
            required
          />
          <label>생년월일</label>
          <input
            type="date"
            name="birth"
            value={signUpUser.birth || ""}
            onChange={handelChange}
            required
          />
          <label>휴대폰 번호</label>
          <input
            type="tel"
            name="phone"
            value={signUpUser.phone || ""}
            onChange={handelChange}
            required
          />
          <label>주소</label>
          <input
            type="local"
            name="address"
            value={signUpUser.address || ""}
            onChange={handelChange}
            required
          />
          <button>회원가입</button>
        </form>
      </SignUpDiv>
    </div>
  );
};
export default SignUp;
