import styles from './post.module.css'

// import { useSWR } from 'swr'

const Post = ({image, name, post}) => {



    return (
        <div className={styles.post}>
            <div className={styles.post_img}>
                <img src={image} alt={name} width={'100%'} style={{borderRadius: "50px"}}/>
            </div>
            <div className={styles.post_text}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.post_txt}>{post}</p>
            </div>
        </div>
    )
}

export default Post