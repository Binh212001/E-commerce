import { DownOutlined, UpOutlined } from "@ant-design/icons";
import React, { useState } from "react";

const Filter = () => {
  const priceRange = [
    {
      title: "Nhỏ hơn 100.000đ",
    },
    {
      title: "Từ 100.000đ - 200.000đ",
    },
    {
      title: "Từ 200.000đ - 350.000đ",
    },
    {
      title: "Từ 350.000đ - 500.000đ",
    },
    {
      title: "Từ 500.000đ - 700.000đ",
    },
    {
      title: "Lớn hơn 700.000đ",
    },
  ];
  const [size, setSize] = useState(false);
  const [color, setColor] = useState(false);

  return (
    <div className="pr-12">
      <div>
        <div className="flex justify-between mb-2">
          <h4>Kích thước</h4>
          {!size ? (
            <DownOutlined onClick={() => setSize(!size)} />
          ) : (
            <UpOutlined onClick={() => setSize(!size)} />
          )}
        </div>
        {size ? (
          <div className="flex gap-4">
            <span className="bg-btn-filter px-4 py-2 rounded-md">SM</span>
            <span className="bg-btn-filter px-4 py-2 rounded-md">M</span>
            <span className="bg-btn-filter px-4 py-2 rounded-md">L</span>
            <span className="bg-btn-filter px-4 py-2 rounded-md">XL</span>
            <span className="bg-btn-filter px-4 py-2 rounded-md">2XL</span>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div>
        <div className="flex justify-between">
          <h4>Màu sắc</h4>
          {!color ? (
            <DownOutlined onClick={() => setColor(!color)} />
          ) : (
            <UpOutlined onClick={() => setColor(!color)} />
          )}
        </div>
        {color ? (
          <div className="flex gap-4">
            <span className="bg-btn-filter px-4 py-2 rounded-md">Xanh</span>
            <span className="bg-btn-filter px-4 py-2 rounded-md">Do</span>
            <span className="bg-btn-filter px-4 py-2 rounded-md">Den</span>
            <span className="bg-btn-filter px-4 py-2 rounded-md">Trang</span>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div>
        <div className="flex justify-between">
          <h4>Khoảng giá (VNĐ)</h4>
        </div>
        {priceRange.map((data, index) => {
          return (
            <div className="flex gap-2" key={index}>
              <input type="checkbox" name="price" />
              <p>{data.title}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-2">
        <div className="flex gap-3 align-middle items-center ">
          <h4>Xắp xếp</h4>
          <select className="block bg-btn-filter  p-2 ">
            <option value=""></option>
            <option value="asc">Tăng dần</option>
            <option value="dasc">Giảm dần</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default Filter;
