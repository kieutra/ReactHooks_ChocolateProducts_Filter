import { useState, useEffect } from 'react'
import Search from '../search/Search'
import Categories from '../categories/Categories'
import Product from './Product'
import "./ProductList.css"
import { products as productData } from "../../product_data"

const allCategories = [
  "all",
  ...new Set(productData.map(product => product.category))];
function ProductList() {
  const [products, setProducts] = useState(productData);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState(allCategories);


  const handleSearch = (e) => {
    setSearch(e.target.value);
  }
  /*Filter Products By Category*/
  const filterProductByCategory = (category) => {
    if (category === "all") {
      setProducts(productData);
      return
    }
    const newProducts = productData.filter(product => product.category === category);
    setProducts(newProducts);
  }

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) => product.desc.toLowerCase().includes(search.toLowerCase()))
    )
  }, [search, products])
  return (
    <>
      <div className="header">
        <header className="container">
          <h1 className='--color-white --text-center'>
            <span className=''>Shop online for Lindt Chocolate </span>
          </h1>
          <div className='--flex-between --flex-dir-column --py'>
            <Search inputValue={search} onInputChange={handleSearch} />
            <Categories categories={categories} filterProductByCategory={filterProductByCategory} />
          </div>
        </header>
      </div>
      <div className="product-container">
        <div className="products container --grid-25 --py2">
          {filteredProducts.length === 0 ? (
            <h3 className='--text-center'>Sorry. No product found!!!</h3>
          ) : (
            filteredProducts.map((product) => {
              const { id, desc, image, original_price, sales } = product;
              return (
                <div key={id}>
                  <Product desc={desc} image={image} sales={sales} original_price={original_price} />
                </div>
              )
            }))}

        </div>
      </div>
    </>
  )
}

export default ProductList