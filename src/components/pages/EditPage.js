import React, { useState, useEffect } from "react";
import { putData } from "../apiFunctions";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../Loading";

function EditPage({ item }) {
  const [errorMessage1, setErrorMessage1] = useState("");
  const [isAddingData, setIsAddingData] = useState(false); // State to track button click
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
    // If button is already clicked, return
    if (isAddingData) {
      return;
    }

    // Set button to clicked state
    setIsAddingData(true);

    const trimmedDescription = description.trim(); // Trim the input description so white sapaces not add

    if (!trimmedDescription) {
      setErrorMessage("Empty description is not allowed");
    } else if (trimmedDescription.length < 4) {
      setErrorMessage("At least 4 alphabets required");
    } else if (trimmedDescription.length > 15) {
      setErrorMessage("Not more than 15 alphabets..");
    } else if (
      trimmedDescription.match(specialCharacters) ||
      trimmedDescription.match(numbers)
    ) {
      setErrorMessage("Only alphabets are allowed");
    } else {
      try {
        setErrorMessage("");
        await putData(params._id, { description: trimmedDescription }); // Use the trimmed description
        alert("Edit Data successfully");
        navigate("/fetchapi");
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setErrorMessage1("Resource not found");
        } else {
          console.error("An error occurred while editing data:", error);
        }
      }
    }

    setIsAddingData(false);
  };
  if (errorMessage1)
    return <h1 className="text-center m-5">Error : {errorMessage1}</h1>;

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
                            disabled={isAddingData} // Disable button
                            className="btn btn-primary btn-user btn-block rounded-pill"
                          >
                            {isAddingData ? "Editing Data..." : "Edit Data"}
                          </button>
                        </div>
                        {loading === true ? (
                          <div className=" my-3">
                            {" "}
                            <Loading />
                          </div>
                        ) : null}
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
