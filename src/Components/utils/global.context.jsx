import { createContext, useReducer, useMemo, useEffect} from "react";

const reducerFunction = (state, { bgFlag }) => { 
  switch (bgFlag) {
    case "DARK":
      return {
        bgFlag: "LIGHT", 
        bgColor: "#ffda9e", 
        ftColor: "#000000"
      }
    case "LIGHT":
      return {
        bgFlag: "DARK",
        bgColor: "#DEB7D9",
        ftColor: "#000080"
        
      }
    default:
      return state;
  }
}

export const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {

const initialState = { 
  bgFlag: "LIGHT",
  bgColor: "#ffda9e",
  ftColor: "#000000"
   
};

const [state, dispatch] = useReducer(reducerFunction, initialState); 
const providerValue = useMemo(()=>({
  state, 
  dispatch 
}),[state])


  return (
    <ContextGlobal.Provider value={providerValue}>
      {children}
    </ContextGlobal.Provider>
  );


};



export default ContextProvider;