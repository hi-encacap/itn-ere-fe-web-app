import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_RE_ACB_API_URL,
  headers: {
    "x-website-api-key": process.env.NEXT_PUBLIC_RE_ACB_API_KEY,
  },
});

export default axiosInstance;
