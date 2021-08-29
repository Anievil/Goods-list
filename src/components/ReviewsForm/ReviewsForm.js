import React, { useState } from 'react'
import styles from './ReviewsForm.module.css'
import { sendReview } from '../../api/index'

const ReviewsForm = ({ token, id }) => {
    const [comment, setComment] = useState('')
    const [rate, setRate] = useState('')

    const typeComment = (e) => {
        setComment(e.target.value)
    }

    const typeRate = (e) => {
        setRate(e.target.value)
    }

    const sendComment = async () => {
        sendReview(rate, comment, id, token.token)
    }

    return (
        <form className={styles.commentForm} onSubmit={sendComment}>
            <textarea
                className={styles.commentInput}
                required
                placeholder='Enter your comment (max length - 255)'
                maxLength='255'
                value={comment}
                onChange={typeComment} />
            <input
            ~    className={styles.rateInput}
                required
                pattern='[1-5]'
                value={rate}
                placeholder='Rate (1-5)'
                onChange={typeRate} />
            <input className={styles.submit} required type='submit' />
        </form>
    )
}

export default ReviewsForm