import React, { useState, useEffect } from "react";
import { putData } from "../apiFunctions";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../Loading";
function EditPage({ item }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  var specialCharacters = /[$&+,:;=?@#|'<>.^*()%!-]/;
  var numbers = /[0-9]/g;
  const getProductDetails = async () => {
    let result = await fetch(
      `https://curd-demo-omega.vercel.app/api/posts/${params._id}`
    );

    result = await result.json();

    setDescription(result.result.description);
    setLoading(false);
  };
  useEffect(() => {
    setLoading(true);
    getProductDetails();
  }, []);

  const editFunction = async () => {
    if (description.length == "") {
      setErrorMessage("Empty not allowed");
    } else if (description.length < 4) {
      setErrorMessage("At least 4  alphabets required..");
    } else if (
      description.match(specialCharacters) ||
      description.match(numbers)
    ) {
      setErrorMessage("Only alphabets Required..");
    } else {
      try {
        setErrorMessage("");
        await putData(params._id, { description });
        alert("Edit Data successfully");
        navigate("/fetchapi");
      } catch (error) {
        console.error("An error occurred while editing data:", error);
      }
    }
  };
  return (
    <>
      <div className="container ">
        <div className="row justify-content-center ">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row " style={{ height: "500px" }}>
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center mt-5">
                        <h1 className="h4 text-gray-900 mb-4 ">Edit Page!</h1>
                        {loading === true ? (
                          <div className=" my-3">
                            {" "}
                            <Loading />
                          </div>
                        ) : null}
                      </div>
                      <div className="user">
                        <div className="form-group ">
                          <input
                            type="text"
                            className="form-control form-control-user rounded-pill mt-5  "
                            name="description"
                            onChange={(e) => {
                              setDescription(e.target.value);
                            }}
                            value={description}
                          />

                          {errorMessage && (
                            <p style={{ color: "red" }} className="mt-2">
                              {" "}
                              {errorMessage}
                            </p>
                          )}
                        </div>

                        <div className="p-5 ">
                          <button
                            onClick={editFunction}
                            className="btn btn-primary btn-user btn-block rounded-pill"
                          >
                            Edit Data
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditPage;
