import React, { createContext, useEffect, useState } from "react";

// const context ;
export const Context = createContext();

const AppCtxt = ({ children }) => {
  const [userData, setUserData] = useState([]);

  const Xdata = async () => {
    await fetch("https://dummyjson.com/users")
      .then((Response) => Response.json())
      .then((data) => setUserData(data.users));
  };
  useEffect(() => {
    Xdata();
  }, []);

  return <Context.Provider value={{ userData }}>{children}</Context.Provider>;
};

export default AppCtxt;
