import React from 'react'
import styles from './GoodCard.module.css'
import { NavLink } from 'react-router-dom'

const GoodCard = ({ product }) => {
    return (
        <NavLink to={`/product/${product.id}`} className={styles.goodCard}>
            <img
                src={`http://smktesting.herokuapp.com/static/${product.img}`}
                alt='good' />
            <div>
                <h2>{product.title}</h2>
                <p>{product.text}</p>
            </div>
        </NavLink>
    )
}

export default GoodCard