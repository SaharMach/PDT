import { useEffect, useState } from 'react';

export function ItemsFilter({ setToggleFilter, items, handleChange, fields }) {

    const [filteredItems, setFilteredItems] = useState([])
    useEffect(() => {
    }, [fields])



    return (
        <div className="filter-popup">
            <section>
                <input
                    type="text"
                    name="name"
                    value={fields.name}
                    onChange={handleChange}
                    placeholder="Name"
                />
                <article>

                </article>
            </section>
            <div onClick={() => setToggleFilter(false)}>
                x
            </div>
            <pre>{fields.name && JSON.stringify(items, null, 2) || null}</pre>
        </div>
    )
}