import React, { useState, useEffect } from "react";
import { editPost } from "../../components/apiFunctions";
import { useParams, useNavigate } from "react-router-dom";

function EditPage({ itemId, onClose, tempDescription }) {
  const [errorMessage1, setErrorMessage1] = useState("");
  const [isAddingData, setIsAddingData] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [description, setDescription] = useState("");
  const params = useParams();

  var specialCharacters = /[$&+,:;=?@#|'<>.^*()%!-]/;
  var numbers = /[0-9]/g;

  const getProductDetails = async () => {
    let result = await fetch(
      `https://curd-demo-omega.vercel.app/api/posts/${params._id}`
    );

    result = await result.json();

    setDescription(tempDescription);
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  const editFunction = async () => {
    if (isAddingData) {
      return;
    }

    setIsAddingData(true);

    const trimmedDescription = description.trim();

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

        await editPost(itemId, { description: trimmedDescription });

        onClose();
        window.location.reload();
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
          <div className="col-xl-6 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row " style={{ height: "350px" }}>
                  <i
                    className="fa-solid fa-xmark text-end me-2"
                    onClick={onClose}
                  />
                  <div className="col-lg-10 ms-5">
                    <div className="p-5">
                      <div className="text-center ">
                        <h1 className="h4 text-gray-900 mb-4 text-center">
                          Edit Page!
                        </h1>
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
                            onClick={(e) => editFunction(e, onClose)}
                            disabled={isAddingData} // Disable button
                            className="btn btn-primary btn-user btn-block rounded-pill"
                          >
                            {isAddingData ? "Editing Data..." : "Edit Data"}
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
