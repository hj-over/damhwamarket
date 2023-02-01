import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import CategoryBt from "../components/CategoryBt";
import ListItem from "../components/ListItem";
import NavList from "../components/NavList";
import Spinner from "../components/Spinner";
import { v4 as uuidv4 } from "uuid";

const List = () => {
  const [filter, setFilter] = useState([]);
  const { category } = useParams();
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["products", category], async () => {
    return axios
      .get(
        category === "전체보기"
          ? `http://192.168.0.203:8080/api/products`
          : `http://192.168.0.203:8080/api/products?keyword=${category}`
      )
      .then((res) => res.data.content)
      .catch((err) => console.log(err));
  });
  const navLists = ["전체보기", "탁주", "약.청주", "과실주", "증류주"];
  const [categoryBtNames, setCategoryBtNames] = useState([
    {
      name: "도수",
      options: [
        { id: uuidv4(), optionName: "0%-10%", status: "noCheck" },
        { id: uuidv4(), optionName: "10%-20%", status: "noCheck" },
        { id: uuidv4(), optionName: "20%-30%", status: "noCheck" },
        { id: uuidv4(), optionName: "30%이상", status: "noCheck" },
      ],
    },
    {
      name: "단맛",
      options: [
        { id: uuidv4(), optionName: "약한", status: "noCheck" },
        { id: uuidv4(), optionName: "중간", status: "noCheck" },
        { id: uuidv4(), optionName: "강한", status: "noCheck" },
      ],
    },
    {
      name: "신맛",
      options: [
        { id: uuidv4(), optionName: "약한", status: "noCheck" },
        { id: uuidv4(), optionName: "중간", status: "noCheck" },
        { id: uuidv4(), optionName: "강한", status: "noCheck" },
      ],
    },
    {
      name: "탄산",
      options: [
        { id: uuidv4(), optionName: "약한", status: "noCheck" },
        { id: uuidv4(), optionName: "중간", status: "noCheck" },
        { id: uuidv4(), optionName: "강한", status: "noCheck" },
      ],
    },
    {
      name: "원료",
      options: [
        { id: uuidv4(), optionName: "체리", status: "noCheck" },
        { id: uuidv4(), optionName: "감귤류", status: "noCheck" },
        { id: uuidv4(), optionName: "포도", status: "noCheck" },
        { id: uuidv4(), optionName: "베리", status: "noCheck" },
      ],
    },
    {
      name: "상황별",
      options: [
        { id: uuidv4(), optionName: "웃어른", status: "noCheck" },
        { id: uuidv4(), optionName: "연인", status: "noCheck" },
        { id: uuidv4(), optionName: "친구", status: "noCheck" },
        { id: uuidv4(), optionName: "혼자", status: "noCheck" },
      ],
    },
    {
      name: "가격",
      options: [
        { id: uuidv4(), optionName: "~1만원", status: "noCheck" },
        {
          id: uuidv4(),
          optionName: "1만원 ~ 3만원",
          status: "noCheck",
        },
        {
          id: uuidv4(),
          optionName: "3만원 ~ 5만원",
          status: "noCheck",
        },
        {
          id: uuidv4(),
          optionName: "5만원 ~ 10만원",
          status: "noCheck",
        },
      ],
    },
  ]);
  const statusChange = (name, id, optionName, status) => {
    const indexName = categoryBtNames.findIndex(
      (element) => element.name === name
    );
    let copy = [...categoryBtNames];

    copy[indexName].options = copy[indexName].options.map((option) => {
      return option.id === id ? { id, optionName, status } : option;
    });

    setCategoryBtNames(copy);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="border-b">
        <ul className="flex py-2 max-w-screen-xl m-auto">
          {navLists.map((navList, i) => (
            <NavList navList={navList} key={i} />
          ))}
        </ul>
      </div>

      <div className="border-b-8">
        <div className="flex py-4 max-w-screen-xl m-auto">
          {categoryBtNames.map((categoryName, i) => (
            <CategoryBt
              categoryName={categoryName}
              key={i}
              setFilter={setFilter}
              filter={filter}
              statusChange={statusChange}
            />
          ))}
        </div>
        <div className="relative flex py-4 max-w-screen-xl m-auto">
          {filter &&
            filter.map((item, i) => (
              <button
                key={i}
                id={item.id}
                onClick={(e) => {
                  const name =
                    item.filterdName === "" ? item.name : item.filterdName;
                  const id = item.id;
                  const optionName = item.optionName;
                  const status = item.status === "check" && "noCheck";

                  statusChange(name, id, optionName, status);
                  setFilter(filter.filter((item) => item.id !== e.target.id));
                }}
                className="mr-2 p-2 rounded-md bg-lime-300"
              >
                {`${item.filterdName} ${item.optionName}`}
              </button>
            ))}
          {filter.length > 0 && (
            <button
              onClick={() => {
                setFilter([]);
                setCategoryBtNames((prev) =>
                  prev.map((item) => ({
                    ...item,
                    options: item.options.map((item1) => ({
                      ...item1,
                      status: "noCheck",
                    })),
                  }))
                );
              }}
              className="absolute right-0 bottom-6"
            >
              초기화
            </button>
          )}
        </div>
      </div>
      {isLoading && <Spinner />}
      {error && <p>에러났어요</p>}
      {products && (
        <div className="grid grid-cols-4 max-w-screen-xl m-auto">
          {products.map((item, index) => (
            <ListItem key={index} item={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default List;
