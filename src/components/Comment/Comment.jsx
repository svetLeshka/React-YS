import styles from './style.module.css'

const Comment = ({author, text, delFn}) => {
  return (
    <div className={styles['wrapper']}>
        <div className={styles['header']}>
            <p className={styles['author']}>{author}</p>
            <div onClick={delFn()} className={`${styles['close']} _icon-close`}></div>
        </div>
        <div className={styles['content']}>{text}</div>
    </div>
  )
}

export default Comment
