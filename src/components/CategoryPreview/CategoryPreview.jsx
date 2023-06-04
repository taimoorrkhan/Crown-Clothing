import ProductCard from '../ProductCard/ProductCard'
import './CategoryPreviewStyles.scss'
 import { Link } from 'react-router-dom'
import React from 'react'

export default function CategoryPreview({title, items}) {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={title} className="title">{title.toUpperCase()}</Link>
      </h2>
      <div className="preview">
        {
          items.filter((_, index) => index < 4).map(item => ( 
            <ProductCard key={item.id} product={item} />
          ))
        }
      </div>
    </div>
  )
}
