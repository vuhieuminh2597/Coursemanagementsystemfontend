import Table from 'react-bootstrap/Table';
import {useEffect, useState} from "react";
import {fetchAllUser} from "../../services/UserService";
import ReactPaginate from 'react-paginate';
import ModalAddNewUser from "./ModalAddNewUser";
import ModalEditUser from "./ModalEditUser";
import _ from "lodash";
import ModalDeleteUser from "./ModalDeleteUser";

const TableUsers = (props) => {
    const [listUsers, setListUsers] = useState([]);//Lấy danh sách nguời dùng
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);
    const [isShowModalEdit,setIsShowModalEdit] = useState(false)
    const [dataEditUser,setDataEditUser] = useState({});
    const [isShowModalDelete,setIsShowModalDelete] = useState(false);
    const [dataUserDelete,setDataUserDelete] = useState({});
    const handleClose = () => {
        setIsShowModalAddNew(false);
        setIsShowModalEdit(false);
        setIsShowModalDelete(false);
    }
    const handleUpdateTable = (user) => {
        setListUsers([user, ...listUsers]);
    }
    useEffect(() => {
        getUsers(1)
    }, [])

    const getUsers = async (page) => {
        let res = await fetchAllUser(page);
        // console.log('>>> check data', res);
        setTotalUsers(res.totalElements);//Lấy ra tổng số phần tử
        setTotalPages(res.totalPages);//Lấy ra số page
        if (res && res.data) {
            setListUsers(res.data);//add Data
        }
    }
    const handlePageClick = (event) => {//event onclick
        getUsers(event.selected + 1);
    }
    const handleEditUser = (user) => {
        setDataEditUser(user);
        setIsShowModalEdit(true);
    }
    const handleDeleteUser = (user) => {
      setIsShowModalDelete(true);
      // console.log(">>>> check data:",user);
        setDataUserDelete(user);
    }
    
    const handleDeleteUserFromModal = (user) => {
        let copyListUser = _.cloneDeep(listUsers);//trỏ tới địa chỉ bộ nhớ other không trùng với listUser
        copyListUser = copyListUser.filter(item => item.id !== user.id);
        setListUsers(copyListUser);
    }
    const handleEditUserFromModal = (user) => {
        let copyListUser = _.cloneDeep(listUsers);//trỏ tới địa chỉ bộ nhớ other không trùng với listUser
        let index = listUsers.findIndex(item => item.id === user.id);
        copyListUser[index].name = user.name;
        copyListUser[index].email = user.email;
        copyListUser[index].address = user.address;
        copyListUser[index].birthDay = user.birthDay;
        copyListUser[index].gender = user.gender;
        copyListUser[index].phone = user.phone;
        setListUsers(copyListUser);
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
                    <th>Actions</th>
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
                                <td>
                                    <button className='btn-warning mx-3 my-1'
                                            onClick={() => handleEditUser(item)}>Edit</button>
                                    <button className='btn-danger'
                                            onClick={() => handleDeleteUser(item)}>Delete</button>
                                </td>
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
                pageCount={totalPages}
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
            <ModalEditUser
                show={isShowModalEdit}
                handleClose={handleClose}
                dataUserEdit={dataEditUser}
                handleEditUserFromModal={handleEditUserFromModal}
            />
            <ModalDeleteUser
                show={isShowModalDelete}
                handleClose={handleClose}
                dataUserDelete={dataUserDelete}
                handleDeleteUserFromModal={handleDeleteUserFromModal}
            />
        </>);
}

export default TableUsers;