import Table from 'react-bootstrap/Table';
import {useEffect, useState} from "react";
import {fetchAllUser} from "../services/UserService";
import ReactPaginate from 'react-paginate';


const TableUsers = (props) => {
    const [listUsers, setListUsers] = useState([]);//Lấy danh sách nguời dùng
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        getUsers(1)
    }, [])

    const getUsers = async (page) => {
        let res = await fetchAllUser(page);
        // console.log('>>> check data',res)
        if (res && res.data) {
            setTotalUsers(res.total);//Lấy ra tổng số phần tử
            setTotalPages(res.total_pages);//Lấy ra số page
            setListUsers(res.data);
        }
    }

    // address
    // birthDay
    // email
    // id
    // name
    // phoneNumber

    const handlePageClick = (event) => {//event onclick
        getUsers(event.selected + 1);
    }

    return (
        <>

            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>ID</th>
                    {/*<th>Full Name</th>*/}
                    {/*<th>Birth Day</th>*/}
                    {/*<th>Address</th>*/}
                    <th>Email</th>
                    {/*<th>Phone Number</th>*/}
                </tr>
                </thead>
                <tbody>
                {listUsers && listUsers.length > 0 &&
                    listUsers.map((item, index) => {
                        return (
                            <tr key={`users-${index}`}>
                                <td>{item.id}</td>
                                {/*<td>{item.name}</td>*/}
                                {/*<td>{item.birthDay}</td>*/}
                                {/*<td>{item.address}</td>*/}
                                <td>{item.email}</td>
                                {/*<td>{item.phoneNumber}</td>*/}
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
        </>);
}

export default TableUsers;