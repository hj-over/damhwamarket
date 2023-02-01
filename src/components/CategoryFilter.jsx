import React from "react";

const CategoryFilter = ({ option, name, filter, setFilter, statusChange }) => {
  const filterdName = filterName(name);
  const { optionName, status, id } = option;

  const handleChange = (e) => {
    let status = e.target.checked ? "check" : "noCheck";
    statusChange(name, id, optionName, status);

    setFilter(
      status === "check"
        ? [...filter, { id, filterdName, optionName, status, name }]
        : [...filter].filter((item) => item.id !== id)
    );
  };

  return (
    <>
      <div className="flex w-36 my-2">
        <form>
          <input
            type="checkbox"
            id={optionName}
            onChange={handleChange}
            checked={status === "check"}
          />
          <label className="ml-4" htmlFor={optionName}>
            {optionName}
          </label>
        </form>
      </div>
    </>
  );
};

function filterName(name) {
  if (name === "도수") {
    return "";
  } else if (name === "원료") {
    return "";
  } else if (name === "상황별") {
    return "";
  } else if (name === "가격") {
    return "";
  }
  return name;
}

export default CategoryFilter;
