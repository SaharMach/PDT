import { useNavigate } from "react-router"
import { NavLink } from "react-router-dom"
export function ItemPreview({ item }) {
    const navigate = useNavigate()

    return (

        <div onClick={() => navigate(`/products/${item._id}`)}>
            {item["תאור פריט"]}
        </div>

    )
}