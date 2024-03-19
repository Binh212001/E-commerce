import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../../../../components/product/ProductItem";
import { getProduct } from "../../../../redux/productAction";
import Filter from "../../../../components/Filter";

function Content() {
  const [pagination, setPagination] = useState({ page: 0, limit: 10 });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(pagination));
  }, [dispatch, pagination]);

  const { products } = useSelector((state) => state.product);

  return (
    <div className="my-[50px]">
      <div>
        <div className="text-center font-bold my-12 ">
          <h2 className="text-yellow-yody text-3xl">POLO YODY - THOẢI MÁI, TỰ TIN MỌI LÚC MỌI NƠI </h2>
        </div>

        <div className="flex">
          <div style={{ width: "20%", height: "300px" }}>
            <Filter />
          </div>
          <div style={{ width: "80%" }} className="grid-container">
            {products?.map((item, index) => (
              <ProductItem key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
