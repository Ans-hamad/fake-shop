import { useQuery, useMutation } from "react-query";
import axios from "axios";

const baseURL = "https://fakestoreapi.com/";

// products
export const useProducts = () => {
  const url = baseURL + "products";

  return useQuery("products", async () => {
    const response = await axios.get(url);
    return response.data;
  });
};

// Login
export const useLogin = () => {
  const url = baseURL + "auth/login";

  const mutation = useMutation(async (data) => {
    const response = await axios.post(url, data);
    return response.data;
  });

  return mutation;
};
