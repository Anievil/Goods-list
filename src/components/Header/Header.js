import React, { useState } from 'react'
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const userData = useState(JSON.parse(localStorage.getItem('token')))

    const logout = () => {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <div className={styles.header}>
            <NavLink to='/'>
                <img
                    src='https://img1.freepng.ru/20180401/qhe/kisspng-map-computer-icons-flat-design-location-logo-5ac19a94752066.1834508515226374604798.jpg'
                    alt='logo'
                    width='40px'
                    height='40px' />
            </NavLink>
            {!userData[0] ?
                <NavLink to='/authorization' className={styles.loginButton}>
                    Sign in/Sign up
                </NavLink>
                :
                <div className={styles.userButton} onClick={logout}>
                    <p className={styles.userText}>Hi, {userData[0].login}.</p>
                    <p className={styles.userText}>Click to logout</p>
                </div>}

        </div>
    )
}

export default Header