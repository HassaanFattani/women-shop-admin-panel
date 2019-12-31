import React, { Component } from "react";
import { Form, Input, Select, Button, Row, Col, Upload, Icon } from "antd";
import "./style.css";

const { Option } = Select;

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = { stringText: "" };
  }
  componentDidMount() {
    // document.body.style.background = "rgb(2,0,36)";
    // document.body.style.background =
    //   "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(73,155,231,1) 0%, rgba(255,255,255,1) 100%)";
    // document.body.style.backgroundAttachment = "fixed";
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        // xs: { span: 16 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 16 },
        sm: { span: 14 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        // xs: {
        //   span: 24,
        //   offset: 0
        // },
        sm: {
          span: 18,
          offset: 12
        }
      }
    };
    return (
      <div className="product-body">
        <Row>
          <Col xs={{ span: 10, offset: 1 }} lg={{ span: 3, offset: 2 }}></Col>
          <Col xs={{ span: 18, offset: 3 }} lg={{ span: 10, offset: 2 }}>
            <div className="container">
              <div className="form-parent">
                <h1 className="heading">Add Product</h1>
                <Form
                  {...formItemLayout}
                  className="form-product"
                  onSubmit={this.handleSubmit}
                >
                  <Form.Item label="Product Name">
                    {getFieldDecorator("ProductName", {
                      rules: [
                        {
                          required: true,
                          message: "Please input Product Name!"
                        }
                      ]
                    })(<Input />)}
                  </Form.Item>
                  <Form.Item label="Product Category" hasFeedback>
                    {getFieldDecorator("ProductCategory", {
                      rules: [
                        {
                          required: true,
                          message: "Please select product category!"
                        }
                      ]
                    })(
                      <Select placeholder="Please select product category">
                        <Option value="china">China</Option>
                        <Option value="usa">U.S.A</Option>
                      </Select>
                    )}
                  </Form.Item>
                  <Form.Item label="Product Detail">
                    {getFieldDecorator("ProductDetail", {
                      rules: [
                        {
                          required: true,
                          message: "Please input Product Detail!"
                        }
                      ]
                    })(<Input />)}
                  </Form.Item>
                  <Form.Item label="Product Quantity">
                    {getFieldDecorator("ProductQty", {
                      rules: [
                        {
                          required: true,
                          message: "Please input Product Quantity!"
                        }
                      ]
                    })(<Input />)}
                  </Form.Item>
                  <Form.Item label="Product Price">
                    {getFieldDecorator("ProductPrice", {
                      rules: [
                        {
                          required: true,
                          message: "Please input Product Price!"
                        }
                      ]
                    })(<Input />)}
                  </Form.Item>
                  <Form.Item label="Product Color">
                    {getFieldDecorator("ProductColor", {
                      rules: [
                        {
                          required: true,
                          message: "Please select your product colors!",
                          type: "array"
                        }
                      ]
                    })(
                      <Select
                        mode="multiple"
                        placeholder="Please select favourite colors"
                      >
                        <Option value="red">Red</Option>
                        <Option value="green">Green</Option>
                        <Option value="blue">Blue</Option>
                      </Select>
                    )}
                  </Form.Item>

                  <Form.Item label="Product Size">
                    {getFieldDecorator("ProductSize", {
                      rules: [
                        {
                          required: false,
                          message: "Please input Product Size!"
                        }
                      ]
                    })(<Input />)}
                  </Form.Item>
                  <Form.Item label="Product Sub Category" hasFeedback>
                    {getFieldDecorator("ProductSubCategory")(
                      <Select placeholder="Please select product sub category">
                        <Option value="china">China</Option>
                        <Option value="usa">U.S.A</Option>
                      </Select>
                    )}
                  </Form.Item>
                  <Form.Item label="Product Discount">
                    {getFieldDecorator("ProductDiscount", {
                      rules: [
                        {
                          required: false,
                          message: "Please input Product Discount!"
                        }
                      ]
                    })(<Input />)}
                  </Form.Item>
                  <Form.Item label="Product Image">
                    {getFieldDecorator("upload", {
                      valuePropName: "fileList",
                      getValueFromEvent: this.normFile
                    })(
                      <Upload
                        name="logo"
                        action="/upload.do"
                        listType="picture"
                      >
                        <Button>
                          <Icon type="upload" /> Click to upload
                        </Button>
                      </Upload>
                    )}
                  </Form.Item>
                  <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                      Save
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </Col>
          <Col xs={{ span: 10, offset: 1 }} lg={{ span: 3, offset: 2 }}></Col>
        </Row>
      </div>
    );
  }
}
const AddProductForm = Form.create({ name: "addProduct" })(AddProduct);
export default AddProductForm;
