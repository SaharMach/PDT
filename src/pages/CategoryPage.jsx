import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadItems } from '../store/actions/item.actions';
import { useEffect, useState } from 'react';
import { ItemList } from '../cmps/ItemList';
export function CategoryPage() {
    let { categoryName } = useParams();
    const dispatch = useDispatch();
    const decodedName = decodeURIComponent(categoryName);
    const items = useSelector(storeState => storeState.itemModule.items);
    const [currCategoryItems, setCurrCategoryItems] = useState([]);

    useEffect(() => {
        if (items.length === 0) {
            loadItems()
        }
    }, [items.length])

    useEffect(() => {
        if (items.length > 0) {
            getCurrCategory()
        }
    }, [items])

    function getCurrCategory() {
        let categoryItems = items.filter(item => item["שם קבוצה"] === decodedName)
        setCurrCategoryItems(categoryItems)
    }

    if (!items) return <div>Loading...</div>

    return (
        <div>
            {/* <pre>{JSON.stringify(currCategoryItems, null, 2) || null}</pre> */}
            <ItemList currCategoryItems={currCategoryItems} />

        </div>
    );
}
