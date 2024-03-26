import React, { useState, useEffect } from "react";
import TableHeading from "../../components/tableComponent/TableHeading";
import Loading from "../../components/tableComponent/Loading";
import {
  getPost,
  deletePost,
} from "../../components/tableComponent/ApiFunctions";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import moment from "moment/moment";
import ReactPaginate from "react-paginate";
import AddPage from "../add/Add";
import EditPage from "../edit/Edit";

function App() {
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [tempDescription, setTempDescription] = useState("");
  const perPageOptions = [5, 10, 15];

  const togglePopup = () => {
    setShowAddPopup(!showAddPopup);
    setShowEditPopup(false);
  };
  const toggleEditPopup = (_id, description) => {
    setTempDescription(description);
    setShowEditPopup(!showEditPopup);
    setShowAddPopup(false);
    setSelectedItemId(_id);
  };

  useEffect(() => {
    setLoading(true);
    getPost()
      .then((res) => {
        setData(res.result);
        setFilteredData(res.result); //   all data in Set filtered
        setLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setLoading(false);
      });
  }, []);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    filterData(event.target.value);
  };

  const sortItems = ({ ascending = true, key }) => {
    if (ascending === true) {
      if (key === 0) {
        const sortedData = [...filteredData].sort((a, b) =>
          a.description.localeCompare(b.description)
        );
        setFilteredData(sortedData);
      } else if (key === 1) {
        const sortedData = [...filteredData].sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
        setFilteredData(sortedData);
      } else if (key === 2) {
        const sortedData = [...filteredData].sort(
          (a, b) => new Date(a.updatedAt) - new Date(b.updatedAt)
        );
        setFilteredData(sortedData);
      }
    } else {
      if (key === 0) {
        const sortedData = [...filteredData].sort((a, b) =>
          b.description.localeCompare(a.description)
        );
        setFilteredData(sortedData);
      } else if (key === 1) {
        const sortedData = [...filteredData].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setFilteredData(sortedData);
      } else if (key === 2) {
        const sortedData = [...filteredData].sort(
          (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
        );
        setFilteredData(sortedData);
      }
    }
  };

  const filterData = (query) => {
    const filtered = data.filter(
      (item) =>
        item._id.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handledeletePost = (_id) => {
    confirmAlert({
      message: "Are you sure you want to delete?",
      buttons: [
        {
          className: "btn rounded-pill",
          label: "Yes",
          onClick: () => {
            setLoading(true);
            deletePost(_id)
              .then(() => {
                getPost()
                  .then((res) => {
                    if (res.result != null) {
                      const totalItems = res.result.length;

                      let newCurrentPage = currentPage;

                      if (
                        currentPage > 0 &&
                        currentPage * perPageOptions === totalItems
                      ) {
                        newCurrentPage = currentPage - 1;
                      }

                      setCurrentPage(newCurrentPage);
                      window.location.reload();

                      setData(res);
                      filterData(searchQuery);
                    } else {
                      setData();
                    }
                  })
                  .catch((error) => {
                    console.error("Error fetching data after deletion:", error);
                  })
                  .finally(() => {
                    setLoading(false);
                  });
              })
              .catch((error) => {
                console.error("Error deleting user:", error);
                setLoading(false);
              });
          },
        },
        {
          className: "btn rounded-pill",
          label: "No",
        },
      ],
    });
  };

  const nextPageData = currentPage * itemsPerPage;

  const currentPageData = filteredData?.slice(
    nextPageData,
    nextPageData + itemsPerPage
  );

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(0);
  };

  if (errorMessage)
    return <h1 className="text-center m-5">Error : {errorMessage}</h1>;

  return (
    <div id="wrapper">
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content"></div>
        <div className="container-fluid">
          <h1 className="h3 mb-2 text-gray-800">Tables</h1>
          <p className="mb-4">
            DataTables{" "}
            <a target="_blank" href="https://datatables.net" rel="noreferrer">
              official DataTables documentation
            </a>
            .{" "}
            <button
              className="btn btn-dark text-white border rounded-pill"
              onClick={togglePopup}
            >
              Create Data
            </button>
          </p>

          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                DataTables Example
              </h6>
            </div>
            {showAddPopup && <AddPage onClose={togglePopup} />}

            {showEditPopup && (
              <EditPage
                onClose={toggleEditPopup}
                itemId={selectedItemId}
                tempDescription={tempDescription}
              />
            )}
            {!showEditPopup && !showAddPopup && (
              <div className="card-body ">
                <div className="table-responsive   ">
                  <div className="d-flex bd-highlight">
                    <input
                      type="text"
                      className="me-auto form-control bd-highlight mb-3 w-25"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={handleSearchInputChange}
                    />
                  </div>

                  <table
                    className="table table-bordered"
                    id="dataTable"
                    width="100%"
                    cellspacing="0"
                  >
                    <thead>
                      <tr>
                        <TableHeading sortItems={sortItems} />
                      </tr>
                    </thead>

                    <tbody>
                      {loading ? (
                        <tr>
                          <td colSpan="5" className="text-center">
                            <Loading />
                          </td>
                        </tr>
                      ) : (
                        currentPageData?.map((item) => (
                          <tr key={item._id}>
                            <td>{item._id}</td>

                            <td>{item.description}</td>

                            <td>
                              {moment(item.createdAt).format(
                                "MM-DD-YYYY hh:mm:ss"
                              )}
                            </td>
                            <td>
                              {moment(item.updatedAt).format(
                                "MM-DD-YYYY hh:mm:ss"
                              )}
                            </td>

                            <td>
                              <i
                                className="fa-sharp fa-solid fa-pen-to-square ms-4 text-secondary"
                                onClick={() =>
                                  toggleEditPopup(item._id, item.description)
                                }
                              ></i>
                              <i
                                className=" ms-4 fa-solid fa-trash-can"
                                onClick={() => handledeletePost(item._id)}
                              ></i>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>

                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <label htmlFor="itemsPerPage" className="me-2">
                        Items per page:
                      </label>
                      <select
                        id="itemsPerPage"
                        className="form-select"
                        value={itemsPerPage}
                        onChange={handleItemsPerPageChange}
                      >
                        {perPageOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                    <ReactPaginate
                      previousLabel={"Previous"}
                      nextLabel={"Next"}
                      pageCount={Math.ceil(filteredData?.length / itemsPerPage)}
                      onPageChange={handlePageChange}
                      containerClassName={"pagination justify-content-end"}
                      pageClassName={"page-item"}
                      pageLinkClassName={"page-link"}
                      previousClassName={"page-item"}
                      nextClassName={"page-item"}
                      previousLinkClassName={"page-link"}
                      nextLinkClassName={"page-link"}
                      activeClassName={"active"}
                      breakClassName={"page-item"}
                      forcePage={currentPage}
                      breakLinkClassName={"page-link"}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
