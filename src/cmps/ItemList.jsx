import { ItemPreview } from "./ItemPreview";

export function ItemList({ currCategoryItems }) {

    return (
        <section>

            <ul className="clean-list">
                {currCategoryItems && currCategoryItems.map(item => {
                    return <li key={item._id}>
                        <ItemPreview item={item} />
                    </li>
                })}
            </ul>
        </section>
    )
}