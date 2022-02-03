import React from 'react'

const Categories = ({ categories, getCategories }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            className="filter-btn"
            onClick={(e) => getCategories(e.target.value)}
            value={category}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
