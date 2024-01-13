import React, { useState } from "react";
import "./Addproducts.css";
import { Form, Input, Select, DatePicker, Button, Table } from "antd";
import csv from "../Assests/sample.csv";

function Addproducts() {
  const [form] = Form.useForm();
  const { Option } = Select;
  const [fontSize, setFontSize] = useState("default");
  const onFinish = async (values) => {
    console.log("Form values:", values);
  };
  const handleButtonClick = (value) => {
    setFontSize(value);
  };
  return (
    <div className="Addproducts">
      <p className="Addproducts-heading">Add single Product</p>
      <div className="Add-product-inputs">
        <Form className="Addproduct-form" form={form} onFinish={onFinish}>
          <Form.Item
            label="Group"
            name="group"
            rules={[{ required: true, message: "Please enter a group" }]}
          >
            <Select mode="multiple" placeholder="select group">
              <Option value="Dashboard">Ready made</Option>
              <Option value="User Management">Inner</Option>
              <Option value="Rider Management">Saree</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Vendor Name"
            name="vendorname"
            rules={[{ required: true, message: "Please enter a vendor name" }]}
          >
            <Select mode="multiple" placeholder="select Vendor Name">
              <Option value="Dashboard">Dani</Option>
              <Option value="User Management">Kumar</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Product Name"
            name="productname"
            rules={[{ required: true, message: "Please enter a product name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Purchase price"
            name="purchaseprice"
            rules={[
              { required: true, message: "Please enter a Purchase price" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="GST"
            name="gst"
            rules={[{ required: true, message: "Please enter a GST" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Miscellaneous AMT"
            name="MiscellaneousAMT"
            rules={[
              { required: true, message: "Please enter a Miscellaneous AMT" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Selling price"
            name="sellingprice"
            rules={[
              { required: true, message: "Please enter a Selling price" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Reorder stock"
            name="reorderstock"
            rules={[
              { required: true, message: "Please enter a Reorder stock" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="QTY"
            name="qty"
            rules={[{ required: true, message: "Please enter a QTY" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Size"
            name="size"
            rules={[{ required: true, message: "Please enter a Size" }]}
          >
            <Select mode="multiple" placeholder="select Size">
              <Option value="Dashboard">23</Option>
              <Option value="User Management">32</Option>
              <Option value="Dashboard">45</Option>
              <Option value="User Management">54</Option>
              <Option value="Dashboard">54</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Design type"
            name="designtype"
            rules={[{ required: true, message: "Please enter a Design type" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="In Date"
            name="indate"
            rules={[{ required: true, message: "Please enter an In Date" }]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
          <div>
            <Form.Item
              label="Color set"
              name="colorset"
              rules={[{ required: true, message: "Please enter a Color set" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="W S Rate"
              name="wsrate"
              rules={[{ required: true, message: "Please enter a W S Rate" }]}
            >
              <Input />
            </Form.Item>
          </div>
          <Form.Item
            label="Calculator"
            name="calculator"
            rules={[{ required: true, message: "Please enter a calculator" }]}
          >
            <Input style={{ height: "85px" }} />
          </Form.Item>
          <div>
            <Form.Item
              label="Description"
              name="description"
              rules={[
                { required: true, message: "Please enter a Description" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Net Rate"
              name="netrate"
              rules={[{ required: true, message: "Please enter a Net Rate" }]}
            >
              <Input />
            </Form.Item>
          </div>
          <Form.Item
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h2
              style={{
                fontSize: `${
                  fontSize === "small"
                    ? "16px"
                    : fontSize === "large"
                    ? "24px"
                    : "20px"
                }`,
              }}
            >
              QR code
            </h2>

            <div style={{ marginTop: "10px" }}>
              <Button value="small" onClick={() => handleButtonClick("small")}>
                Small
              </Button>
              <Button
                value="default"
                onClick={() => handleButtonClick("default")}
              >
                Default
              </Button>
              <Button value="large" onClick={() => handleButtonClick("large")}>
                Large
              </Button>
            </div>
          </Form.Item>
          <Form.Item
            label="Sub code"
            name="subcode"
            rules={[{ required: true, message: "Please enter a subcode" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Design No"
            name="Designno"
            rules={[{ required: true, message: "Please enter a Design No" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              className="Addproduct-submit-btn Dashboard-Today-btn Dashboard-Today-btn-active"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <p className="Addproducts-heading">Add Multiple products</p>
      <div className="Add-multi-product-container">
        <Button
          className={`blinking-button blinking`}
          href={csv}
          download={csv}
          // onClick={() => handletableclick("Stockalert")}
        >
          Download Template
        </Button>
        <Button
          className={`blinking-button blinking`}
          // onClick={() => handletableclick("Paymentalert")}
        >
          Upload Products
        </Button>
      </div>
    </div>
  );
}

export default Addproducts;
