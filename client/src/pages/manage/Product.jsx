import { Button, Table } from "antd";
import React, { useState } from "react";
import ProductForm from "./ProductForm";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getProductByUserId } from "../../redux/productAction";
import { useParams } from "react-router-dom";

function Product() {
  const [showForm, setShowForm] = useState(false);
  const [user, setUser] = useState();
  const { userId } = useParams();
  console.log("🚀 ~ Product ~ user:", user);

  const [pagination, setPagination] = useState({ page: 0, limit: 10 });
  //mode Add or  Edit
  const [mode, setMode] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  useEffect(() => {
    dispatch(getProductByUserId({ ...pagination, userId }));
  }, [dispatch, pagination]);

  const { products } = useSelector((state) => state.product);
  console.log("🚀 ~ Product ~ products:", products);
  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  const closeForm = () => {
    setShowForm(false);
    toast("Thêm sản phẩm thành công.");
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
      <ToastContainer />
      {showForm ? (
        <ProductForm mode={mode} closeForm={closeForm} />
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
