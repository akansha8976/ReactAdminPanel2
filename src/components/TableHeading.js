import React from "react";

function TableHeading() {
  const tableHeading = [
    {
      id: 1,
      name: "Id",
    },
    {
      id: 2,
      name: "Description",
    },
    {
      id: 3,
      name: "Created at",
    },
    {
      id: 4,
      name: "Updated at",
    },
    {
      id: 5,
      name: "Edit/Delete",
    },
  ];
  return (
    <>
      {tableHeading.map((item) => {
        return (
          <>
            <th>{item.name}</th>
          </>
        );
      })}
    </>
  );
}

export default TableHeading;
