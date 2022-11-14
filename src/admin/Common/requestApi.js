import { request as https } from "../utils/https";
const baseUrl = `https://dummyapi.io/data/api`;
const baseUrl2 = `http://localhost:5000/appdata`;

export const GetPosts = ({ limit }) => {
  return https.get(`${baseUrl}/post?limit=${limit}`);
};

export const GetUsers = ({ limit }) => {
  return https.get(`${baseUrl}/user?limit=${limit}`);
};
