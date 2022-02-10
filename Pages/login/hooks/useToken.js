import { useState } from "react";

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    //const userToken = JSON.parse(tokenString);

    console.log(tokenString);
    return tokenString;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (tokenString) => {
    localStorage.setItem("token", JSON.stringify(tokenString));
    setToken(tokenString);
  };

  return {
    setToken: saveToken,
    token,
  };
}
