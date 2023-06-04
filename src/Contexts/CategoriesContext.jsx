import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/Firebase";





export const CategoriesContext = createContext({
	categoriesMap: [],
});


export const CategoriesContextProvider = ({ children }) => {
	const [categoriesMap,setCategoriesMap] = useState([]);
	useEffect(() => {
		const fetchProducts = async () => {
			const categoryMap = await getCategoriesAndDocuments();
			setCategoriesMap(categoryMap);
		};
		fetchProducts();
	}, []);
	const value = {
		categoriesMap
	};
	return (
		<CategoriesContext.Provider value={value}>
			{children}
		</CategoriesContext.Provider>
	);
};
