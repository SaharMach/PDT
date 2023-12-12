import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from "react";
import { itemService } from "../services/item.service";
import { loadItems } from '../store/actions/board.actions';

export function CategoriesPage() {
    const items = useSelector(storeState => storeState.itemModule.items)
    const [categories, setCategories] = useState([])


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
    if (!categories) return <div>Loading...</div>
    return (
        <div className="categories-container inside-section">
            {Object.keys(categories).map(key => {
                return <div key={key} className="category-card">
                    <div className="category-image">
                    </div>
                    <div className="category-title">{key}</div>

                </div>
            })}
        </div>
    );

}