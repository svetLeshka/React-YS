import { Modal } from "App"
import styles from './styles.module.css'
import classnames from "classnames"
import EditTicket from "components/EditTicket/EditTicket"

const EditingTicketPopUp = ({ id, setModal, isEdit }) => {
  return (
    <Modal>
        <div className={classnames(styles['pop-up'], (Boolean(true) && styles['_show']))}>
            <div
                onClick={() => setModal()}
                className={styles['bg']}
            />
            <div className={styles['wrapper']}>
                {Boolean(isEdit) && <EditTicket id={id} setModal={setModal} />}
            </div>
        </div>
    </Modal>
  )
}

export default EditingTicketPopUp
