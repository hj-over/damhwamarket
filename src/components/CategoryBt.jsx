import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import CategoryFilter from "./CategoryFilter";

const CategoryBt = ({ categoryName, filter, setFilter, statusChange }) => {
  const { name, options } = categoryName;
  const [btChange, setBtChange] = useState(false);
  const [categoryOptionActive, setCategoryOptionActive] = useState(false);

  const btChangeClassName = btChange ? "w-5 ml-5 rotate-180" : "w-5 ml-5";
  const modalRef = useRef();
  const handleArrowChange = () => {
    setBtChange(!btChange);
    setCategoryOptionActive((prev) => !prev);
  };

  useEffect(() => {
    function handleOutside(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setCategoryOptionActive(false);
        setBtChange((prev) => !prev);
      }
    }

    document.addEventListener("mousedown", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
    };
  }, [modalRef]);

  return (
    <div className="relative">
      <button
        onClick={handleArrowChange}
        className="flex py-2 px-3 mr-5 items-center border rounded-md text-sm"
      >
        {name}
        <img
          className={btChangeClassName}
          src="/images/arrow-down.png"
          alt="화살표"
        />
      </button>
      {categoryOptionActive && (
        <div ref={modalRef}>
          <div className="w-filterwidth absolute top-12 left-0 z-10">
            <div className="flex flex-wrap justify-between rounded-lg bg-white drop-shadow-lg border py-4 px-5">
              {options.map((option, i) => (
                <CategoryFilter
                  option={option}
                  name={name}
                  key={i}
                  filter={filter}
                  setFilter={setFilter}
                  statusChange={statusChange}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryBt;
