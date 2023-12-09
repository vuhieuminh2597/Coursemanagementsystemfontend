import './App.scss';
import Header from './components/Header';
import TableUsers from './components/TableUsers';
import Container from "react-bootstrap/Container";
import ModalAddNewUser from "./components/ModalAddNewUser";
import {useState} from "react";

function App() {
    //Chú ý tham số useState truyền vào hay bị lỗi
    const [isShowModalAddNew,setIsShowModalAddNew] = useState(false);
    const handleClose = () => {
      setIsShowModalAddNew(false);
    }
    return (
        <div className='app-container'>
            <Header/>
            <Container>
                <div class=" my-3 add-new">
                    <span> <b>List Users:</b> </span>
                    <button className="btn btn-primary" type="submit"
                            onClick={() => setIsShowModalAddNew(true)}>Add new user</button>
                </div>
                <TableUsers/>
            </Container>
            <ModalAddNewUser
                show={isShowModalAddNew}
                handleClose={handleClose}
            />
        </div>
    );
}

export default App;
