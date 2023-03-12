import styles from "./styles.module.css"

const Button = ({addedClass, clickFn, text, isPlusExist, isFormSender = false}) => {
    const classes = addedClass.reduce((acc, cur, index) => {
        if(index === 1) return styles[acc] + ' ' + styles[cur];
        else if(index === addedClass.length) return acc + styles[cur];
        else return acc + ' ' + styles[cur];
    }, '');
    if(isFormSender) {
      return (
        <button
            type='submit'
            onClick={clickFn}
            className={`${styles['btn']} ${classes}`}
        >
            {Boolean(isPlusExist) && <span className={styles['with-plus']}></span>}
            <span className={styles['text']}>{text}</span>
        </button>
      )
    }
    else {
      return (
        <button
            onClick={clickFn}
            className={`${styles['btn']} ${classes}`}
        >
            {Boolean(isPlusExist) && <span className={styles['with-plus']}></span>}
            <span className={styles['text']}>{text}</span>
        </button>
      )
    }
}

export default Button
