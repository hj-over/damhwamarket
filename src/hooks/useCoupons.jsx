import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";

export default function useCoupons() {
  const { Authorization, user } = useAuthContext();
  const couponsQuery = useQuery(
    ["coupons", user && user.nickname],
    async () => {
      const header = {
        headers: {
          Authorization,
        },
      };
      return axios
        .get("http://192.168.0.203:8080/api/coupons", header)
        .then((res) => res.data.data);
    }
  );

  return { couponsQuery };
}
