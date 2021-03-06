import React, { useState } from "react";
import { Form, Input, Button, Card, Space } from "antd";

const TaskItem = ({
  title,
  description,
  index,
  handleEditTask,
  handleDeleteTask,
}) => {
  const [isEdit, setIsEdit] = useState(false);

  const [editTaskForm] = Form.useForm();

  const renderItemView = () => {
    return (
      <>
        <div>Tiêu đề: {title}</div>
        <div>Mô tả: {description}</div>
      </>
    );
  };

  const renderItemForm = () => {
    return (
      <Form
        form={editTaskForm}
        name={`editTaskForm-${index}`}
        layout="vertical"
        initialValues={{
          title: title,
          description: description,
        }}
        onFinish={(values) => {
          handleEditTask(values, index);
          setIsEdit(false);
        }}
      >
        <Form.Item
          label="Tiêu đề"
          name="title"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tiêu đề!",
            },
          ]}
        >
          <Input placeholder="Tiêu đề" />
        </Form.Item>
        <Form.Item
          label="Mô tả"
          name="description"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mô tả!",
            },
          ]}
        >
          <Input.TextArea
            placeholder="Mô tả"
            autoSize={{ minRows: 2, maxRows: 6 }}
          />
        </Form.Item>
      </Form>
    );
  };

  return (
    <Card
      key={index}
      size="small"
      extra={
        <Space>
          {isEdit ? (
            <>
              <Button type="primary" onClick={() => editTaskForm.submit()}>
                Xác nhận
              </Button>
              <Button type="primary" ghost onClick={() => setIsEdit(false)}>
                Huỷ
              </Button>
            </>
          ) : (
            <Button type="primary" ghost onClick={() => setIsEdit(true)}>
              Sửa
            </Button>
          )}
          <Button type="danger" ghost onClick={() => handleDeleteTask(index)}>
            Xoá
          </Button>
        </Space>
      }
      style={{ marginTop: 16 }}
    >
      {isEdit ? renderItemForm() : renderItemView()}
    </Card>
  );
};

export default TaskItem;
