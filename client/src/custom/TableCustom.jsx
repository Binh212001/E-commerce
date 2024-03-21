import React from "react";

function TableCustom({ col, children }) {
  console.log("🚀 ~ TableCustom ~ col:", col);
  return (
    <div class="overflow-x-auto">
      <table class="table-auto w-full">
        <thead>
          <tr class="bg-gray-200">
            <th class="px-4 py-2">
              <input type="checkbox" />
            </th>
            {col.map((title, index) => {
              return (
                <th class="px-4 py-2" key={index}>
                  {title}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

export default TableCustom;
