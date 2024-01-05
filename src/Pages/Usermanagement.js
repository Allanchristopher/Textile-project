import React from "react";
import "./Usermanagement.css";
import {
  Form,
  Input,
  Select,
  Button,
  Table,
} from "antd";

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
  {
    key: '3',
    name: 'Allan',
    age: 23,
    address: '10 Downing Street',
  },
];



const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];





function Usermanagement() {
  const [form] = Form.useForm();
  const { Option } = Select;
  const onFinish = async (values) => {
    console.log("Form values:", values);
  };
  return (
    <div className="Usermanagement">
      <p className="Adduser-heading">Add User</p>

      <div className="Adduser-inputs-container">
        <Form className="Adduser-form" form={form} onFinish={onFinish}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter a name" }]}
          >
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name="phoneNumber"
            rules={[{ required: true, message: "Please enter a phone number" }]}
          >
            <Input placeholder="Phone Number" />
          </Form.Item>
          <Form.Item label="Access Page" name="accessPage">
            <Select mode="multiple" placeholder="Access Page">
              <Option value="Dashboard">Dashboard</Option>
              <Option value="User Management">User Management</Option>
              <Option value="Rider Management">Rider Management</Option>
              <Option value="Delivery Management">Delivery Management</Option>
              <Option value="Assign Routes">Assign Routes</Option>
              <Option value="Cashier Management">Cashier Management</Option>
              <Option value="Rider Payment">Rider Payment</Option>
              <Option value="Time Sheet">Time Sheet</Option>
              <Option value="Reports">Reports</Option>
              <Option value="Settings">Settings</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Delivery Management Access"
            name="accessdeliveryManagement"
          >
            <Select mode="multiple" placeholder="Access Tabs">
              <Option value="Un-Assigned Orders">Un AssignOrders</Option>
              <Option value="Assigned Orders">AssignOrders</Option>
              <Option value="Orders History">Order History</Option>
              <Option value="Cancel / Reject Orders">
                Cancel / Reject Orders
              </Option>
              <Option value="Un-delivered Order">Un-delivered Order</Option>
              <Option value="Reschedule Orders">Reschedule Orders</Option>
              <Option value="Cod orders">Cod orders</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Role" name="role">
            <Input placeholder="Role" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" className="Adduser-submit-btn">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      
      <p className="Adduser-heading">User List</p>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}

export default Usermanagement;
