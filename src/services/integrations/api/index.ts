import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL;

const API = axios.create({ baseURL });

const subscribeEmail = async (email: string) => {
  try {
    const response = await API.post("/subscriber", { email });
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

const unsubscribeEmail = async (email: string) => {
  try {
    const response = await API.delete(`/subscriber/${email}`);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

const getSubscribersNumber = async () => {
  try {
    const response = await API.get(`/subscriber/`);
    const { data }: { data: any } = await response;
    return data.data.count;
  } catch (error: any) {
    throw error;
  }
};

export { API, subscribeEmail, unsubscribeEmail, getSubscribersNumber };
