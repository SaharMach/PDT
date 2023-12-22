import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { loadItem } from "../store/actions/item.actions";
import { useSelector } from "react-redux";
import { resetItem } from "../store/actions/item.actions";
import { update } from "../store/actions/user.actions";
export function ItemDetails() {
    const { itemId } = useParams()
    console.log(itemId);
    const item = useSelector(storeState => storeState.itemModule.item);
    let user = useSelector(storeState => storeState.userModule.user);

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

    async function addToCart() {
        if (!user) return alert('cant for now')
        try {
            const updatedCart = user.cart ? [...user.cart, item] : [item]
            let userToUpdate = { ...user, cart: updatedCart };

            console.log(userToUpdate.cart);
            await update(userToUpdate)
            console.log(user.cart, ' from add to carttTTTTTTTTTT');

        } catch (err) {
            console.log('couldnt add to cart')
            throw err
        }
    }


    // async function addToCart(item) {
    //     if (!user) return alert('Can\'t add to cart now');

    //     try {
    //         const currentCart = Array.isArray(user.cart) ? user.cart : [];

    //         let updatedCart = [...currentCart, item];

    //         let userToUpdate = { ...user, cart: updatedCart };

    //         console.log(userToUpdate.cart);
    //         // await update(userToUpdate);  // Now you can uncomment this to perform the update
    //     } catch (err) {
    //         console.log('Couldn\'t add to cart', err);
    //         throw err;
    //     }
    // }
    return (
        <div>
            {item["תאור פריט"]} <br />
            <span>{item["מחירון 2"]}</span>
            <button onClick={addToCart}>הוסף לעגלה</button>
        </div>

    )
}