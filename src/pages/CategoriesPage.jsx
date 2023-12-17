import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from "react";
import { itemService } from "../services/item.service";
import { loadItems } from '../store/actions/item.actions';
import { useNavigate, useParams } from "react-router"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function CategoriesPage() {
    const items = useSelector(storeState => storeState.itemModule.items)
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [

            // ... more breakpoints if needed ...
        ]
    };

    useEffect(() => {
        init()
    }, [])

    async function init() {
        try {
            let items = await loadItems()
            loadCategories(items)
        } catch (err) {
            console.log('err from load items', err);
        }
    }

    function loadCategories(items) {
        const categoriesToSave = itemService.getCategories(items)
        setCategories(categoriesToSave)
    }

    function navigateToCategory(categoryName) {
        const encodedName = encodeURIComponent(categoryName);
        console.log(encodedName);
        navigate(`/categories/${encodedName}`);
    }

    if (!categories) return <div>Loading...</div>
    return (
        <div className="categories inside-section">
            <Slider {...settings}>
                {Object.keys(categories).map(key => (
                    <section className='categories-container'>
                        <div key={key} className="category-card" onClick={() => navigateToCategory(key)}>
                            <div className="category-image"></div>
                            <div className="category-title">{key}</div>
                        </div>
                    </section>
                ))}
            </Slider>
        </div>
    );

}