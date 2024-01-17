import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from 'react-slick';
export function HomePage() {
    // const items = useSelector(storeState => storeState.itemModule.items)
    // const [categories, setCategories] = useState([])


    const sales = [
        {
            itemId: '1111',
            itemImg: 'url',
        },
        {
            itemId: '11141',
            itemImg: 'url',
        },
        {
            itemId: '11211',
            itemImg: 'url',
        },
        {
            itemId: '111211',
            itemImg: 'url',
        },
        {
            itemId: '1111231',
            itemImg: 'url',
        },
        {
            itemId: '1111211',
            itemImg: 'url',
        },
        {
            itemId: '11312311',
            itemImg: 'url',
        },

    ]

    // useEffect(() => {
    //     init()
    //     // loadCategories()
    // }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,

    };

    // async function init() {
    //     try {
    //         let itemsToSave = await loadItems()
    //         console.log('init', itemsToSave);
    //         loadCategories(itemsToSave)
    //     } catch (err) {
    //         console.log('err from load items', err);
    //     }
    // }




    // if (categories.length === 0) return <div>Loading...</div>
    return (
        <section className="home-page">
            <div className="inside-section">
                <section className="sales">
                    <Slider {...settings}>

                        {sales.map(sale => {
                            return <div key={sale.itemId} className="sale">
                                <section>{sale.itemId}</section>
                                <span>במבצע</span>
                            </div>
                        })}
                    </Slider >
                </section>
                <article className="store-info">

                </article>
            </div>
        </section>
    )
}