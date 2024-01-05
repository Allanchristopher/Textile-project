import React, { useEffect, useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import "./Login.css";
function Login() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState(false);
  useEffect(() => {
    setClientReady(true);
  }, []);
  const onFinish = (values) => {
    console.log("Finish:", values);
    navigate("/dashboard");

  };
  const customButtonStyle = {
    backgroundColor: "#F05658", // Set your custom color here
    borderColor: "#F05658", // Set the border color if needed
  };
  return (
    <div className="Login">
      <div className="Login-container">
        <div className="Login-container-1">
          <p className="Logo-icon">
            <UserOutlined />
          </p>
        </div>
        <div className="Login-container-2">
          <p className="Login-heading">User Login</p>
          <Form form={form} name="horizontal_login" onFinish={onFinish}>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={customButtonStyle}
                //   disabled={
                //     !clientReady ||
                //     !form.isFieldsTouched(true) ||
                //     !!form
                //       .getFieldsError()
                //       .filter(({ errors }) => errors.length).length
                //   }
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
