import { createContext, useContext } from "react";

interface MenuContextType {
    setTitle: (title: string) => void;
  }

const MenuContext = createContext<MenuContextType | undefined>(undefined);


export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenuContext must be used within MenuLayout');
  }
  return context;
};


export { MenuContext } 
