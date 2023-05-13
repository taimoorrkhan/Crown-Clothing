import React from 'react'
import './DirectoryStyle.scss'
import CategoryItem from "../CategoryItem/CategoryItem";
export default function Directory({categories}) {
  return (
		<div className="directory-container">
			{categories.map((category) => (
				<CategoryItem key={category.id} category={category} />
			))}
		</div>
  );
}
