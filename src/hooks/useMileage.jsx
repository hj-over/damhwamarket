import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";

export default function useMileage() {
    const queryClient = useQueryClient();
    const { Authorization, user } = useAuthContext();
    const mileageQuery = useQuery(
        ["mileage", user && user.nickname],
        async () => {
            const header = {
                headers: {
                    Authorization,
                },
            };
            return axios
                .get("http://192.168.0.203:8080/api/mileage", header)
                .then((res) => res.data.data);
        }
    );

    return { mileageQuery };
}
