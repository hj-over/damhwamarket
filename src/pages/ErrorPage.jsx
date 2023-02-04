import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <section className="container mx-auto">
      <div className="grid h-screen px-4 bg-white place-content-center">
        <div className="text-center">
          <p className="text-[101px] font-extrabold text-[#ffbe00]">404</p>
          <p className="my-5 text-xl font-extrabold tracking-tight text-gray-600 sm:text-4xl">
            잘못된 술자리로 오신 것 같아요
          </p>
          <p className="my-6 text-lg font-extrabold tracking-tight text-gray-600 sm:text-3xl">
            We can't find this page.
          </p>
          <p className="mt-9 text-[16px] font-extrabold text-zinc-600 leading-7">
            방문하시려는 페이지의 주소가 잘못 입력되었거나, 삭제되어 사용하실 수
            없습니다. <br />
            입력하신 주소가 정확한지 다시 한번 확인해 주세요
          </p>
          <button
            className="w-40 h-12 mt-9 text-center text-lg font-extrabold text-white bg-blue rounded-md hover:bg-sky-600 transition ease-in"
            onClick={() => {
              navigate("/");
            }}
          >
            술담화 홈으로
          </button>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;