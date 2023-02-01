import React from "react";

const UserInfo = () => {
  return (
    <div className="pl-56 w-5/6 min-h-1/2">
      <p className="text-4xl font-bold text-amber-400  py-14">회원정보</p>

      <div className="flex flex-col border-2 rounded-md p-8">
        <div className="my-4 flex justify-center">
          <label className="w-28 font-semibold">이메일</label>
          <input className="bg-slate-200 rounded shadow-inner" type="email" />
        </div>
        <div className="my-4 flex justify-center">
          <label className="w-28 font-semibold">비밀번호</label>
          <input className="bg-slate-200 rounded shadow-inner" type="text" />
        </div>
        <div className="my-4 flex justify-center">
          <label className="w-28 font-semibold">비밀번호 확인</label>
          <input className="bg-slate-200 rounded shadow-inner" type="text" />
        </div>
        <div className="my-4 flex justify-center">
          <label className="w-28 font-semibold">이름</label>
          <input className="bg-slate-200 rounded shadow-inner" type="text" />
        </div>
        <div className="my-4 flex justify-center">
          <label className="w-28 font-semibold">닉네임</label>
          <input className="bg-slate-200 rounded shadow-inner" type="text" />
        </div>
        <div className="my-4 flex justify-center">
          <label className="w-28 font-semibold">주소</label>
          <input className="bg-slate-200 rounded shadow-inner" type="text" />
        </div>
        <div className="my-4 flex justify-center">
          <label className="w-28 font-semibold">휴대폰</label>
          <input className="bg-slate-200 rounded shadow-inner" type="tel" />
        </div>
        <div className="my-4 flex justify-center">
          <label className="w-28 font-semibold">쿠폰</label>
          <input className="bg-slate-200 rounded shadow-inner" type="text" />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
