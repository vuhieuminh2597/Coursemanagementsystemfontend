import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {deleteUser} from "../../services/UserService";
import {toast} from "react-toastify";

const ModalDeleteUser = (props) => {
    const {show, handleClose, dataUserDelete,handleDeleteUserFromModal} = props;

    const confirmDelete = async () => {
        const res = await deleteUser(dataUserDelete.id);
        if (res && +res.statusCode === 204){
            toast.success("Delete user success!");
            handleDeleteUserFromModal(dataUserDelete);
            handleClose();
        }else {
            toast.error("Delete user failed!");
            handleClose();
        }
    }
    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete a user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Do you want to delete this user?
                    <br/>
                    ID: {dataUserDelete.id}
                    <br/>
                    Name: {dataUserDelete.name}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => confirmDelete()}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}
export default ModalDeleteUser;