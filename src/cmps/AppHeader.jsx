import logo from '../assets/imgs/logo.png'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { HeaderCategories } from './HeaderCategories'
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { loadItems } from "../store/actions/board.actions";
import { itemService } from "../services/item.service";

export function AppHeader() {



    return <div className="app-header">

        <div className="inside-section">
            <section className='nav-links'>
                <article className='app-header-site'>
                    <NavLink to={"/about"} >
                        כל המוצרים
                    </NavLink> |
                    <NavLink to={"/cart"} > חיפוש </NavLink>
                </article>
                <article className='app-header-user'>
                    <NavLink to={"/cart"} > עגלה </NavLink> |
                    <NavLink to={"/about"} > עלינו </NavLink>
                </article>
            </section>
            <NavLink className='logo' to={"/"}>
                <img src={logo} alt="" />
            </NavLink>
            <HeaderCategories />
        </div>
    </div>
}