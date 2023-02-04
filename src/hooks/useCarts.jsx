import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";

export default function useCarts() {
    const { Authorization, user } = useAuthContext();

    const cartsQuery = useQuery(
        ["carts", user && user.nickname],
        async () => {
            return user
                ? axios
                      .get(`http://192.168.0.203:8080/api/carts`, {
                          headers: { Authorization },
                      })
                      .then((res) => res.data.data)
                      .catch((err) => console.log(err))
                : null;
        },
        { staleTime: 1000 * 60 * 5 }
    );

    return { cartsQuery };
}
