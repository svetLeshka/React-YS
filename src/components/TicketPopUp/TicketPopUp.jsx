import { Modal } from "App"
import styles from './styles.module.css'
import classnames from "classnames"
import { useSelector } from "react-redux"

const EditingTicketPopUp = ({ id, setModal }) => {
    const task = useSelector(state => state['tasks'])[id];
  return (
    <Modal>
        <div className={classnames(styles['pop-up'], (Boolean(true) && styles['_show']))}>
            <div
                onClick={() => setModal()}
                className={styles['bg']}
            />
            <div className={styles['wrapper']}>
                <div
                    onClick={() => setModal()}
                    className={classnames(styles['close'], '_icon-close')}
                />
                {/* <Ticket
                    closeTicket={closeTicket}
                    isTicketShown={isTicketShown}
                    isTicketEditable={isTicketEditable}
                /> */}
            </div>
        </div>
    </Modal>
  )
}

export default EditingTicketPopUp
