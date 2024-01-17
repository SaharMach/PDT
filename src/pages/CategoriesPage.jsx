import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { loadItems } from '../store/actions/item.actions';
import { useNavigate } from "react-router";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { itemService } from '../services/item.service';
export function CategoriesPage() {
    const items = useSelector(storeState => storeState.itemModule.items);
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
        ]
    };

    useEffect(() => {
        init();
    }, []);

    async function init() {
        try {
            let items = await loadItems();
            loadCategories(items);
        } catch (err) {
            console.log('Error from load items', err);
        }
    }

    function loadCategories(items) {
        const categoriesToSave = Object.keys(itemService.getCategories(items));
        setCategories(categoriesToSave);
    }

    function navigateToCategory(categoryName) {
        const encodedName = encodeURIComponent(categoryName);
        navigate(`/categories/${encodedName}`);
    }

    const chunkSize = Math.ceil(categories.length / 3);
    const categoriesChunk1 = categories.slice(0, chunkSize);
    const categoriesChunk2 = categories.slice(chunkSize, 2 * chunkSize);
    const categoriesChunk3 = categories.slice(2 * chunkSize);

    const renderCategories = (categoriesChunk) => {
        return categoriesChunk.map(key => (
            <section key={key} className='categories-container'>
                <div className="category-card" onClick={() => navigateToCategory(key)}>
                    <div className="category-image"></div>
                    <div className="category-title">{key}</div>
                </div>
            </section>
        ));
    };

    if (!categories.length) return <div>Loading...</div>;

    return (
        <div className="categories inside-section">
            <Slider {...settings}>
                {renderCategories(categoriesChunk1)}
            </Slider>
            <Slider {...settings}>
                {renderCategories(categoriesChunk2)}
            </Slider>
            <Slider {...settings}>
                {renderCategories(categoriesChunk3)}
            </Slider>
        </div>
    );
}
