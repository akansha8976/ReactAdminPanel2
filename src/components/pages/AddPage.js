import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postData } from "../apiFunctions";

function HelloPage() {
  const [isAddingData, setIsAddingData] = useState(false); // State for button click
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  var specialCharacters = /[$&+,:;=?@#|'<>.^*()%!-]/;
  var numbers = /[0-9]/g;
  const navigate = useNavigate();

  function saveUser(e) {
    e.preventDefault();

    if (isAddingData) {
      return;
    }

    // Set button to clicked
    setIsAddingData(true);
    let trimmedDescription = description.trim(); // Trim the input description

    if (!trimmedDescription) {
      setErrorMessage("Required description");
      setIsAddingData(false); // Reset button state
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
      let data = { description: trimmedDescription }; // Use trimmed description
      postData(data)
        .then(() => {
          alert("Data added successfully");
          setDescription(""); // Clear input field
          navigate("/fetchapi");
        })
        .catch((error) => {
          console.error("An error occurred:", error);
        })
        .finally(() => {
          setIsAddingData(false); // Reset button after operation
        });
    }
  }

  return (
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
                      <h1 className="h4 text-gray-900 mb-4 ">Create Page!</h1>
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
                        onClick={saveUser}
                        disabled={isAddingData} // Disable button only when data added
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
