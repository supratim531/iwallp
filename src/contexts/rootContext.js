import { createContext, useContext } from "react";

export const RootContext = createContext();

export const RootProvider = RootContext.Provider;

export const useRootContext = () => {
  return useContext(RootContext);
};
