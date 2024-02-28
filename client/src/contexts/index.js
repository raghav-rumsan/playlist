import { createContext, useContext } from "react";
import useApi from "../hooks/useApi";

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const api = useApi();

  return <DataContext.Provider value={api}>{children}</DataContext.Provider>;
};

const useDataContext = () => {
  return useContext(DataContext);
};

export { DataContext, DataContextProvider, useDataContext };
