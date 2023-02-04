import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";

export default function useOrderDetail() {
    const { Authorization, user } = useAuthContext();
    const orderDetaiQuery = useQuery(
        ["orderDetail", user && user.nickname],
        async () => {
            const header = {
                headers: {
                    Authorization,
                },
            };
            return axios
                .get("http://192.168.0.203:8080/api/paymentInfo", header)
                .then((res) => res.data.payList);
        },
        { staleTime: 1000 * 60 * 5 }
    );

    return { orderDetaiQuery };
}
