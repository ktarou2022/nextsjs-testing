import { useContext, useState, createContext, FC, Dispatch, SetStateAction } from "react";

const StateContext = createContext(
  {} as {
    toggle: boolean,
    setToggle: Dispatch<SetStateAction<boolean>>
  }
)

export const StateProvider: FC = ({ children }) => {
  const [toggle, setToggle] = useState(false)

  return (
    <StateContext.Provider value={{ toggle,setToggle }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
