// import React, { useState, useEffect } from "react";
// import TableHeading from "../TableHeading";
// import Loading from "../Loading";
// import { fetchData, deleteUser } from "../apiFunctions";
// import { confirmAlert } from "react-confirm-alert";
// import "react-confirm-alert/src/react-confirm-alert.css";
// import moment from "moment/moment";
// import ReactPaginate from "react-paginate";

// function App() {
//   const [errorMessage, setErrorMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState({});
//   const [currentPage, setCurrentPage] = useState(0);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredData, setFilteredData] = useState([]);
//   const perPage = 5; // Number of items per page

//   useEffect(() => {
//     setLoading(true);
//     fetchData()
//       .then((res) => {
//         setData(res);
//         setFilteredData(res.result); //   all data in Set filtered
//         setLoading(false);
//       })
//       .catch((error) => {
//         setErrorMessage(error.message);
//         setLoading(false);
//       });
//   }, []);

//   const handlePageChange = (selectedPage) => {
//     setCurrentPage(selectedPage.selected);
//   };

//   const handleSearchInputChange = (event) => {
//     setSearchQuery(event.target.value);

//     filterData(event.target.value);
//   };

//   const filterData = (query) => {
//     const filtered = data.result.filter(
//       (item) =>
//         item._id.toLowerCase().includes(query.toLowerCase()) ||
//         item.description.toLowerCase().includes(query.toLowerCase())
//     );
//     setFilteredData(filtered);
//   };

//   const handleDeleteUser = (_id) => {
//     confirmAlert({
//       message: "Are you sure you want to delete?",
//       buttons: [
//         {
//           className: "btn rounded-pill",
//           label: "Yes",
//           onClick: () => {
//             setLoading(true);
//             deleteUser(_id)
//               .then(() => {
//                 fetchData()
//                   .then((res) => {
//                     if (res.result != null) {
//                       const totalItems = res.result.length;

//                       let newCurrentPage = currentPage;

//                       if (
//                         currentPage > 0 &&
//                         currentPage * perPage === totalItems
//                       ) {
//                         newCurrentPage = currentPage - 1;
//                       }
//                       setCurrentPage(newCurrentPage);

//                       setData(res);
//                       filterData(searchQuery); // Reapply filter after data change
//                     } else {
//                       setData();
//                     }
//                   })
//                   .catch((error) => {
//                     console.error("Error fetching data after deletion:", error);
//                   })
//                   .finally(() => {
//                     setLoading(false);
//                   });
//               })
//               .catch((error) => {
//                 console.error("Error deleting user:", error);
//                 setLoading(false);
//               });
//           },
//         },
//         {
//           className: "btn rounded-pill",
//           label: "No",
//         },
//       ],
//     });
//   };

//   const nextPageData = currentPage * perPage;

//   const currentPageData = filteredData?.slice(
//     nextPageData,
//     nextPageData + perPage
//   );

//   if (errorMessage)
//     return <h1 className="text-center m-5">Error : {errorMessage}</h1>;

//   return (
//     <div id="wrapper">
//       <div id="content-wrapper" className="d-flex flex-column">
//         <div id="content"></div>
//         <div className="container-fluid">
//           <h1 className="h3 mb-2 text-gray-800">Tables</h1>
//           <p className="mb-4">
//             DataTables{" "}
//             <a target="_blank" href="https://datatables.net">
//               official DataTables documentation
//             </a>
//             .{" "}
//             <a
//               className="btn btn-dark text-white border rounded-pill"
//               href="AddPage"
//             >
//               Create Data
//             </a>
//           </p>

//           <div className="card shadow mb-4">
//             <div className="card-header py-3">
//               <h6 className="m-0 font-weight-bold text-primary">
//                 DataTables Example
//               </h6>
//             </div>
//             <div className="card-body">
//               <div className="table-responsive">
//                 <input
//                   type="text"
//                   className="form-control mb-3"
//                   placeholder="Search..."
//                   value={searchQuery}
//                   onChange={handleSearchInputChange}
//                 />

//                 <table
//                   className="table table-bordered"
//                   id="dataTable"
//                   width="100%"
//                   cellspacing="0"
//                 >
//                   <thead>
//                     <tr>
//                       <TableHeading />
//                     </tr>
//                   </thead>
//                   <tfoot>
//                     <tr>
//                       <TableHeading />
//                     </tr>
//                   </tfoot>

//                   <tbody>
//                     {loading ? (
//                       <tr>
//                         <td colSpan="5" className="text-center">
//                           <Loading />
//                         </td>
//                       </tr>
//                     ) : (
//                       currentPageData?.map((item) => (
//                         <tr key={item._id}>
//                           <td>{item._id}</td>
//                           <td>{item.description}</td>
//                           <td>
//                             {moment(item.createdAt).format(
//                               "MM-DD-YYYY hh:mm:ss"
//                             )}
//                           </td>
//                           <td>
//                             {moment(item.updatedAt).format(
//                               "MM-DD-YYYY hh:mm:ss"
//                             )}
//                           </td>
//                           <td>
//                             <a href={"EditPage/" + item._id}>
//                               <i className="fa-sharp fa-solid fa-pen-to-square ms-4 text-secondary"></i>
//                             </a>
//                             <i
//                               className=" ms-4 fa-solid fa-trash-can"
//                               onClick={() => handleDeleteUser(item._id)}
//                             ></i>
//                           </td>
//                         </tr>
//                       ))
//                     )}
//                   </tbody>
//                 </table>

//                 <ReactPaginate
//                   previousLabel={"Previous"}
//                   nextLabel={"Next"}
//                   pageCount={Math.ceil(filteredData?.length / perPage)}
//                   onPageChange={handlePageChange}
//                   containerClassName={"pagination justify-content-end"}
//                   pageClassName={"page-item"}
//                   pageLinkClassName={"page-link"}
//                   previousClassName={"page-item"}
//                   nextClassName={"page-item"}
//                   previousLinkClassName={"page-link"}
//                   nextLinkClassName={"page-link"}
//                   activeClassName={"active"}
//                   breakClassName={"page-item"}
//                   forcePage={currentPage}
//                   breakLinkClassName={"page-link"}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// App.js

import React, { useState, useEffect } from "react";
import TableHeading from "../TableHeading";
import Loading from "../Loading";
import { fetchData, deleteUser } from "../apiFunctions";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import moment from "moment/moment";
import ReactPaginate from "react-paginate";

function App() {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });
  const perPage = 5; // Number of items per page

  useEffect(() => {
    setLoading(true);
    fetchData()
      .then((res) => {
        setData(res);
        setFilteredData(res.result); // all data in Set filtered
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

  const filterData = (query) => {
    const filtered = data.result.filter(
      (item) =>
        item._id.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  useEffect(() => {
    if (sortConfig.key !== null) {
      const sortedData = [...filteredData].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
      setFilteredData(sortedData);
    }
  }, [sortConfig]);
  const handleDeleteUser = (_id) => {
    confirmAlert({
      message: "Are you sure you want to delete?",
      buttons: [
        {
          className: "btn rounded-pill",
          label: "Yes",
          onClick: () => {
            setLoading(true);
            deleteUser(_id)
              .then(() => {
                fetchData()
                  .then((res) => {
                    if (res.result != null) {
                      const totalItems = res.result.length;

                      let newCurrentPage = currentPage;

                      if (
                        currentPage > 0 &&
                        currentPage * perPage === totalItems
                      ) {
                        newCurrentPage = currentPage - 1;
                      }
                      setCurrentPage(newCurrentPage);

                      setData(res);
                      filterData(searchQuery); // Reapply filter after data change
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

  const nextPageData = currentPage * perPage;

  const currentPageData = filteredData?.slice(
    nextPageData,
    nextPageData + perPage
  );

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
            <a target="_blank" href="https://datatables.net">
              official DataTables documentation
            </a>
            .{" "}
            <a
              className="btn btn-dark text-white border rounded-pill"
              href="AddPage"
            >
              Create Data
            </a>
          </p>

          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                DataTables Example
              </h6>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                />

                <table
                  className="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellspacing="0"
                >
                  <thead>
                    <tr>
                      <TableHeading handleSort={handleSort} />
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <TableHeading handleSort={handleSort} />
                    </tr>
                  </tfoot>

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
                            <a href={"EditPage/" + item._id}>
                              <i className="fa-sharp fa-solid fa-pen-to-square ms-4 text-secondary"></i>
                            </a>
                            <i
                              className=" ms-4 fa-solid fa-trash-can"
                              onClick={() => handleDeleteUser(item._id)}
                            ></i>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>

                <ReactPaginate
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                  pageCount={Math.ceil(filteredData?.length / perPage)}
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
        </div>
      </div>
    </div>
  );
}

export default App;
