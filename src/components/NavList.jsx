import React from "react";
import { useNavigate } from "react-router-dom";

const NavList = ({ navList }) => {
  const navigate = useNavigate();

  return (
    <li
      className="mr-10 font-semibold cursor-pointer"
      onClick={() => navigate(`/listing/${navList}`)}
    >
      {navList}
    </li>
  );
};

export default NavList;
