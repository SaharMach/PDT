import { CartPreview } from "./CartPreview"
export function CartList({ list, onDeleteItem }) {
    return (
        <CartPreview list={list} onDeleteItem={onDeleteItem} />
    )
}