import { instance } from "../utils/instance";

// accesstoken만 넘겨주면 됨 data 불필요
export const getPrincipalRequest = async () => {
  instance.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  });

  try {
    const response = await instance.get("/auth/principal");
    return response;
  } catch (error) {
    return error.response;
  }
};

export const signupRequest = async (data) => {
  try {
    const response = await instance.post("/auth/signup", data);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const signinRequest = async (data) => {
  try {
    const response = await instance.post("/auth/signin", data);
    return response;
  } catch (error) {
    return error.response;
  }
};
