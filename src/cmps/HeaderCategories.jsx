import { NavLink, useNavigate, useParams } from 'react-router-dom'

export function HeaderCategories() {
    return (
        <section className="header-categories">
            <NavLink> כל המוצרים </NavLink> |
            <NavLink> אלבומים </NavLink> |
            <NavLink> מסגרות </NavLink> |
            <NavLink> ציוד צילום </NavLink> |
            <NavLink> קנבאס </NavLink> |
            <NavLink> פיתוח תמונות </NavLink>
        </section>
    )
}