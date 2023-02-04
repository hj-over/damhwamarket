import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useReviews(param) {
    const reviewsQuery = useQuery(
        ["reviews", param],
        async () => {
            return axios
                .get(`http://192.168.0.203:8080/api/reviews/${param}`)
                .then((res) => res.data)
                .catch((err) => console.log(err));
        },
        { staleTime: 1000 * 60 * 5 }
    );

    return { reviewsQuery };
}
