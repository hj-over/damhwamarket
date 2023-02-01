import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import BasketCard from "../components/BasketCard";
import Spinner from "../components/Spinner";
import { useAuthContext } from "../context/AuthContext";

const Basket = () => {
  const { Authorization, user } = useAuthContext();
  const {
    isLoading,
    error,
    data: carts,
  } = useQuery(["carts", user ? user.nickname : ""], async () => {
    return axios
      .get(`http://192.168.0.203:8080/api/carts`, {
        headers: { Authorization },
      })
      .then((res) => res.data.data)
      .catch((err) => console.log(err));
  });
  console.log(carts);
  return (
    <div className="flex max-w-screen-xl mx-auto ">
      <div className="pl-56 w-5/6 min-h-1/2 ">
        <div>
          <p className="text-4xl font-bold text-amber-400 py-14">장바구니</p>
          {isLoading && <Spinner />}
          {error && <p>에러났어요</p>}
          {carts &&
            carts.map((cart) => (
              <BasketCard key={cart.optionSeq} cart={cart} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Basket;
