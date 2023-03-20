import React from 'react'
import styles from './styles.module.css'
import { useState } from 'react'
import DelComPopUp from 'components/DelComPopUp/DelComPopUp'

export interface IDotsProps {
    isEdit: boolean,
    setEdit: Function
}

const Dots = ({ isEdit, setEdit }: IDotsProps) => {
    const [show, setShow] = useState(false);
    const [modalDel, setModalDel] = useState(false);
    if(isEdit) {
        return (
            <></>
        )
    } else {
        return (
            <div className={styles.wrapper}>
                <span className={`${styles.dots} _icon-dots`} onClick={() => setShow(true)}></span>
                <div className={`${styles.hint}${(show) ? ' '+styles.show : ''}`}>
                    <span className={`${styles.close} _icon-close`} onClick={() => setShow(false)}></span>
                    <p className={styles.text} onClick={() => {setShow(false); setModalDel(true)}}>Удалить</p>
                    <p className={styles.text} onClick={() => {setShow(false); setEdit(true)}}>Редактировать</p>
                </div>
                <DelComPopUp isShow={modalDel} setModal={setModalDel} />
            </div>
        )
    }
}

export default Dots
