import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export default function useProducts(param) {
    const queryClient = useQueryClient();
    const productsQuery = useQuery(["products"], async () => {
        return axios
            .get(`http://192.168.0.203:8080/api/products/${param}`)
            .then((res) => res.data.data)
            .catch((err) => console.log(err));
    });
    const productsSearchQuery = useQuery(["products", param], async () => {
        return axios
            .get(
                param === "전체보기"
                    ? `http://192.168.0.203:8080/api/products`
                    : `http://192.168.0.203:8080/api/products?keyword=${param}`
            )
            .then((res) => res.data.content)
            .catch((err) => console.log(err));
    });

    return { productsQuery, productsSearchQuery };
}
