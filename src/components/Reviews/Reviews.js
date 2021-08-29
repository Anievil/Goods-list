import React, { useEffect, useState } from 'react'
import { getComments } from '../../api/index'
import ReviewsForm from '../ReviewsForm/ReviewsForm'
import styles from './Reviews.module.css'

const Reviews = ({ id }) => {
    const [reviews, setReviews] = useState(null)

    useEffect(async () => {
        setReviews(await getComments(id))
    }, [])

    return (
        <div className={styles.reviewsCont}>
            <div className={styles.formCont}>
                <ReviewsForm token={JSON.parse(localStorage.getItem('token'))} id={id} />
                {localStorage.getItem('token')
                    ? ''
                    : <div className={styles.block}>
                        <h2>You must register in order to post comments!</h2>
                    </div>
                }
            </div>
            <div className={styles.commentsCont}>
                {reviews
                    ? reviews.map((comment) =>
                        <div key={comment.id} className={styles.commentBlock}>
                            <h2>{comment.created_by.username}</h2>
                            <p>Rate: {comment.rate}</p>
                            <p>{comment.text}</p>
                        </div>
                    )
                    : ''
                }
            </div>
        </div>
    )
}

export default Reviews