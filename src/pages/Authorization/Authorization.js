import React, { useState } from 'react'
import styles from './Authorization.module.css'
import { auth } from '../../api/index'
import { useHistory } from 'react-router-dom'

const Authorization = () => {
    const [isLogin, setIsLogin] = useState(true)
    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')
    const [action, setAction] = useState('login');
    const [checkPass, setCheckPass] = useState('')
    const history = useHistory()

    const changeForm = () => {
        if (isLogin) {
            setAction('register')
        }
        else {
            setAction('login')
        }
        setIsLogin(!isLogin)
    }

    const typeLogin = (e) => {
        setLogin(e.target.value);
    }

    const typePass = (e) => {
        setPass(e.target.value);
    }

    const typePassAgain = (e) => {
        setCheckPass(e.target.value);
    }
    
    const sendData = async (e) => {
        e.preventDefault()
        if (checkPass !== '' && pass !== checkPass) {
            alert('Passwords must be the same')
        }
        else {
            const token = await auth(login, pass, action)
            console.log(token)
            if(token){
                window.localStorage.setItem('token', `${JSON.stringify({login, token})  }`)
                setLogin('')
                setPass('')
                setCheckPass('')
                history.push('/')
                window.location.reload()
            }
            else {
                alert('Incorrect login or password')
            }
        }
    }

    return (
        <form onSubmit={sendData} className={styles.authPage}>
            <input 
                className={styles.loginData} 
                onChange={typeLogin} 
                type='text' 
                required 
                placeholder='Login' 
                value={login} />
            <input 
                className={styles.loginData} 
                onChange={typePass} 
                type='password' 
                required 
                placeholder='Password' 
                value={pass} />
            {isLogin ? '' : <input 
                                className={styles.loginData} 
                                onChange={typePassAgain} 
                                type='password' 
                                required 
                                placeholder='Enter the password again' 
                                value={checkPass} />}
            <input className={styles.submit} type='submit' />
            <div className={styles.changeButton} onClick={changeForm}>{isLogin ? 'Register now!' : 'I have account.'}</div>
        </form>
    )
}

export default Authorization