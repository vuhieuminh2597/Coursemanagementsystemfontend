import './App.scss';
import Header from './components/Header';
import TableUsers from './components/TableUsers';
import Container from "react-bootstrap/Container";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

    return (
        <>
            <div className='app-container'>
                <Header/>

                <Container>
                    <TableUsers/>
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
