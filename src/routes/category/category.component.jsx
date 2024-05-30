import { useParams } from "react-router-dom"

import { CategoriesContext } from "../../context/categories.context"
import { useContext, useEffect, useState } from "react"
import Productcard from "../../components/product-card/product-card.component"
import './category.style.scss'
export default function Category() {
  const { category } = useParams()
  const { categoriesMap } = useContext(CategoriesContext)
  const [products, setProducts] = useState(categoriesMap[category])


  useEffect(() => {

    if (categoriesMap && category) {
      const productsForCategory = categoriesMap[category];
      console.log("productsForCategory:", productsForCategory);
      setProducts(productsForCategory || []);
    }
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <Productcard key={product.id} product={product} />
          ))
        }
      </div>
    </>
  )
}
