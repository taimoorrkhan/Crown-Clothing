import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./CategoryStyles.scss";
import { CategoriesContext } from "../../Contexts/CategoriesContext";
import ProductCard from "../../components/ProductCard/ProductCard";
export default function Category() {
	const { categoriesMap } = useContext(CategoriesContext);
	const { category } = useParams();
	const [items, setItems] = useState(categoriesMap[category]);

	useEffect(() => {
		setItems(categoriesMap[category]);
	}, [categoriesMap, category]);
	return (
		<>
			<h2 className="category-title">
				{category.toUpperCase()}
			</h2>
			<div className="category-container">
				{items &&
					items.map((item) => {
						return (
							<ProductCard
								key={item.id}
								product={item}
							/>
						);
					})}
			</div>
		</>
	);
}
