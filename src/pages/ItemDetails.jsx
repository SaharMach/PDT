import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { loadItem } from "../store/actions/item.actions";
import { useSelector } from "react-redux";
import { resetItem } from "../store/actions/item.actions";
export function ItemDetails() {
    const { itemId } = useParams()
    console.log(itemId);
    const item = useSelector(storeState => storeState.itemModule.item);
    useEffect(() => {
        // if (item.length === 0) {
        //     console.log('entered effect in itemDetails');
        onLoadItem()
        // }
        return () => resetItem()
    }, [])

    async function onLoadItem() {
        try {
            await loadItem(itemId)
            console.log('item from load', item);
        } catch (err) {
            console.log('couldnt load item', err);
            throw err
        }
    }

    return (
        <div>
            {item["תאור פריט"]} <br />
            <span>{item["מחירון 2"]}</span>
        </div>

    )
}