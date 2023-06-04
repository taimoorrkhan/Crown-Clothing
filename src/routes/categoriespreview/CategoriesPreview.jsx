import { useContext } from "react";
import React from "react";
import { CategoriesContext } from "../../Contexts/CategoriesContext";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";


export default function CategoriesPreview() {
	const { categoriesMap } = useContext(CategoriesContext);
	return (
			Object.keys(categoriesMap).map((title) => {
				const items = categoriesMap[title];
				return (
					<CategoryPreview
						key={title}
						title={title}
						items={items}
					/>
				);
			})
		
	);
}
