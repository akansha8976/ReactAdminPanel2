import React from "react";

function TableHeading({ sortItems }) {
  return (
    <>
      <th>ID</th>
      <th>
        Description
        <i
          className=" ms-2 fa-solid fa-arrow-up"
          onClick={() => sortItems({ key: 0, ascending: true })}
        />
        <i
          className=" fa-solid fa-arrow-down"
          onClick={() => sortItems({ key: 0, ascending: false })}
        />
      </th>
      <th>
        Created at
        <i
          className=" ms-2 fa-solid fa-arrow-up  "
          onClick={() => sortItems({ key: 1, ascending: true })}
        />
        <i
          className=" fa-solid fa-arrow-down"
          onClick={() => sortItems({ key: 1, ascending: false })}
        />
      </th>
      <th>
        Updated at
        <i
          className="ms-2 fa-solid fa-arrow-up "
          onClick={() => sortItems({ key: 2, ascending: true })}
        />
        <i
          className=" fa-solid fa-arrow-down"
          onClick={() => sortItems({ key: 2, ascending: false })}
        />
      </th>
      <th>Edit/Delete</th>
    </>
  );
}

export default TableHeading;
