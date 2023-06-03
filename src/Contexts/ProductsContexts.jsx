import { createContext,useState } from "react";

import Shop_DATA from "../shop-data.json";

export const ProductsContext = createContext({
  products: [],

});

export const ProductsContextProvider = ({ children }) => {
  const [products,setProducts] = useState(Shop_DATA);
  return (
    <ProductsContext.Provider value={{ products,setProducts
    }}>
      {children}
    </ProductsContext.Provider>
  );
}