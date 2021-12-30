import React from "react";
import { Form, Input, Button, Checkbox, Card, InputNumber } from "antd";

const CreateProductForm = ({ handleAddProduct }) => {
  const [createProductForm] = Form.useForm();

  return (
    <div>
      <h2>Form đăng ký sản phẩm</h2>

      <Card style={{ width: "300px", margin: "0 auto" }}>
        <Form
          form={createProductForm}
          name="CreateProductForm"
          layout="vertical"
          initialValues={{
            name: "",
            price: 0,
            isNew: false,
          }}
          onFinish={(values) => handleAddProduct(values)}
        >
          <Form.Item
            label="Tên sản phẩm"
            name="name"
            rules={[
              {
                required: true,
                message: "Bạn phải nhập tên sản phẩm",
              },
              {
                min: 4,
                message: "Tên sản phẩm phải nhiều hơn 4 ký tự",
              },
              {
                max: 50,
                message: "Tên sản phẩm phải ít hơn 50 ký tự",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Giá"
            name="price"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập giá",
              },

              {
                type: "number",
                min: 10000,
                message: "Giá sản phẩm phải lớn hơn 10.000₫!",
              },
            ]}
          >
            <InputNumber
              formatter={(value) =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
              style={{ width: "100%" }}
            />
          </Form.Item>

          <Form.Item
            name="isNew"
            valuePropName="checked"
            wrapperCol={{
              offset: 4,
              span: 20,
            }}
          >
            <Checkbox>Is New</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 4,
              span: 20,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default CreateProductForm;
