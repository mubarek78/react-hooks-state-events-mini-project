import React from "react";

function CategoryFilter({ categories, setSelectedCategory, selectedCategory }) {

  function handleCategory(event) {
    setSelectedCategory(event.target.value);

  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => {
        return <button value={category} key={category} onClick={handleCategory} className={category === selectedCategory ? "selected" : ""}>
          {category}
        </button>
      })
      }
    </div>
  );
}

export default CategoryFilter;