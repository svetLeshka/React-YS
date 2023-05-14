import styles from './style.module.css'

const Comment = ({com, delFn}) => {
  return (
    <div className={styles['wrapper']}>
        <div className={styles['header']}>
            <p className={styles['author']}>{com.author}</p>
            <div onClick={() => delFn(com)} className={`${styles['close']} _icon-close`}></div>
        </div>
        <div className={styles['content']}>{com.text}</div>
    </div>
  )
}

export default Comment
