import { Link } from "react-router-dom"
import Productcard from "../product-card/product-card.component"
import './category-preview.style.scss'

export default function CategoryPreview({title,products}) {
  return (
    <div className="category-preview-container">
        <h2>
            <span className="title">
                <Link to={`${title}`}>
                {title.toUpperCase()}
                </Link>
                </span>
            </h2>
                <div className="preview">
                    {
                        products.filter((_,idx)=>idx<4).map((product)=>(
                            <Productcard key={product.id} product={product} />
                        ))
                    }
                </div>
    </div>
  )
}
