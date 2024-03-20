import React from "react";

function Bill() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user?.data?.sellers) {
    return (
      <div className="text-center align-middle flex flex-col justify-center" style={{ height: "60vh" }}>
        <h3 className="font-bold text-yellow-yody text-3xl">Bạn không có quyền truy cập trang này.</h3>
      </div>
    );
  }
  return <div>Bill</div>;
}

export default Bill;
