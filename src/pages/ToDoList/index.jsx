import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Form, Input, Button, Card } from "antd";

import TaskItem from "./components/TaskItem";

const ToDoList = () => {
  const [taskList, setTaskList] = useState([]);

  const [addTaskForm] = Form.useForm();

  const handleAddTask = (values) => {
    setTaskList([
      {
        id: uuidv4(),
        title: values.title,
        description: values.description,
      },
      ...taskList,
    ]);
    addTaskForm.resetFields();
  };

  const handleEditTask = (values, index) => {
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1, values);
    setTaskList(newTaskList);
  };

  const handleDeleteTask = (index) => {
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
  };

  const renderTaskList = () => {
    return taskList.map((item, index) => {
      return (
        <TaskItem
          key={item.id}
          title={item.title}
          description={item.description}
          index={index}
          handleEditTask={handleEditTask}
          handleDeleteTask={handleDeleteTask}
        />
      );
    });
  };
  return (
    <div>
      <h2>ToDoList</h2>
      <Form
        form={addTaskForm}
        name="ToDoList"
        layout="vertical"
        initialValues={{
          title: "",
          description: "",
        }}
        onFinish={(values) => handleAddTask(values)}
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

        <Button type="primary" block htmlType="submit">
          Thêm
        </Button>
      </Form>
      {renderTaskList()}
    </div>
  );
};

export default ToDoList;
