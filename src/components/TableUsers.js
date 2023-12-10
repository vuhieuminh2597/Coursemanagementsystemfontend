import Table from 'react-bootstrap/Table';
import {useEffect, useState} from "react";
import {fetchAllUser} from "../services/UserService";
import ReactPaginate from 'react-paginate';
import ModalAddNewUser from "./ModalAddNewUser";

const TableUsers = (props) => {
    const [listUsers, setListUsers] = useState([]);//Lấy danh sách nguời dùng
    // const [totalUsers, setTotalUsers] = useState(0);
    // const [totalPages, setTotalPages] = useState(0);
    const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);
    const handleClose = () => {
        setIsShowModalAddNew(false);
    }
    const handleUpdateTable = (user) => {
        setListUsers([user, ...listUsers]);
    }
    useEffect(() => {
        getUsers(1)
    }, [])

    const getUsers = async (page) => {
        let res = await fetchAllUser();
        console.log('>>> check data',res)

            // setTotalUsers(12);//Lấy ra tổng số phần tử
            // setTotalPages(6);//Lấy ra số page
            // console.log(">>> check data",res.data);
            setListUsers(res);

    }


    const handlePageClick = (event) => {//event onclick
        getUsers(event.selected + 1);
    }

    return (
        <>
            <div className=" my-3 add-new">
                <span> <b>List Users:</b> </span>
                <button className="btn btn-primary" type="submit"
                        onClick={() => setIsShowModalAddNew(true)}>Add new user
                </button>
            </div>

            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Birth Day</th>
                    <th>Address</th>
                    <th>Gender</th>
                    <th>phone</th>
                </tr>
                </thead>
                <tbody>
                {listUsers && listUsers.length > 0 &&
                    listUsers.map((item, index) => {
                        return (
                            <tr key={`users-${index}`}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.birthDay}</td>
                                <td>{item.address}</td>
                                <td>{item.gender}</td>
                                <td>{item.phone}</td>
                            </tr>
                        )
                    })
                }

                </tbody>
            </Table>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={2}
                previousLabel="< previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
            />

            <ModalAddNewUser
                show={isShowModalAddNew}
                handleClose={handleClose}
                handleUpdateTable={handleUpdateTable}
            />
        </>);
}

export default TableUsers;