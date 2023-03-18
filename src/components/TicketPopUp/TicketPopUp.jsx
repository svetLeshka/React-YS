import { Modal } from "App"
import styles from './styles.module.css'
import classnames from "classnames"
import EditTicket from "components/EditTicket/EditTicket"

const EditingTicketPopUp = ({ id, setModal, isEdit, setTicket }) => {
  return (
    <Modal>
        <div className={classnames(styles['pop-up'], (Boolean(true) && styles['_show']))}>
            <div
                onClick={() => setModal(false)}
                className={styles['bg']}
            />
            <div className={styles['wrapper']}>
              <EditTicket isEdit={isEdit} isNew={!isEdit} setTicket={setTicket} id={id} setModal={() => setModal(false)} />
            </div>
        </div>
    </Modal>
  )
}

export default EditingTicketPopUp
