import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="border-2 border-gray-200">
      <footer className="footer flex ml-10 my-10 ">
        <div className="grid wrapper">
          <b className="text-lg"> 별별컴퍼니 주식회사 </b>
          <br />
          <div className="grid gap-y-3 text-sm mb-8">
            고객센터: 010-1010-1010 <br />
            평일 10:00 - 18:00, 주말 휴무
            <div>
              <b>
                <Link to>이용약관</Link>&nbsp; <Link to>개인정보처리방침</Link>{" "}
                &nbsp;
                <Link>입점문의</Link>
              </b>
            </div>
            <p>
              대표: 이성계 &nbsp;&nbsp;사업자등록번호 : 620-81-58299&nbsp;&nbsp;{" "}
              <Link to>
                <u>사업자확인</u>
              </Link>{" "}
              &nbsp;&nbsp;통신판매 신고번호: 2021-고려조선-1111
            </p>
            <p>
              주소 : 대구광역시 중구 중앙대로 394, 제일빌딩 5F &nbsp;&nbsp;
              대표전화 : 053.572.1005&nbsp;&nbsp; 이메일 : info@green.com
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
