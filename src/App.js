import './App.scss';
import Header from './components/Header';
import TableUsers from './components/TableUsers';
import Container from "react-bootstrap/Container";
import modalAddNewUser from "./components/modalAddNewUser";

function App() {

    return (
        <div className='app-container'>
            <Header/>
            <Container>
                <div class=" my-3 add-new">
                    <span> <b>List Users:</b> </span>
                    <button className="btn btn-primary" type="submit" >Add new user</button>
                </div>
                <TableUsers/>
            </Container>
        </div>
    );
}

export default App;
