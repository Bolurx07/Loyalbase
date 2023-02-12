import './PopUp.css';
import checkicon from '../../Assets/checkicon.svg';
import Modal from "react-bootstrap/Modal";

export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="m"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
            <div className='popup-div' >
                <img src={checkicon} alt="checkicon" />
                <h4>Congratulations</h4>
                <p>
                    Great move! You're one step closer to getting 
                    your hands on the product. Please check your 
                    mail for more information.
                </p>
            </div>
      </Modal.Body>
    </Modal>
  );
}
