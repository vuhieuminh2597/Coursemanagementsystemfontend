import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useEffect, useState} from "react";
import {putUpdateUser} from '../../services/UserService'
import {toast} from "react-toastify";

const ModalEditUser = (props) => {
    const {show, handleClose,dataUserEdit, handleEditUserFromModal} = props;
    const [id,setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [birthDay, setBirthDay] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");


    const handleEditUser = async () => {
        const res = await putUpdateUser(id,name,email,birthDay,address,gender,phone);
        if(handleClose){
            setId('');
            setName('');
            setEmail('');
            setBirthDay('');
            setAddress('');
            setGender('');
            setPhone('');
        }
        if(res && res.id){
            handleClose();
            handleEditUserFromModal({id,name,email,birthDay,address,gender,phone});
            toast("Edit a user success!");
        }else {
            toast("Edit a user failed!");
        }
    }

    useEffect(() => {
        if (show){//Khi mở ModalEdit
            setId(dataUserEdit.id);
            setName(dataUserEdit.name);
            setEmail(dataUserEdit.email);
            setBirthDay(dataUserEdit.birthDay);
            setAddress(dataUserEdit.address);
            setGender(dataUserEdit.gender);
            setPhone(dataUserEdit.phone);
        }
    }, [dataUserEdit]);//Nếu data thay đổi khi nhấn edit
    // console.log(">>> Check Data :",dataUserEdit);

    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Customer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='body-add-new'>
                        <div className="mb-3">
                            <label className="form-label">ID:</label>
                            <input className="form-control" value={id}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Name:</label>
                            <input type="text" className="form-control" value={name}
                                   onChange={(event) => setName(event.target.value)}//Lấy value
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email:</label>
                            <input type="text" className="form-control" value={email}
                                   onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Birth day:</label>
                            <input type="text" className="form-control" value={birthDay}
                                   onChange={(event) => setBirthDay(event.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Address:</label>
                            <input type="text" className="form-control" value={address}
                                   onChange={(event) => setAddress(event.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Gender:</label>
                            <input type="text" className="form-control" value={gender}
                                   onChange={(event) => setGender(event.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone:</label>
                            <input type="text" className="form-control" value={phone}
                                   onChange={(event) => setPhone(event.target.value)}
                            />
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleEditUser()}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}
export default ModalEditUser;