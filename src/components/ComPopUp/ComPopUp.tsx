import { Modal } from 'App'
import { useCallback } from 'react'
import styles from './styles.module.css'
import TextInput from 'components/TextInput/TextInput'
import Button from 'components/Button/Button'
import { ButtonsClasses } from 'constants/constants'
import { useDispatch } from 'react-redux'
import { ICom } from 'typings/interfaces'
import { addNewCom } from 'store/appSlice'
import { useForm, SubmitHandler } from 'react-hook-form'

export interface IComPopUpProps {
    isShow: boolean,
    setModal: Function
}

export interface IInputsCom {
    author: string,
    text: string,
}

const ComPopUp = ({ setModal }: IComPopUpProps) => {
    const dispatch = useDispatch();
    const addCom = useCallback((com: ICom) => {
        dispatch(addNewCom({com}));
    }, [dispatch]);
    const { register, handleSubmit, formState: { errors } } = useForm<IInputsCom>();
    const onSubmit: SubmitHandler<IInputsCom> = (inputs) => {
        addCom({author: inputs.author, text: inputs.text});
        setModal();
    }
    return(
        <Modal>
            <div className={styles['pop-up']}>
                <div
                    onClick={() => setModal()}
                    className={styles['bg']}
                />
                <div className={styles['wrapper']}>
                    <div className={`${styles.close} _icon-close`} onClick={() => setModal()} />
                    <div className={styles.content}>
                        <p className={styles.title}>Добавить комментарий</p>
                        <form method='POST' onSubmit={handleSubmit(onSubmit)} className={styles.form} id='add-comment' >
                            <div className={styles.inputs}>
                                <TextInput
                                    register={register}
                                    required={true}
                                    error={errors.author}
                                    isTextArea={false}
                                    placeholderText={'Имя'}
                                    name="author"
                                />
                                <TextInput
                                    register={register}
                                    required={true}
                                    error={errors.text}
                                    isTextArea={true}
                                    placeholderText={'Комментарий'}
                                    name="text"
                                />
                            </div>
                            <Button 
                                clickFn={() => {}}
                                text="Сохранить"
                                addedClass={[ButtonsClasses.SAVE_CHANGES]}
                                isPlusExist={false}
                                isFormSender={true}
                                formId='add-comment'
                            />
                        </form>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default ComPopUp
