import styles from './styles.module.css'
import TextInput from 'components/TextInput/TextInput'
import { useSelector, useDispatch } from 'react-redux'
import MultiSelector from 'components/MultiSelector/MultiSelector'
import ChosenTags from 'components/ChosenTags/ChosenTags'
import Button from 'components/Button/Button'
import { updateTicket } from 'store/appSlice'

const EditTicket = ({ id = -1, isEdit, setModal, setTicket}) => {
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
  return (
    <>
        <div className={`${styles.close} _icon-close`} onClick={setModal} />
        {Boolean(isEdit) ? <p className={styles.header}>Редактировать</p> : <p className={styles.header}>Создать тикет</p>}
        <form method='POST' className={styles.content} onSubmit={(event) => submitChanges(event)}>
            <div className={styles['text-wrapper']}>
                <TextInput value={ticket.title} name={'title'} isTextArea={false} placeholderText={'Название'} />
                <TextInput value={ticket.desc} name={'description'} isTextArea={true} placeholderText={'Описание'} />
            </div>
            <div className={styles['footer']}>
                {Boolean(ticket.tags.length !== 0) && <ChosenTags />}
                <MultiSelector />
                <Button
                    clickFn={() => {}}
                    text="Сохранить"
                    addedClass={["add-ticket"]}
                    isPlusExist={false}
                    isFormSender={true}
                />
            </div>
        </form>
    </>
  )
}

export default EditTicket
