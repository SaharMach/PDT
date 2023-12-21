import logo from '../assets/imgs/logo.png'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { HeaderCategories } from './HeaderCategories'
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { loadItems } from "../store/actions/item.actions";
import { appHeaderSvg } from './Svgs';
import { useForm } from '../customHooks/useForm';
import { logout } from '../store/actions/user.actions';
import { ItemsFilter } from './ItemsFilter';
import { cartSvg } from './Svgs';

export function AppHeader() {
    const items = useSelector(storeState => storeState.itemModule.items)
    const [toggleFilter, setToggleFilter] = useState(false)
    const [fields, setFields, handleChange] = useForm({ name: '' });
    const user = useSelector(storeState => storeState.userModule.user)
    const navigate = useNavigate()
    console.log(user, 'from app header');
    useEffect(() => {
        if (items.length === 0 || fields.name) {
            init()
        }
    }, [fields.name])



    async function init() {
        await loadItems(fields.name)
    }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log('Form Data:', fields);


    // };

    // const debouncedHandleSearch = debounce(handleSearch, 300)
    return <div className="app-header">
        {toggleFilter &&
            < ItemsFilter
                items={items}
                setToggleFilter={setToggleFilter}
                fields={fields}
                handleChange={handleChange}
            />}
        <div className="inside-section">
            <section className='nav-links'>
                <article className='app-header-site'>
                    {/* <NavLink to={"/about"} >
                        כל המוצרים
                    </NavLink> | */}
                    {/* <NavLink to={"/cart"} > חיפוש </NavLink> */}
                    {/* <form onSubmit={handleSubmit}> */}
                    {/* <input
                        type="text"
                        name="name"
                        value={fields.name}
                        onChange={handleChange}
                        placeholder="Name"
                    /> */}
                    <div onClick={() => setToggleFilter(!toggleFilter)}>
                        {appHeaderSvg.search}
                    </div>

                    {/* <label>
                            Subscribe to Newsletter:
                            <input
                                type="checkbox"
                                name="newsletter"
                                checked={fields.newsletter}
                                onChange={handleChange}
                            />
                        </label> */}
                    {/* <button type="submit">Submit</button> */}
                    {/* </form> */}
                </article>
                <article className='app-header-user'>
                    <NavLink to={"/cart"} > <span className='cart-logo'>{cartSvg.cart}</span> </NavLink> |
                    <NavLink to={"/about"} > עלינו </NavLink> |
                    {user ?
                        <div >
                            שלום, {user.username}
                            <span onClick={logout}>Logout</span>
                        </div>
                        :
                        <div onClick={() => navigate('/signup')}>
                            התחבר
                        </div>
                    }
                </article>
            </section>
            <NavLink className='logo' to={"/"}>
                <img src={logo} alt="" />
            </NavLink>
            <HeaderCategories />
        </div>
    </div>
}