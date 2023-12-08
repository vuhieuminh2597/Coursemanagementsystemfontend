import Table from 'react-bootstrap/Table';
import {useEffect, useState} from "react";
import {fetchAllUser} from "../services/UserService";


const TableUsers = (props) => {
    const [listUsers, setListUsers] = useState([]);

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        let res = await fetchAllUser();
        if (res && res.data) {
            setListUsers(res.data);
        }
    }

    // address
    //
    // birthDay
    //
    // email
    //
    // id
    //
    // name
    //
    // phoneNumber
    console.log(listUsers)
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>ID</th>
                <th>Full Name</th>
                <th>Birth Day</th>
                <th>Address</th>
                <th>Email</th>
                <th>Phone Number</th>
            </tr>
            </thead>
            <tbody>
            {listUsers && listUsers.length > 0 &&
                listUsers.map((item,index) =>{
                    return(
                        <tr key={`users-${index}`}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.birthDay}</td>
                            <td>{item.address}</td>
                            <td>{item.email}</td>
                            <td>{item.phoneNumber}</td>
                        </tr>
                    )
                })
            }

            </tbody>
        </Table>
    );
}

export default TableUsers;