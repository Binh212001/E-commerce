import { Button, Form, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import authRest from "../../api/AuthRest";
function Auth() {
  const navigate = useNavigate();
  // const { isLogin } = useSelector((state) => state.user);

  const onFinish = async (values) => {
    try {
      const user = await authRest.login(values);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } catch (error) {
      toast(error?.response?.data?.message);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="wrapper">
      <ToastContainer />
      <div className="container">
        <Form
          name="basic"
          labelCol={{
            span: 4,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Tài khoản"
            name="username"
            rules={[
              {
                required: true,
                message: "Vui lòng điền tài khoản.",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[
              {
                required: true,
                message: "Vui lòng điền mật khẩu",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Auth;
