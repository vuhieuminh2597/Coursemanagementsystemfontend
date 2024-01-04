import Table from 'react-bootstrap/Table';
import {useEffect, useState} from "react";
import {fetchAllCourses} from "../../services/CourseService";
import ReactPaginate from "react-paginate";

const TableCourses = (props) => {
    const [listCourses, setListCourses] = useState([]);//Lấy danh sách khóa học
    const [totalPages, setTotalPages] = useState(0);
    const getListCourses = async (page) => {
       const res = await fetchAllCourses(page);
       console.log(">>>>> Check course",res.data);
       if (res){
           setTotalPages(res.totalPages)
           setListCourses(res.data);
       }
    }
    const handlePageClick = (event) => {//event onclick
        getListCourses(event.selected + 1);
    }

    useEffect(() => {
        getListCourses(1);
    }, [])

    return (
        <>
            <div className=" my-3 add-new">
                <span> <b>List Courses:</b> </span>
                <button className="btn btn-primary" type="submit">Registration course
                </button>
            </div>

            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {listCourses && listCourses.length > 0 &&
                   listCourses.map((item, index) => {
                        return (
                            <tr key={`courses-${index}`}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>
                                    <button className='btn-warning mx-3 my-1'>Registration</button>
                                    <button className='btn-danger'>Record</button>
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

        </>);
}

export default TableCourses;