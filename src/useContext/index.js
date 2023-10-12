import { createContext, useContext } from "react";

export const CustomerContext = createContext();

export const useUserContext = () => {
  const user = useContext(CustomerContext);

  if (user === undefined)
    throw new Error(
      "useUserContext , CustomerContext ile kullanilmak zorundadir"
    );

  return user;
};
