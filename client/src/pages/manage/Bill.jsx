import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableCustom from "../../custom/TableCustom";
import { getBills } from "../../redux/billAction";
import { Button, Pagination } from "antd";
import billRest from "../../api/BillRest";

function Bill() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [currentPage, setCurrentPage] = useState(1);
  const [listBillSelect, setListBillSelect] = useState([]);
  const [file, setFile] = useState(null);

  const limit = 12;
  const { bills, count } = useSelector((state) => state.bill);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBills({ limit, page: currentPage - 1 }));
  }, [dispatch, currentPage]);

  const changePage = (p) => {
    setCurrentPage(p);
  };

  const selectBill = (e) => {
    const data = e.target.value;
    setListBillSelect([...listBillSelect, data]);
  };

  const exportBill = async () => {
    const data = await billRest.export(listBillSelect);
    setFile(data);
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
      <div>
        <Button onClick={() => exportBill()}>Xuất hóa đơn</Button>
      </div>
      {/* <input type="file" value={file}  />
      <Button /> */}

      <TableCustom col={col}>
        {bills.map((b) => {
          return (
            <tr key={b.id}>
              <td className="text-center">
                <input
                  type="checkbox"
                  value={b.id}
                  onChange={(e) => selectBill(e)}
                />
              </td>
              <td className="text-center">{b.id}</td>
              <td className="text-center">{b.product.title}</td>
              <td className="text-center">
                {b.account.firstName + b.account.lastName}
              </td>
              <td className="text-center">{b.product.price}</td>
              <td className="text-center">{b.quantity}</td>
              <td className="text-center">{b.quantity * b.product.price}</td>
              <td className="text-center">{b.size}</td>
              <td className="text-center">{b.color}</td>
              <td className="text-center">{b.createdAt}</td>
            </tr>
          );
        })}
      </TableCustom>
      <div className="text-center mt-4">
        <Pagination
          total={count}
          pageSize={limit}
          current={currentPage}
          onChange={(currentPage) => changePage(currentPage)}
        />
      </div>
    </div>
  );
}
const col = [
  "MSV",
  "Tên sản phẩm",
  "Người mua",
  "Giá",
  "Số lượng",
  "Tổng",
  "Kích cỡ",
  "Màu sắc",
  "Ngày bán",
];

export default Bill;
