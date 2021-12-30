import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Card,
  Tabs,
  Select,
  DatePicker,
  notification,
} from "antd";

const LoginAndRegisterForm = () => {
  const { TabPane } = Tabs;
  const [userList, setUserList] = useState([]);
  const [registerForm] = Form.useForm();
  const [loginForm] = Form.useForm();

  const handleLogin = (values) => {
    const user = userList.find(
      (item) => item.email === values.email && item.password === values.password
    );
    if (user) {
      notification.success({
        message: "Đăng nhập thành công!",
      });
      loginForm.resetFields();
    } else {
      notification.error({
        message: "Đăng nhập thất bại!",
      });
      loginForm.resetFields();
    }
  };

  const handleRegister = (values) => {
    setUserList([...userList, values]);
    registerForm.resetFields();
    notification.success({
      message: "Đăng ký thành công!",
    });
  };

  return (
    <div>
      <h2>Đăng nhập/ Đăng ký</h2>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Đăng nhập" key="1">
          <Card style={{ width: "300px", margin: "0 auto" }}>
            <Form
              form={loginForm}
              name="login"
              layout="vertical"
              initialValues={{
                email: "",
                password: "",
              }}
              onFinish={(values) => handleLogin(values)}
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập email!",
                  },

                  {
                    type: "email",
                    message: "Email không hợp lệ!",
                  },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>

              <Form.Item
                label="Mật khẩu"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập mật khẩu!",
                  },

                  {
                    min: 6,
                    max: 16,
                    message: "Mật khẩu phải có từ 6-16 ký tự",
                  },
                ]}
              >
                <Input.Password placeholder="Mật khẩu" />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 4,
                  span: 20,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Đăng nhập
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </TabPane>
        <TabPane tab="Đăng ký" key="2">
          <Card style={{ width: "300px", margin: "0 auto" }}>
            <Form
              form={registerForm}
              name="register"
              layout="vertical"
              initialValues={{
                username: "",
                email: "",
                gender: "male",
                password: "",
                confirmPassword: "",
              }}
              onFinish={(values) => handleRegister(values)}
            >
              <Form.Item
                label="Tên đăng nhập"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Bạn phải nhập tên đăng nhập",
                  },
                  {
                    min: 4,
                    max: 50,
                    message: "Tên đăng nhập phải từ 6-16 ký tự",
                  },
                  {},
                ]}
              >
                <Input placeholder="Tên đăng nhập" />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập email!",
                  },

                  {
                    type: "email",
                    message: "Vui lòng nhập lại email!",
                  },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>

              <Form.Item label="Giới tính" name="gender">
                <Select>
                  <Select.Option value="male">Male </Select.Option>
                  <Select.Option value="female">Female </Select.Option>
                  <Select.Option value="other">Other </Select.Option>
                </Select>
              </Form.Item>

              <Form.Item label="Ngày sinh" name="birthday">
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item
                label="Mật khẩu"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập mật khẩu!",
                  },

                  {
                    min: 6,
                    max: 16,
                    message: "Mật khẩu phải có từ 6-16 ký tự",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                label="Xác nhận mật khẩu"
                name="confirmPassword"
                dependencies={["password"]}
                rules={[
                  {
                    required: true,
                    message: "Bạn phải xác nhận mật khẩu!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error("Mật khẩu không khớp!"));
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 4,
                  span: 20,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Đăng ký
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default LoginAndRegisterForm;
