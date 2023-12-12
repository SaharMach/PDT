import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
// import { loadItems } from "../store/actions/board.actions";
// import { itemService } from "../services/item.service";
export function HomePage() {
    // const items = useSelector(storeState => storeState.itemModule.items)
    // const [categories, setCategories] = useState([])




    // useEffect(() => {
    //     init()
    //     // loadCategories()
    // }, [])



    // async function init() {
    //     try {
    //         let itemsToSave = await loadItems()
    //         console.log('init', itemsToSave);
    //         loadCategories(itemsToSave)
    //     } catch (err) {
    //         console.log('err from load items', err);
    //     }
    // }



    function loadCategories(items) {
        const categoriesToSave = itemService.getCategories(items)
        setCategories(categoriesToSave)
    }
    function getCategories() {
        const newCategories = items.reduce((acc, item) => {
            const categoryName = item["שם קבוצה"];
            if (!acc.includes(categoryName)) {
                acc.push(categoryName);
            }
            return acc;
        }, []);

        setCategories(newCategories);
    }


    // if (categories.length === 0) return <div>Loading...</div>
    return (
        <section className="home-page">
            <div className="inside-section">
                <article className="store-info">
                </article>
            </div>
        </section>
    )
}