import './App.scss';
import Header from './components/Header';
import TableUsers from './components/user/TableUsers';
import Container from "react-bootstrap/Container";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Routes,Route,Link} from "react-router-dom";
import TableCourses from "./components/course/TableCourses";
function App() {

    return (
        <>
            <div className='app-container'>
                <Header/>
                <Container>
                    {/*<TableUsers/>*/}
                    <Routes>
                        <Route path={"/managerusers"} element={<TableUsers/>}/>
                        <Route path={"/managercourses"} element={<TableCourses/>}/>
                    </Routes>
                </Container>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"
            />
        </>
    );
}

export default App;
