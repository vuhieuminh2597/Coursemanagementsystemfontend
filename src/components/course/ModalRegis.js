import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useEffect, useState} from "react";
import {putUpdateUser} from '../../services/UserService'
import {toast} from "react-toastify";
import {registrationCourse} from "../../services/CourseService";

const ModalRegis = (props) => {
    const {show, handleClose,dataRegisCourse, handleRegisUserFromModal} = props;
    const [idUser,setIdUser] = useState("");
    const [idCourse,setIdCourse] = useState("");
    const [nameCourse, setNameCourse] = useState("");

    // console.log(">>>>Check" ,show);
    const handleRegisUser = async () => {
        const res = await registrationCourse(idUser,idCourse);
        console.log(">>>>>DAta",res)
        if(handleClose){
            setIdCourse('');
            setNameCourse('');
        }
        if(res){
            handleClose();
            toast.success("Registration this course success!");
        }else {
            toast.error("Registration this course failed!");
        }
    }

    useEffect(() => {
        if (show){//Khi mở ModalEdit
            setIdCourse(dataRegisCourse.id)
            setNameCourse(dataRegisCourse.name);
        }
    }, [dataRegisCourse]);//Nếu data thay đổi khi nhấn edit
    // console.log(">>> Check Data :",dataUserEdit);

    return (
        <>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Register course</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='body-add-new'>
                        <div className="mb-3">
                            <label className="form-label">ID course:</label>
                            <input className="form-control" value={idCourse}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Name course:</label>
                            <input className="form-control" value={nameCourse}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Add id user:</label>
                            <input type="text" className="form-control"
                                   onChange={(event) => setIdUser(event.target.value)}//Lấy value
                            />
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleRegisUser()}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}
export default ModalRegis;