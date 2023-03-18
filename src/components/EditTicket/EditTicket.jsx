import styles from './styles.module.css'
import TextInput from 'components/TextInput/TextInput'
import { useSelector, useDispatch } from 'react-redux'
import MultiSelector from 'components/MultiSelector/MultiSelector'
import ChosenTags from 'components/ChosenTags/ChosenTags'
import Button from 'components/Button/Button'
import { changeComsStateInEditing, updateTicket } from 'store/appSlice'
import { useState, useCallback } from 'react';
import Comment from 'components/Comment/Comment'
import { ButtonsClasses } from 'constants/constants'
import ComPopUp from 'components/ComPopUp/ComPopUp'

const EditTicket = ({ id = -1, isEdit, isNew, isPage = false, setModal = () => {}, setTicket}) => {
    const ticket = useSelector(state => state['editingTask']);
    const dispatch = useDispatch();
    const submitChanges = (event) => {
        event.preventDefault();
        const form = event.target;
        let title = '', desc = '', stage = ticket.stage, tags = [];
        Array.from(form.elements).forEach(input => {
            if(input.name === 'title') title = input.value;
            if(input.name === 'description') desc = input.value;
            if(input.type === 'checkbox' && input.checked) tags.push(input.name);
        });
        setTicket({stage: stage, title: title, desc: desc, tags: tags, id: id});
        setModal();
    }
    const delComment = useCallback((com) => {
        dispatch(changeComsStateInEditing([com]));
    }, [dispatch]);
    const [modalCom, setModalCom] = useState(false);
    const [modalHint, setModalHint] = useState(false);
  return (
    <>
        {Boolean(!isPage) && <div className={`${styles.close} _icon-close`} onClick={setModal} />}
        {Boolean(isEdit && !isPage) && <p className={styles.header}>Редактировать</p>}
        {Boolean(isNew) && <p className={styles.header}>Создать тикет</p>}
        <form method='POST' className={(!isPage) ? styles.content : styles['content-page']} onSubmit={(event) => submitChanges(event)}>
            <div className={styles['text-wrapper']}>
                <TextInput value={ticket.title} name={'title'} isTextArea={false} placeholderText={'Название'} />
                <TextInput value={ticket.desc} name={'description'} isTextArea={true} placeholderText={'Описание'} />
            </div>
            <div className={(isPage) ? styles['footer-new'] : styles['footer']}>
                {Boolean(ticket.tags.length !== 0) && <ChosenTags />}
                <MultiSelector />
                {
                    ticket.comments.map(com => {
                        return(
                            <Comment key={com.id} com={com} delFn={delComment} />
                        )
                    })
                }
                <Button 
                    clickFn={() => setModalCom(true)}
                    text="Добавить комментарий"
                    addedClass={[ButtonsClasses.ADD_COMMENT]}
                    isPlusExist={true}
                    isFormSender={false}
                />
                <ComPopUp isShow={modalCom} setModal={setModalCom} />
                <Button
                    clickFn={() => {}}
                    text="Сохранить"
                    addedClass={[ButtonsClasses.SAVE_CHANGES]}
                    isPlusExist={false}
                    isFormSender={true}
                />
            </div>
        </form>
    </>
  )
}

export default EditTicket
