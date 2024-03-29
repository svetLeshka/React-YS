import styles from './styles.module.css'
import TextInput from 'components/TextInput/TextInput'
import { useSelector, useDispatch } from 'react-redux'
import MultiSelector from 'components/MultiSelector/MultiSelector'
import ChosenTags from 'components/ChosenTags/ChosenTags'
import Button from 'components/Button/Button'
import { deleteCom, updateEditingTicket } from 'store/appSlice'
import { useCallback } from 'react';
import Comment from 'components/Comment/Comment'
import { ButtonsClasses } from 'constants/constants'
import ComPopUp from 'components/ComPopUp/ComPopUp'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate, Routes, Route } from 'react-router'

const EditTicket = ({ isEdit, isNew, isPage = false, setModal = () => {}, setTicket}) => {
    const navigate = useNavigate();
    const path = useLocation();
    const ticket = useSelector(state => state['editingTask']);
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const submitChanges = (event) => {
        navigate(-1);
        setTicket(event);
        setModal();
    }
    const delComment = useCallback((com) => {
        dispatch(deleteCom({coms: [com]}));
    }, [dispatch]);
    const setModalCom = () => {
        navigate(-1);
    };
    const inputChange = useCallback((input) => {
        if(input.target.name === 'title') dispatch(updateEditingTicket({title: input.target.value}))
        if(input.target.name === 'desc') dispatch(updateEditingTicket({desc: input.target.value}))
    }, [dispatch]);
  return (
    <>
        {Boolean(!isPage) && <div className={`${styles.close} _icon-close`} 
            onClick={() => {
                setModal();
                navigate(-1);
            }
        }/>}
        {Boolean(isEdit && !isPage) && <p className={styles.header}>Редактировать</p>}
        {Boolean(isNew) && <p className={styles.header}>Создать тикет</p>}
        <form method='POST' className={(!isPage) ? styles.content : styles['content-page']} onSubmit={handleSubmit(submitChanges)}>
            <div className={styles['text-wrapper']}>
                <TextInput
                    register={register}
                    isEdit={Boolean(isEdit || isNew)}
                    value={ticket.title}
                    name={'title'}
                    isTextArea={false}
                    placeholderText={'Название'}
                    onChange={inputChange}
                    required={true}
                    error={errors.title}
                />
                <TextInput
                    register={register}
                    isEdit={Boolean(isEdit || isNew)}
                    value={ticket.desc}
                    name={'desc'}
                    isTextArea={true}
                    placeholderText={'Описание'}
                    onChange={inputChange}
                />
            </div>
            <div className={(isPage) ? styles['footer-new'] : styles['footer']}>
                {Boolean(ticket.tags.length !== 0) && <ChosenTags isEdit={isEdit} />}
                {
                    Boolean(isEdit) &&
                    <MultiSelector />
                }
                {
                    Boolean(isPage && ticket) && ticket.comments.map(com => {
                        return(
                            <Comment key={com.id} com={com} delFn={delComment} />
                        )
                    })
                }
                {
                    Boolean(isPage) &&
                    <Button 
                        clickFn={() => {
                            navigate(path.pathname+'/comment/create');
                        }}
                        text="Добавить комментарий"
                        addedClass={[ButtonsClasses.ADD_COMMENT]}
                        isPlusExist={true}
                        isFormSender={false}
                    />
                }
                <Button
                    clickFn={() => {}}
                    text="Сохранить"
                    addedClass={[ButtonsClasses.SAVE_CHANGES]}
                    isPlusExist={false}
                    isFormSender={true}
                />
            </div>
        </form>
        <Routes>
            <Route path='comment/create' element={<ComPopUp setModal={setModalCom} />} />
        </Routes>
    </>
  )
}

export default EditTicket
