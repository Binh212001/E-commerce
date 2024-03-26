import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import TableCustom from "../../custom/TableCustom";
import { getBills } from "../../redux/billAction";
import { useDispatch, useSelector } from "react-redux";

function Bill() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [pagination, setPagination] = useState({ page: 0, limit: 10 });
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getBills(pagination));
  }, [dispatch, pagination ]);

  const {bills} = useSelector(state=>state.bill)
  
  if (!user?.data?.sellers) {
    return (
      <div className="text-center align-middle flex flex-col justify-center" style={{ height: "60vh" }}>
        <h3 className="font-bold text-yellow-yody text-3xl">Bạn không có quyền truy cập trang này.</h3>
      </div>
    );
  }
  return (
    <div className="container m-auto">
      <TableCustom col={col}>
        {bills.map((b) => {
          return (
            <tr key={b.id}>
              <td className="text-center">
                <input type="checkbox" value={b.id} />
              </td>
              <td className="text-center">{b.id}</td>
              <td className="text-center">{b.product.title}</td>
              <td className="text-center">{b.account.firstName+b.account.lastName}</td>
              <td className="text-center">{b.product.price}</td>
              <td className="text-center">
                {b.quantity}
              </td>
              <td className="text-center">
              {b.quantity*b.product.price}
              </td>
              <td className="text-center">
              {b.size}
              </td>
              <td className="text-center">{b.color}</td>
              <td className="text-center">{b.createdAt}</td>
            </tr>
          );
        })}
      </TableCustom>
    </div>
  );
}
const col = ["MSV", "Tên sản phẩm", "Người mua", "Giá", "Số lượng", "Tổng", "Kích cỡ", "Màu sắc", "Ngày bán"];

export default Bill;
