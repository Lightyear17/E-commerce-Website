import React, {  useContext } from 'react'
import {Routes,Route} from 'react-router-dom'
// import Productcard from '../../components/product-card/product-card.component'


import './shope.style.scss'
import CategoriesPreview from '../categories-preview/categories-preview.component'
import Category from '../category/category.component'



export default function Shope() {
  
  return (
    <Routes>
      <Route index element={<CategoriesPreview/>}/>
      <Route path=':category' element={<Category/>} />
    </Routes>

  )
}


{/* <Fragment key={title}>
                <h2>{title}</h2>
                <div className='product-container'>
                  
                  {categoriesMap[title].map((product)=>(
                    <Productcard key={product.id} product={product} />
                  ))}
                  </div>
              </Fragment> */}