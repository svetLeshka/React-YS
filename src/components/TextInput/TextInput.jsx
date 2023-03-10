import styles from './styles.module.css'

const TextInput = ({isTextArea, placeholderText, name}) => {
  return (
    <>
     {
        (Boolean(isTextArea) &&
            <textarea
                name={name}
                className={styles['textarea']}
                placeholder={placeholderText}
                rows={9}
            />) ||
        <input
            name={name}
            className={styles['text']}
            type="text"
            placeholder={placeholderText}
        /> 
    }
    </>
  )
}

export default TextInput
