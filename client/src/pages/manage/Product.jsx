import { Button, Table } from "antd";
import React, { useState } from "react";
import ProductForm from "./ProductForm";
import { useEffect } from "react";

function Product() {
  const [showForm, setShowForm] = useState(false);
  const [user, setUser] = useState();
  //mode Add or  Edit
  const [mode, setMode] = useState(true);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  const handleShowForm = () => {
    setShowForm(!showForm);
  };
  console.log(user);
  if (!user?.data?.sellers) {
    return (
      <div className="text-center align-middle flex flex-col justify-center" style={{ height: "60vh" }}>
        <h3 className="font-bold text-yellow-yody text-3xl">Bạn không có quyền truy cập trang này.</h3>
      </div>
    );
  }
  return (
    <div className="container m-auto">
      {showForm ? (
        <ProductForm mode={mode} />
      ) : (
        <div className="my-4">
          <Button onClick={() => handleShowForm()}>Thêm sản phẩm</Button>
        </div>
      )}
      <Table dataSource={dataSource} columns={columns} pagination={false} className="mb-7 " />
    </div>
  );
}

export default Product;

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];
