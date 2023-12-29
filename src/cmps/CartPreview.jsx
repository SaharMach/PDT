import { useEffect } from "react"

export function CartPreview({ list, onDeleteItem, onUpdateQuantity }) {
    let totalPrice = 0;

    function handleQuantityChange(e, itemId) {
        const newQuantity = parseInt(e.target.value, 10);
        if (newQuantity >= 0) {
            onUpdateQuantity(itemId, newQuantity);
        }
    }

    return (
        <div>
            {list.map(item => {
                totalPrice += parseInt(item["מחירון 2"]) * item.quantity;
                return (
                    <div key={item._id}>
                        <span>{item["תאור פריט"]}</span> <br />
                        <span>{item["מחירון 2"]}</span>
                        <button onClick={() => onDeleteItem(item._id)}>x</button>

                        <input
                            type="number"
                            name="quantity"
                            min="0"
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(e, item._id)}
                        />
                    </div>
                );
            })}
            Total Price: {totalPrice !== 0 ? totalPrice : ''}
        </div>
    );
}
