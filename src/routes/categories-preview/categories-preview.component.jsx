import React, {  useContext } from 'react'


import { CategoriesContext} from '../../context/categories.context'

import CategoryPreview from '../../components/category-preview/category-preview.component'


export default function CategoriesPreview() {
  const { categoriesMap } = useContext(CategoriesContext)
  

  return (

    <>
      {Object.keys(categoriesMap).map((title) => {


        const products = categoriesMap[title]

        return (
          <CategoryPreview key={title} title={title} products={products} />
        )

      })}

    </>

  )
}

