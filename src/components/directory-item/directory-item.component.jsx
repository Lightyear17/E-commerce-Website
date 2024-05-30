import { useNavigate } from 'react-router-dom'
import  {DirectoryItemContainer,BackgroundImage,Body} from './directory-item.style.jsx'

export default function DirectoryItem({ category }) {
    const navigate = useNavigate()
    const { imageUrl, title ,route} = category

    const onNavigateHandler = () => navigate(route)
    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage $imageurl={imageUrl}  />
            
            <Body>
                <h2>{title}</h2>
                <p>Sope Now</p>
            </Body>
        </DirectoryItemContainer>
    )
}