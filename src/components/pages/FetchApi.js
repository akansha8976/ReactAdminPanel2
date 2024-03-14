import React, { useState, useEffect } from "react";

import TableHeading from "../TableHeading";
import Loading from "../Loading";
import { fetchData, deleteUser } from "../apiFunctions";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import moment from "moment/moment";
function App() {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

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

  const handleDeleteUser = (_id) => {
    confirmAlert({
      title: " You want to delete ",
      message: "Are you sure to do this.",
      buttons: [
        {
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
          label: "No",
        },
      ],
    });
  };

  if (errorMessage)
    return <h1 className=" text-center m-5">Error : {errorMessage}</h1>;

  return (
    <div id="wrapper">
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content"></div>
        <div className="container-fluid">
          {/* <!-- Page Heading --> */}
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

          {/* <!-- DataTales Example --> */}
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

                    {data?.result?.map((item) => {
                      return (
                        <tr>
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
                              // onClick={() => deleteUser1(item._id)}
                              onClick={() => handleDeleteUser(item._id)}
                            ></i>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
