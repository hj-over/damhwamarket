import React from "react";

const Members = () => {
  return (
    <div className="max-w-screen-xl mx-auto ">
      <p className="text-center text-5xl font-extrabold text-amber-400 py-20 pl-20 uppercase">
        Members
      </p>
      <div className="ml-20 mt-2">
        <h2 className="text-3xl font-extrabold my-8 text-sky-400 uppercase">
          Front&#09;&#124;
        </h2>
        <div className="flex gap-x-24 text-lg font-semibold">
          <p className="text-center">
            <img
              className="h-48 w-48 rounded-full mb-3 drop-shadow-lg"
              src={require("../banner/members/cute.jpg")}
              alt="f-1"
            />
            박시은
            <br />
            pmj8856@naver.com
          </p>
          <p className="text-center">
            <img
              className="h-48 w-48 rounded-full mb-3 drop-shadow-lg"
              src={require("../banner/members/cryingcat.jpg")}
              alt="f-2"
            />
            조승현
            <br />
            8571053@naver.com
          </p>
          <p className="text-center">
            <img
              className="h-48 w-48 rounded-full mb-3 drop-shadow-lg"
              src={require("../banner/members/catsmile.png")}
              alt="f-3"
            />
            <span className="mr-5">이효정</span>
            <br />
            dhfldhs0707@gmail.com
          </p>
        </div>
        <p className="mt-24 border-2 border-sky-100"></p>
        <h2 className="text-3xl font-extrabold pt-16 my-8 text-sky-400 uppercase">
          Back&#09;&#124;
        </h2>
        <div className="flex gap-x-28 justify-center text-lg font-semibold mb-10">
          <p className="text-center">
            <img
              className="h-48 w-48 rounded-full mb-3 drop-shadow-lg "
              src={require("../banner/members/puppy.jpg")}
              alt="b-1"
            />
            이영준
            <br />
            206freeguy@gmail.com
          </p>
          <p className="text-center">
            <img
              className="h-48 w-48 rounded-full mb-3 drop-shadow-lg"
              src={require("../banner/members/cuty.jpg")}
              alt="b-2"
            />
            <span className="mr-14">우현주</span>
            <br />
            woohyeonju507@gmail.com
          </p>
          <p className="text-center">
            <img
              className="h-48 w-48 rounded-full mb-3 drop-shadow-lg"
              src={require("../banner/members/wang.jpg")}
              alt="b-3"
            />
            남현우
            <br />
            zaxz1729@gmail.com
          </p>
          <p className="text-center">
            <img
              className="h-48 w-48 rounded-full mb-3 drop-shadow-lg"
              src={require("../banner/members/wavewang.png")}
              alt="b-4"
            />
            권영장
            <br />
            brachiokwon@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Members;
