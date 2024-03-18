import { Button, Col, Divider, Row, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../../redux/productAction';
import baseApi from '../../../api/BaseApi';

function ProductDetail() {
  const {id} = useParams();
  const [qty, setQty] = useState(1);
  const [product, setProduct]= useState({})
  console.log("🚀 ~ ProductDetail ~ product:", product)
  


  useEffect(()=>{
    const fetchProduct = async() =>{
      const p =  await baseApi.get("http://localhost:8080/product/"+id)
      setProduct(p.data)
    }
    fetchProduct()
  },[id])


  
  const handleQty = (otp) => {
   otp === "+" ?  setQty(qty + 1):setQty(qty - 1)
  };


  return (
    <div className="mx-7 my-auto p-4">
      <div >
        <Row>
          <Col
           className='flex justify-center'
            xs={24}
            sm={12}
            md={12}
           >
            <img
              src=""
              alt='anh'
              className='h-[300px] w-auto'
            />
          </Col>
          <Col xs={24} sm={12} md={12}>
            <Typography>{product.title}</Typography>
            <Typography>{product.description}</Typography>
            <div
             className='flex gap-5'>
              {product.color.map((color, index) => (
                <li
                  key={index}
                  onClick={() => {
          
                  }}
                  className={`w-[30px] h-[30px]`}
                  style={{
                    backgroundColor: color,
                    borderRadius: '50%',
                    
                  }}
                />
              ))}
            </div>
            <Typography>Gia : {product.price} vnd</Typography>
            <div className='btn_group'>
              <br />
              <button onClick={() => handleQty('-')}>-</button>
              <span>{qty}</span>
              <button onClick={() => handleQty('+')}>+</button>
            </div>
            <div>
              <div>Total: {qty * product.price }vnd</div>
              <br />

              <Button >
                Them va gio hang
              </Button>
            </div>
          </Col>
        </Row>
        <Divider orientation='left' className='comment' plain={false}>
          <b>Comment</b>
        </Divider>
      </div>
    </div>
  );
}

export default ProductDetail;
