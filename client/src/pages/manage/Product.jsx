import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { BASEURL } from "../../api/BaseApi";
import TableCustom from "../../custom/TableCustom";
import { getProductByUserId } from "../../redux/productAction";
import ProductForm from "./ProductForm";

function Product() {
  const [showForm, setShowForm] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const [pagination, setPagination] = useState({ page: 0, limit: 10 });
  //mode Add or  Edit
  const [mode, setMode] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductByUserId({ ...pagination, userId: user.data.userId }));
  }, [dispatch, pagination, user.data.userId]);

  const { products } = useSelector((state) => state.product);
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
      <TableCustom col={col}>
        {products.map((p) => {
          return (
            <tr key={p.pid}>
              <td className="text-center">
                <input type="checkbox" value={p.pid} />
              </td>
              <td className="text-center">{p.pid}</td>
              <td className="text-center">{p.title}</td>
              <td className="text-center">{p.price}</td>
              <td className="text-center">{p.description}</td>
              <td className="text-center">
                <a href={`${BASEURL}/images/${p.image}`}>{p.image}</a>
              </td>
              <td className="text-center">
                {p.size.map((c) => {
                  return <span className="mr-2 bg-btn-filter p-2 rounded-md">{c.name}</span>;
                })}
              </td>
              <td className="text-center">
                {p.color.map((c) => {
                  return <span className="mr-2 bg-btn-filter p-2 rounded-md">{c.name}</span>;
                })}
              </td>
              <td className="text-center">{p.active ? "Đang bán" : "Ngừng bán"}</td>
            </tr>
          );
        })}
      </TableCustom>
    </div>
  );
}

export default Product;

const col = ["MSV", "Tên sản phẩm", "Giá", "Mô tả", "Ảnh", "Kích cỡ", "Màu sắc", "Đang bán"];
