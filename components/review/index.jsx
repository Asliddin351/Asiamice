import axios from 'axios'
import {useEffect, useState} from 'react'
import styles from './review.module.css'


function Review({feedbacks}) {

    const [more, setMore] = useState(false)

    const [feedback, setFeedback] = useState([])


    useEffect(() => {
        setFeedback(feedbacks)
    }, [feedbacks])

    const handleClick = () => {
        setMore((el) => !el)
    }


    return (
        <div className={styles.review}>
            <div className={styles.review__header}>
                <div className={styles.review__avatar}>
                    <img src={'/7.png'} alt="avatar" width={'100%'} height={'100%'}/>
                </div>
                {/* <div className={styles.review__name}>
                    <h3 className={styles.title}>{name}</h3>
                </div> */}
            </div>

            <div className={more ? `${styles.more}` : `${styles.review__description}`}>
                <p id={'dot'} className={styles.text}><q
                    className={styles.q}>skljdalsjdisjfdhfjasodjpowkdpkfdmvnnodjojshfhghs</q></p>
                <button className={more ? `${styles.readclose}` : `${styles.readmore}`}
                        onClick={handleClick}>{more ? 'close' : 'read more...'}</button>
            </div>

        </div>
    )
}


export const getServerSideProps = async (context) => {

    const res = await axios.get(`http://127.0.0.1:8000/api/v1/comments/`);
    const feedbacks = await res.data;

    return {
        props: {feedbacks}
    }
}

export default Review
