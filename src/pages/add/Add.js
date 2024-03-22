import React, { useState } from "react";
import CustomComponent from "../../components/add&EditForm/Form";
import { validateDescription } from "../../components/validation/Validation";
import { savePost } from "../../components/apiFunctions";
function HelloPage({ onClose }) {
  const [isAddingData, setIsAddingData] = useState(false);
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function saveUser(e, onClose) {
    e.preventDefault();

    if (isAddingData) {
      return;
    }

    setIsAddingData(true);
    const error = validateDescription(description);

    if (error) {
      setErrorMessage(error);
      setIsAddingData(false);
      return;
    }

    let trimmedDescription = description.trim();
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

  return (
    <CustomComponent
      onClose={onClose}
      saveUser={saveUser}
      isAddingData={isAddingData}
      description={description}
      setDescription={setDescription}
      errorMessage={errorMessage}
      isEditMode={false} // For HelloPage
    />
  );
}

export default HelloPage;
