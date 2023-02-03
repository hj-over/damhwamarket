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

    return { productsQuery };
}
