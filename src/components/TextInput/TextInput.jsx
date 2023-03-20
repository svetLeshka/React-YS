import styles from './styles.module.css'

const TextInput = ({isEdit = true, isTextArea, placeholderText, name, value = '', onChange = () => {}, register, required = false, error}) => {
  return (
    <>
     {
        (Boolean(isTextArea) &&
            <textarea
                {...register(name, {
                    required: required,
                    onChange: onChange
                })}
                readOnly={!isEdit}
                className={`${styles['textarea']}${(error) ? ' '+styles.error: ''}`}
                placeholder={placeholderText}
                rows={9}
                defaultValue={value}
            />) ||
        <input
            {...register(name, {
              required: required,
              onChange: onChange
            })}
            readOnly={!isEdit}
            className={`${styles['text']}${(error) ? ' '+styles.error : ''}`}
            type="text"
            placeholder={placeholderText}
            defaultValue={value}
        /> 
    }
    </>
  )
}

export default TextInput
