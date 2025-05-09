import { jwtDecode } from "jwt-decode";

export const decodeToken = () => {
  try {
    let token = localStorage.getItem("userTasksToken");
    if (token) {
      const decoded = jwtDecode(token);
      return decoded;
    }
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};


export const userTokenId = decodeToken()?.id || 'test';
