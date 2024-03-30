import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { BASEURL } from "../../api/BaseApi";
import productRest from "../../api/ProductRest";
import TableCustom from "../../custom/TableCustom";
import { getProductByUserId } from "../../redux/productAction";
import ProductForm from "./ProductForm";

function Product() {
  const [showForm, setShowForm] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [listStopSale, setListStopSale] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const { userId } = useParams();
  //mode Add or  Edit
  const [mode, setMode] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [current, setCurrent] = useState(1);
  const limit =12;
  const { products , count } = useSelector((state) => state.product);
  

  useEffect(() => {
    dispatch(getProductByUserId({limit,page:current-1, userId }));
  }, [dispatch, current , userId]);

  const changePage = (currentPage) => {
    setCurrent(currentPage);
  };


  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  const handleStopSell = async () => {
    if (listStopSale.length === 0) {
      toast("Vui lòng chọn sản phẩm không bán nữa.");
      return;
    }
    try {
      await productRest.stopSale(listStopSale);
      dispatch(getProductByUserId({page:current-1 , limit, userId }));
      toast("Thành công");
    } catch (error) {
      console.log("🚀 ~ handleStopSell ~ error:", error)
      toast("Thất bại");
    }
  };

  const closeForm = () => {
    setShowForm(false);
    toast("Thêm sản phẩm thành công.");
  };

  const searchProduct = () => {
    navigate(`/management/product/search/${keyword}`);
  };

  const selectProduct = (e) => {
    const data = e.target.value;
    setListStopSale([...listStopSale, data]);
  };
  
  if (!user?.data?.sellers) {
    return (
      <div
        className="text-center align-middle flex flex-col justify-center"
        style={{ height: "60vh" }}
      >
        <h3 className="font-bold text-yellow-yody text-3xl">
          Bạn không có quyền truy cập trang này.
        </h3>
      </div>
    );
  }
  return (
    <div className="container m-auto">
      <ToastContainer />
      {showForm ? (
        <ProductForm mode={mode} closeForm={closeForm} />
      ) : (
        <div className="my-4 flex justify-between items-center">
          <div>
            <Button className="mr-4" onClick={() => handleShowForm()}>
              Thêm sản phẩm
            </Button>
            <Button onClick={() => handleStopSell()}>Ngừng bán</Button>
          </div>
          <div className="flex gap-2">
            <Input onChange={(e) => setKeyword(e.target.value)} />
            <Button className="items-center" onClick={() => searchProduct()}>
              <SearchOutlined />
            </Button>
          </div>
        </div>
      )}

      <TableCustom col={col}>
        {products.map((p) => {
          return (
            <tr key={p.pid}>
              <td className="text-center">
                <input
                  type="checkbox"
                  value={p.pid}
                  name="pid"
                  onChange={(e) => {
                    selectProduct(e);
                  }}
                />
              </td>
              <td className="text-center">{p.pid}</td>
              <td className="text-center">{p.title}</td>
              <td className="text-center">{p.price}</td>
              <td className="text-center">{p.description}</td>
              <td className="text-center">
                <a href={`${BASEURL}/images/${p.image}`}>{p.image}</a>
              </td>
              <td className="text-center">
                {p.size.map((c , index) => {
                  return (
                    <span  key={index} className="mr-2 bg-btn-filter p-2 rounded-md">
                      {c.name}
                    </span>
                  );
                })}
              </td>
              <td className="text-center">
                {p.color.map((c) => {
                  return (
                    <span className="mr-2 bg-btn-filter p-2 rounded-md">
                      {c.name}
                    </span>
                  );
                })}
              </td>
              <td className="text-center">
                {p.active ? "Đang bán" : "Ngừng bán"}
              </td>
            </tr>
          );
        })}
      </TableCustom>
      <div  className="text-center mt-4">

      <Pagination total={count} pageSize={limit}current={current} onChange={(currentPage) => changePage(currentPage)} />
      </div>
    </div>
  );
}

export default Product;

const col = [
  "MSV",
  "Tên sản phẩm",
  "Giá",
  "Mô tả",
  "Ảnh",
  "Kích cỡ",
  "Màu sắc",
  "Đang bán",
];
