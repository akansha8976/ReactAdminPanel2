import React, { useState } from "react";

import { savePost } from "../../components/apiFunctions";
function HelloPage({ onClose }) {
  const [isAddingData, setIsAddingData] = useState(false);
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  var specialCharacters = /[$&+,:;=?@#|'<>.^*()%!-]/;
  var numbers = /[0-9]/g;

  function saveUser(e, onClose) {
    e.preventDefault();

    if (isAddingData) {
      return;
    }

    setIsAddingData(true);
    let trimmedDescription = description.trim();

    if (!trimmedDescription) {
      setErrorMessage("Required description");
      setIsAddingData(false);
    } else if (trimmedDescription.length < 4) {
      setErrorMessage("At least 4 alphabets required..");
      setIsAddingData(false);
    } else if (trimmedDescription.length > 15) {
      setErrorMessage("Not more than 15 alphabets..");
      setIsAddingData(false);
    } else if (
      trimmedDescription.match(specialCharacters) ||
      trimmedDescription.match(numbers)
    ) {
      setErrorMessage("Only alphabets Required..");
      setIsAddingData(false);
    } else {
      setErrorMessage("");
      let data = { description: trimmedDescription };
      savePost(data)
        .then(() => {
          setDescription("");
          onClose();
          window.location.reload();
        })
        .catch((error) => {
          console.error("An error occurred:", error);
        })
        .finally(() => {
          setIsAddingData(false);
        });
    }
  }

  return (
    <div className="container ">
      <div className="row justify-content-center ">
        <div className="col-xl-6 col-lg-12 col-md-9 ">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0 ">
              <div className="row " style={{ height: "350px" }}>
                <i
                  className="fa-solid fa-xmark text-end  mt-2  "
                  onClick={onClose}
                  style={{ marginLeft: "inherit" }}
                />

                <div className="col-lg-10 ms-5">
                  <div className="p-5">
                    <div className="text-center ">
                      <h1 className="h4 text-gray-900 mb-4 text-center">
                        Create Page!
                      </h1>
                    </div>
                    <form className="user">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-user mt-5"
                          name="description"
                          placeholder="Enter Description..."
                          onChange={(e) => {
                            setDescription(e.target.value);
                          }}
                          value={description}
                        />
                        {errorMessage && (
                          <p style={{ color: "red" }} className="mt-2">
                            {errorMessage}
                          </p>
                        )}
                      </div>

                      <button
                        onClick={(e) => saveUser(e, onClose)}
                        disabled={isAddingData}
                        className="btn btn-primary btn-user btn-block mt-5"
                      >
                        {isAddingData ? "Adding Data..." : "Add Data"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelloPage;
