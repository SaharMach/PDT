import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'

export function HomePage() {
    console.log('entered');
    const items = useSelector(storeState => storeState.itemModule.items)
    console.log('items', items);
    return (
        <section className="home-page">
            <div className="inside-section">
                <article className="store-info">

                </article>
            </div>
        </section>
    )
}