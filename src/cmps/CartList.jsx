import { CartPreview } from "./CartPreview"
export function CartList({ list, onDeleteItem, onUpdateQuantity }) {
    return (
        <CartPreview list={list} onDeleteItem={onDeleteItem} onUpdateQuantity={onUpdateQuantity} />
    )
}