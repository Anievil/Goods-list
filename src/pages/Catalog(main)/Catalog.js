import React, { useEffect, useState } from 'react'
import styles from './Catalog.module.css'
import GoodCard from '../../components/GoodCard/GoodCard'
import { getProduct } from '../../api/index'

function Catalog() {
    const [products, setProducts] = useState(null)

    useEffect(async () => {
        setProducts(await getProduct())
    }, [])

    return (
        <div className={styles.goodCont}>
            {products
                ? products.map((item) => <GoodCard key={item.id} product={item} />)
                : 'eee'
            }
        </div>
    )
}

export default Catalog