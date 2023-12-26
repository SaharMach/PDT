import { useEffect } from "react"

export function CartPreview({ list, onDeleteItem }) {
    let totalPrice = 0

    return (
        <div>
            {/* <pre>{JSON.stringify(list, null, 2) || null}</pre> */}
            {list.map(item => {
                { totalPrice += parseInt(item["מחירון 2"]) }
                return <div>

                    <span>{item["תאור פריט"]}</span> <br />
                    <span>{item["מחירון 2"]}</span>
                    <button onClick={() => onDeleteItem(item._id)}>x</button>
                </div>
            })}
            {totalPrice != 0 && totalPrice}
        </div>
    )
}