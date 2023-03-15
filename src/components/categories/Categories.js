import React from 'react';
import "./Categories.css";

function Categories({ categories, filterProductByCategory }) {
  return (

    <div className="--flex-center">
      {categories.map((category, index) => {
        return (
          <button type='button' className='btn --btn__header --btn-secondary'
            key={index}
            onClick={() => filterProductByCategory(category)}>
            {category.toUpperCase()}
          </button>
        )
      })}
    </div>

  )
}

export default Categories