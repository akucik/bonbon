import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  loginF: (token) => {},
  logoutF: () => {},
});

const calRemainTime = (expireTime) => {
  const currTime = new Date().getTime();
  const adjExpireTime = new Date(expireTime).getTime();

  const remainLogIn = adjExpireTime - currTime;
  return remainLogIn;
};
//double !! converts string value to boolean value(true/false)

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };
  const loginHandler = (token, expireTime) => {
    setToken(token);
    localStorage.setItem("token", token);

    const remainingTime = calRemainTime(expireTime);

    setTimeout(logoutHandler, remainingTime);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    loginF: loginHandler,
    logoutF: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
