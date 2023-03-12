import styles from './styles.module.css'

const TextInput = ({isTextArea, placeholderText, name, value = ''}) => {
  return (
    <>
     {
        (Boolean(isTextArea) &&
            <textarea
                name={name}
                className={styles['textarea']}
                placeholder={placeholderText}
                rows={9}
                defaultValue={value}
            />) ||
        <input
            name={name}
            className={styles['text']}
            type="text"
            placeholder={placeholderText}
            defaultValue={value}
        /> 
    }
    </>
  )
}

export default TextInput
