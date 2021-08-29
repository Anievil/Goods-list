import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getProduct } from '../../api/index'
import styles from './GoodPage.module.css'
import Reviews from '../../components/Reviews/Reviews'

const GoodPage = () => {
    const [product, setProduct] = useState(null)
    const x = useParams()

    useEffect(async () => {
        const item = await getProduct()
        setProduct(item.find(el => String(el.id) === x.id))
    }, [])

    return (
        <div className={styles.goodPage}>
            {product ?
                <>
                    <div className={styles.infoCont}>
                        <img 
                            src={`http://smktesting.herokuapp.com/static/${product.img}`} 
                            alt='good' 
                        />
                        <h2>{product.title}</h2>
                        <p>{product.text}</p>
                    </div>
                    <div>
                        <Reviews id={x.id} />
                    </div>
                </>
                : <h2>Please wait...</h2>}
        </div>
    )
}

export default GoodPage