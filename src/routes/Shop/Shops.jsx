import './ShopsStyles.scss'
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categoriespreview/CategoriesPreview";
import Category from '../Category/Category';
export default function Shops() {
 
	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=":category" element={<Category />} />
		</Routes>
	
  );
}
