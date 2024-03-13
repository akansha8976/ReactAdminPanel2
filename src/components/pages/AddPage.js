import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { postData } from "../apiFunctions";
function HelloPage() {
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  var specialCharacters = /[$&+,:;=?@#|'<>.^*()%!-]/;
  var numbers = /[0-9]/g;
  const navigate = useNavigate();
  function saveUser(e) {
    e.preventDefault();
    let data = { description };

    if (description.length == "") {
      setErrorMessage("Required description");
    } else if (description.length < 4) {
      setErrorMessage("At least 4  alphabets required..");
    } else if (
      description.match(specialCharacters) ||
      description.match(numbers)
    ) {
      setErrorMessage("Only alphabets Required..");
    } else {
      setErrorMessage("");
      postData(data)
        .then(() => {
          alert("Data added successfully");
          setDescription("");
          navigate("/fetchapi");
        })
        .catch((error) => {
          console.error("An error occurred:", error);
        });
    }
  }

  if (error) return <p>Error: {error.message}</p>;
  return (
    <div class="container ">
      <div class="row justify-content-center ">
        <div class="col-xl-10 col-lg-12 col-md-9">
          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
              <div class="row " style={{ height: "500px" }}>
                <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="text-center mt-5">
                      <h1 class="h4 text-gray-900 mb-4 ">Create Page!</h1>
                    </div>
                    <form class="user">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control form-control-user mt-5"
                          name="description"
                          placeholder="Enter Description..."
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

                      <button
                        onClick={saveUser}
                        class="btn btn-primary btn-user btn-block mt-5"
                      >
                        Add Data
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
