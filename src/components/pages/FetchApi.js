// import React, { useState, useEffect } from "react";

// import TableHeading from "../TableHeading";
// import Loading from "../Loading";
// import { fetchData, deleteUser } from "../apiFunctions";

// import { confirmAlert } from "react-confirm-alert";
// import "react-confirm-alert/src/react-confirm-alert.css";
// import moment from "moment/moment";
// function App() {
//   const [errorMessage, setErrorMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState({});

//   useEffect(() => {
//     setLoading(true);
//     fetchData()
//       .then((res) => {
//         setData(res);

//         setLoading(false);
//       })
//       .catch((error) => {
//         setErrorMessage(error.message);
//         setLoading(false);
//       });
//   }, []);

//   const handleDeleteUser = (_id) => {
//     confirmAlert({
//       message: "Are you sure you want to delete ?",
//       buttons: [
//         {
//           className: "btn rounded-pill",
//           label: "Yes",

//           onClick: () => {
//             setLoading(true);
//             setData();
//             deleteUser(_id)
//               .then(() => {
//                 fetchData()
//                   .then((res) => {
//                     setData(res);
//                     setLoading(false);
//                   })
//                   .catch((error) => {
//                     console.error("Error fetching data after deletion:", error);
//                   });
//               })
//               .catch((error) => {
//                 console.error("Error deleting user:", error);
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

//   if (errorMessage)
//     return <h1 className=" text-center m-5">Error : {errorMessage}</h1>;

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
//                     {loading && (
//                       <tr>
//                         <td colSpan="5" className="text-center">
//                           <Loading />
//                         </td>
//                       </tr>
//                     )}

//                     {data?.result?.map((item) => {
//                       return (
//                         <tr>
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
//                       );
//                     })}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

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
  const perPage = 5; // Number of items per page

  useEffect(() => {
    setLoading(true);
    fetchData()
      .then((res) => {
        setData(res);
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

  const handleDeleteUser = (_id) => {
    confirmAlert({
      message: "Are you sure you want to delete?",
      buttons: [
        {
          className: "btn rounded-pill",
          label: "Yes",
          onClick: () => {
            setLoading(true);
            setData();
            deleteUser(_id)
              .then(() => {
                fetchData()
                  .then((res) => {
                    setData(res);
                    setLoading(false);
                  })
                  .catch((error) => {
                    console.error("Error fetching data after deletion:", error);
                  });
              })
              .catch((error) => {
                console.error("Error deleting user:", error);
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

  const nestPageData = currentPage * perPage;

  const currentPageData = data?.result?.slice(
    nestPageData,
    nestPageData + perPage
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
                <table
                  className="table table-bordered"
                  id="dataTable"
                  width="100%"
                  cellspacing="0"
                >
                  <thead>
                    <tr>
                      <TableHeading />
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <TableHeading />
                    </tr>
                  </tfoot>

                  <tbody>
                    {loading && (
                      <tr>
                        <td colSpan="5" className="text-center">
                          <Loading />
                        </td>
                      </tr>
                    )}
                    {currentPageData?.map((item) => (
                      <tr key={item._id}>
                        <td>{item._id}</td>
                        <td>{item.description}</td>
                        <td>
                          {moment(item.createdAt).format("MM-DD-YYYY hh:mm:ss")}
                        </td>
                        <td>
                          {moment(item.updatedAt).format("MM-DD-YYYY hh:mm:ss")}
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
                    ))}
                  </tbody>
                </table>

                <ReactPaginate
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                  pageCount={Math.ceil(data?.result?.length / perPage)}
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
