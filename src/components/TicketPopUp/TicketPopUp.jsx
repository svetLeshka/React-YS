import { Modal } from "App"
import styles from './styles.module.css'
import classnames from "classnames"
import EditTicket from "components/EditTicket/EditTicket"
import { useNavigate, useParams } from "react-router"
import { useSearchParams } from "react-router-dom"

const EditingTicketPopUp = ({ stage, id, setModal, isEdit, setTicket }) => {
  const linkId = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  if(linkId.id === id || (searchParams.get('stage') && searchParams.get('stage') === stage)) {
    return (
      <Modal>
          <div className={classnames(styles['pop-up'], (Boolean(true) && styles['_show']))}>
              <div
                  onClick={() => {
                    setModal(false);
                    navigate(-1);
                  }}
                  className={styles['bg']}
              />
              <div className={styles['wrapper']}>
                <EditTicket isEdit={isEdit} isNew={!isEdit} setTicket={setTicket} id={id} setModal={() => setModal(false)} />
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

export default EditingTicketPopUp
