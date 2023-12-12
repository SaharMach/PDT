import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from "react";
import { itemService } from "../services/item.service";
import { loadItems } from '../store/actions/board.actions';
import { useNavigate, useParams } from "react-router"

export function CategoriesPage() {
    const items = useSelector(storeState => storeState.itemModule.items)
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()


    // useEffect(() => {
    //     console.log('from cate page', items);
    //     if (!items)
    //         loadCategories()
    // }, [])



    useEffect(() => {
        init()
        // loadCategories()
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

    // function getCategories() {
    //     const newCategories = items.reduce((acc, item) => {
    //         const categoryName = item["שם קבוצה"];
    //         if (!acc.includes(categoryName)) {
    //             acc.push(categoryName);
    //         }
    //         return acc;
    //     }, []);

    //     setCategories(newCategories);
    // }
    function navigateToCategory(categoryName) {
        const encodedName = encodeURIComponent(categoryName);
        console.log(encodedName);
        navigate(`/categories/${encodedName}`);
    }

    if (!categories) return <div>Loading...</div>
    return (
        <div className="categories-container inside-section">
            {Object.keys(categories).map(key => {
                return <div key={key} className="category-card" onClick={() => navigateToCategory(key)}>
                    <div className="category-image">
                    </div>
                    <div className="category-title">{key}</div>
                </div>
            })}
        </div>
    );

}