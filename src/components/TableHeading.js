// import React from "react";

// function TableHeading() {
//   const tableHeading = [
//     {
//       id: 1,
//       name: "Id",
//     },
//     {
//       id: 2,
//       name: "Description",
//     },
//     {
//       id: 3,
//       name: "Created at",
//     },
//     {
//       id: 4,
//       name: "Updated at",
//     },
//     {
//       id: 5,
//       name: "Edit/Delete",
//     },
//   ];
//   return (
//     <>
//       {tableHeading.map((item) => {
//         return (
//           <>
//             <th  onClick={() => handleSort("id")}>{item.name}</th>
//           </>
//         );
//       })}
//     </>
//   );
// }

// export default TableHeading;
// TableHeading.js

// import React from "react";

// const TableHeading = ({ handleSort }) => {
//   return (
//     <>
//       <th onClick={() => handleSort("id")}>ID</th>
//       <th onClick={() => handleSort("description")}>Description </th>
//       <th onClick={() => handleSort("createdAt")}>Created At</th>
//       <th onClick={() => handleSort("updatedAt")}>Updated At</th>
//       <th>Actions</th>
//     </>
//   );
// };

// export default TableHeading;
// TableHeading.js

import React from "react";
import { FaSortUp, FaSortDown } from "react-icons/fa";

const TableHeading = ({ handleSort, sortConfig }) => {
  return (
    <>
      <th onClick={() => handleSort("id")}>ID</th>
      <th onClick={() => handleSort("description")}>
        Description{" "}
        {sortConfig.key === "description" &&
          sortConfig.direction === "ascending" && <FaSortUp />}
        {sortConfig.key === "description" &&
          sortConfig.direction === "descending" && <FaSortDown />}
      </th>
      <th onClick={() => handleSort("createdAt")}>
        Created At{" "}
        {sortConfig.key === "createdAt" &&
          sortConfig.direction === "ascending" && <FaSortUp />}
        {sortConfig.key === "createdAt" &&
          sortConfig.direction === "descending" && <FaSortDown />}
      </th>
      <th onClick={() => handleSort("updatedAt")}>
        Updated At{" "}
        {sortConfig.key === "updatedAt" &&
          sortConfig.direction === "ascending" && <FaSortUp />}
        {sortConfig.key === "updatedAt" &&
          sortConfig.direction === "descending" && <FaSortDown />}
      </th>
      <th>Actions</th>
    </>
  );
};

export default TableHeading;
