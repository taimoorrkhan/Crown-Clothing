
import './CategoryItem.scss'

import { useNavigate } from 'react-router-dom';

const CategoryItem = ({ category }) => {
	const navigate = useNavigate();
	const { imageUrl, title,route } = category;

	const onNavigate = () => {
		navigate(route);
	};
	return (
		<div onClick={onNavigate} className="category-item-container">
			<div
				className="background-image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className="category-item-body-container">
				<h2>{title}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	);
};

export default CategoryItem;
