import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useProducts(param) {
    const productsQuery = useQuery(
        ["productsDetail", param],
        async () => {
            return axios
                .get(`http://192.168.0.203:8080/api/products/${param}`)
                .then((res) => res.data.data)
                .catch((err) => console.log(err));
        },
        { staleTime: 1000 * 60 * 5 }
    );

    const url =
        param === undefined
            ? `http://192.168.0.203:8080/api/products`
            : `http://192.168.0.203:8080/api/products?keyword=${param}`;

    const productsSearchQuery = useQuery(["products", param], async () => {
        return axios
            .get(url)
            .then((res) => res.data.content)
            .catch((err) => console.log(err));
    });

    return { productsQuery, productsSearchQuery };
}
