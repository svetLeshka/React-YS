import { Modal } from 'App'
import { useCallback } from 'react'
import styles from './styles.module.css'
import TextInput from 'components/TextInput/TextInput'
import Button from 'components/Button/Button'
import { ButtonsClasses } from 'constants/constants'
import { useDispatch, useSelector } from 'react-redux'
import { ICom, IInitialValue } from 'typings/interfaces'
import { changeComsStateInEditing } from 'store/appSlice'

export interface IComPopUpProps {
    isShow: boolean,
    setModal: Function
}

const ComPopUp = ({ isShow, setModal }: IComPopUpProps) => {
    const ticket = useSelector((state: IInitialValue) => state['editingTask']);
    const dispatch = useDispatch();
    const addCom = useCallback((com: ICom) => {
        dispatch(changeComsStateInEditing([com]));
    }, [dispatch]);
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        addCom({author: form.author.value, text: form.desc.value});
        setModal(false);
    }
    if(isShow) {
        return(
            <Modal>
                 <div className={styles['pop-up']}>
                    <div
                        onClick={() => setModal(false)}
                        className={styles['bg']}
                    />
                    <div className={styles['wrapper']}>
                        <div className={`${styles.close} _icon-close`} onClick={() => setModal(false)} />
                        <div className={styles.content}>
                            <p className={styles.title}>Добавить комментарий</p>
                            <form method='POST' onSubmit={(event) => onSubmit(event)} className={styles.form}>
                                <div className={styles.inputs}>
                                    <TextInput isTextArea={false} placeholderText={'Имя'} name="author" />
                                    <TextInput isTextArea={true} placeholderText={'Комментарий'} name="desc" />
                                </div>
                                <Button 
                                    clickFn={() => {}}
                                    text="Сохранить"
                                    addedClass={[ButtonsClasses.SAVE_CHANGES]}
                                    isPlusExist={false}
                                    isFormSender={true}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    } else {
        return (
            <> </>
        )
    }
}

export default ComPopUp
