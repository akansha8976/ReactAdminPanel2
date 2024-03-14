const apiUrl = "https://curd-demo-omega.vercel.app/api/posts";

export const fetchData = () => {
  return fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .catch((errorMessage) => {
      throw new Error("Data not found, Invalid Request");
    });
};

export const deleteUser = (_id) => {
  return fetch(`${apiUrl}/${_id}`, {
    method: "DELETE",
  }).catch((error) => {
    throw new Error("Error occurred while deleting user");
  });
};

export const postData = (data) => {
  return fetch(apiUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to add data");
      }
      return response.json();
    })
    .catch((errorMessage) => {
      throw new Error("Failed to add data");
    });
};

export const putData = async (_id, newData) => {
  try {
    const response = await fetch(`${apiUrl}/${_id}`, {
      method: "PUT",
      body: JSON.stringify(newData),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to edit data");
    }

    const data = await response.json();
    return data;
  } catch (errorMessage) {
    throw new Error("Failed to edit data");
  }
};
