import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { ImStarFull } from "react-icons/im";
import styled from "styled-components";

const WriteReview = ({ productId }) => {
  const { Authorization } = useAuthContext();
  const queryClinet = useQueryClient();
  const [reviewOptionName, setReviewOptionName] = useState("");
  // const [reviewGrade, setReviewGrade] = useState();
  const [reviewContent, setReviewContent] = useState("");
  // console.log(reviewOptionName, reviewGrade, reviewContent);

  // 별점 기본값 설정
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  // 더미 배열을 통해 항상 별이 총 5개가 나오도록 한다.
  const array = [0, 1, 2, 3, 4];
  let score = clicked.filter(Boolean).length;

  // 리뷰 등록
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const body = {
      productSeq: Number(productId),
      optionName: reviewOptionName,
      grade: score,
      content: reviewContent,
    };
    const blob = new Blob([JSON.stringify(body)], {
      type: "application/json",
    });
    formData.append("body", blob);
    const header = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization,
      },
    };
    return axios
      .post(`http://192.168.0.203:8080/api/reviews`, formData, header)
      .then(alert("리뷰등록성공"));
  };
  const muHandleSubmit = useMutation(handleSubmit, {
    onSuccess: () => {
      queryClinet.invalidateQueries(["reviews", productId]);
    },
  });
  // console.log(typeof reviewGrade);
  // console.log(new Date());

  // 별점 클릭
  const handleStarClick = (index) => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  return (
    <>
      <form
        onSubmit={muHandleSubmit.mutate}
        className="relative border-2 border-t-2 mb-11 w-full h-80 py-5 px-4 text-left text-lg font-bold"
      >
        <label>옵션 : </label>
        <input
          type="text"
          name="optionName"
          value={reviewOptionName}
          onChange={(e) => setReviewOptionName(e.target.value)}
          className="mb-3 focus:outline-none ml-3"
        />
        <p className="absolute top-16">별점 : </p>
        <RatingBox>
          {array.map((el) => (
            <ImStarFull
              key={el}
              value={score}
              onClick={() => handleStarClick(el)}
              className={clicked[el] && "black"}
              size="35"
            />
          ))}
        </RatingBox>
        {/* <label>별점</label>
        <input
          type="text"
          name="grade"
          onChange={(e) => setReviewGrade(parseInt(e.target.value))}
        /> */}

        <label className="absolute left-4 top-25">내용 : </label>
        {/* <input
          type="text"
          name="content"
          value={reviewContent}
          onChange={(e) => setReviewContent(e.target.value)}
        /> */}
        <textarea
          name="content"
          cols="47"
          rows="4"
          value={reviewContent}
          onChange={(e) => setReviewContent(e.target.value)}
          className="ml-14 focus:outline-none"
        ></textarea>

        <button className="absolute right-7 bottom-6 border w-16 h-10 bg-[#faaf00] text-white transition ease-in rounded-md">
          등록
        </button>
      </form>
    </>
  );
};

const RatingBox = styled.div`
  margin: 0 50px;
  margin-bottom: 12px;
  display: flex;

  & svg {
    color: #c4c4c4;
    cursor: pointer;
  }
  :hover svg {
    color: #faaf00;
  }
  & svg:hover ~ svg {
    color: #c4c4c4;
  }
  .black {
    color: #faaf00;
  }
`;

export default WriteReview;
