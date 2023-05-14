import { Modal } from 'App'
import React from 'react'
import styles from './styles.module.css'
import classnames from 'classnames'
import Button from 'components/Button/Button'

export interface IDelComPopUpProps {
    isShow: boolean,
    setModal: Function
}

const DelComPopUp = ({ isShow, setModal }: IDelComPopUpProps) => {
    if(isShow) {
        return (
            <Modal>
                <div className={classnames(styles['pop-up'], (Boolean(isShow) && styles['show']))}>
                    <div
                        onClick={() => setModal(false)}
                        className={styles['bg']}
                    />
                    <div className={styles['wrapper']}>
                        <p className={styles.title}>Удалить тикет?</p>
                        <div className={styles.btns}>
                            <Button addedClass={['small-btn']} clickFn={() => setModal(true)} text={'Да'} isPlusExist={false} formId={''} />
                            <Button addedClass={['small-btn']} clickFn={() => setModal(false)} text={'Нет'} isPlusExist={false} formId={''} />
                        </div>
                    </div>
                </div>
            </Modal>
          )
    } else {
        return(
            <></>
        )
    }
}

export default DelComPopUp
