import React from "react";

const CustomComponent = ({
  onClose,
  saveUser,
  isAddingData,
  description,
  setDescription,
  errorMessage,
  isEditMode,
}) => {
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
                        {isEditMode ? "Edit Page!" : "Create Page!"}
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
                        {isAddingData
                          ? isEditMode
                            ? "Updating Data..."
                            : "Adding Data..."
                          : isEditMode
                          ? "Update Data"
                          : "Add Data"}
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
};

export default CustomComponent;
