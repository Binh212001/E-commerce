import { Button, Col, Divider, Row, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import baseApi from "../../../api/BaseApi";

function ProductDetail() {
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const p = await baseApi.get("http://localhost:8080/product/" + id);
        setProduct(p.data);
      } catch (err) {
        console.log("🚀 ~ fetchProduct ~ err:", err);
      }
    };
    fetchProduct();
  }, [id]);

  const handleQty = (otp) => {
    if (otp === "-" && qty > 1) {
      setQty(qty - 1);
    } else if (otp === "+") {
      setQty(qty + 1);
    }
  };

  return (
    <div className="mx-7 my-auto p-4">
      <div>
        <Row>
          <Col className="flex justify-center" xs={24} sm={12} md={12}>
            <img src="https://bizweb.dktcdn.net/100/438/408/products/sam7043-den-qsm5057-xnh-10.jpg?v=1709778203083" alt="anh" className="h-[300px] w-auto" />
          </Col>
          <Col xs={24} sm={12} md={12}>
            <Typography>{product.title}</Typography>
            <Typography>{product.description}</Typography>
            <div className="flex gap-5">
              {product?.color?.map((color, index) => (
                <li
                  key={index}
                  onClick={() => {}}
                  className={`w-[30px] h-[30px]`}
                  style={{
                    backgroundColor: color,
                    borderRadius: "50%",
                  }}
                />
              ))}
            </div>
            <Typography>Gia : {product.price} vnd</Typography>
            <div className="btn_group mb-3">
              <br />
              <span className="bg-btn-filter px-3 py-2 rounded-md" onClick={() => handleQty("-")}>
                -
              </span>
              <span className="mx-3">{qty}</span>
              <span className="bg-btn-filter px-3 py-2 rounded-md" onClick={() => handleQty("+")}>
                +
              </span>
            </div>
            <div>
              <div className="mb-2">Total: {qty * product.price}vnd</div>
              <Button>Them va gio hang</Button>
            </div>
          </Col>
        </Row>
        <Divider orientation="left" className="comment" plain={false}>
          <b>Comment</b>
        </Divider>
      </div>
    </div>
  );
}

export default ProductDetail;
