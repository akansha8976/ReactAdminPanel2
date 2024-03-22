import React, { useState, useEffect } from "react";
import { editPost } from "../../components/apiFunctions";
import { useParams } from "react-router-dom";
import CustomComponent from "../../components/Add&EditForm/Form";
import { validateDescription } from "../../components/Validation/Validation";
function EditPage({ itemId, onClose, tempDescription }) {
  const [errorMessage1, setErrorMessage1] = useState("");
  const [isAddingData, setIsAddingData] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [description, setDescription] = useState("");
  const params = useParams();

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
    const error = validateDescription(trimmedDescription);

    if (error) {
      setErrorMessage(error);
      setIsAddingData(false);
      return;
    }

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

    setIsAddingData(false);
  };

  if (errorMessage1)
    return <h1 className="text-center m-5">Error : {errorMessage1}</h1>;

  return (
    <>
      <CustomComponent
        onClose={onClose}
        saveUser={editFunction}
        isAddingData={isAddingData}
        description={description}
        setDescription={setDescription}
        errorMessage={errorMessage}
        isEditMode={true} // For EditPage
      />
    </>
  );
}

export default EditPage;
